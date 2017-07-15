<?php

namespace Hrmsh\Finder;

use Carbon\Carbon;
use Illuminate\Http\File as UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Hrmshandy\Finder\Helpers\File as FileHelpers;

class UploadHandler
{

    public $allowedExtensions = array();
    public $sizeLimit = null;
    public $inputName = 'qqfile';
    public $chunksFolder = 'chunks';
    public $chunksCleanupProbability = 0.001; // Once in 1000 requests on avg
    public $chunksExpireIn = 604800; // One week

    protected $uploadName;
    protected $params;
    protected $disk;
    protected $storage;

    /**
     * UploadHandler constructor.
     * @param $params
     */
    public function __construct($params)
    {
        $this->params = $params;
        $this->disk = config('filesystems.default');
        $this->storage = Storage::disk($this->disk);
    }

    /**
     * Get the original filename
     */
    public function getName(){
        if(isset($this->params['qqfilename'])) {
            return $this->params['qqfilename'];
        }
        if($this->params[$this->inputName]) {
            return $this->params[$this->inputName]->getClientOriginalName();
        }
    }

    /**
     * Get the name of the uploaded file
     */
    public function getUploadName(){
        return $this->uploadName;
    }

    /**
     * @param $uploadDirectory
     * @param null $name
     * @return array
     */
    public function handleUpload($uploadDirectory = '', $name = null)
    {
        // Check that the max upload size specified in class configuration does not
        // exceed size allowed by server config
        if ($this->toBytes(ini_get('post_max_size')) < $this->sizeLimit ||
            $this->toBytes(ini_get('upload_max_filesize')) < $this->sizeLimit){
            $neededRequestSize = max(1, $this->sizeLimit / 1024 / 1024) . 'M';
            return array('error'=> "Server error. Increase post_max_size and upload_max_filesize to ".$neededRequestSize);
        }

        // check upload directory is writable
        $rootDirectory = config('filesystems.disks.'.$this->disk.'.root');
        if (!File::isWritable($rootDirectory)){
            return array('error' => "Server error. Uploads directory isn't writable");
        }

        $type = request()->server('CONTENT_TYPE');
        if (request()->server('HTTP_CONTENT_TYPE')) {
            $type = request()->server('HTTP_CONTENT_TYPE');
        }

        if(!isset($type)) {
            return array('error' => "No files were uploaded.");
        } else if (strpos(strtolower($type), 'multipart/') !== 0){
            return array('error' => "Server error. Not a multipart request. Please set forceMultipart to default value (true).");
        }

        // Get size and name
        $file = $this->params[$this->inputName];
        $size = $file->getClientSize();
        if (isset($this->params['qqtotalfilesize'])) {
            $size = $this->params['qqtotalfilesize'];
        }
        if ($name === null){
            $name = $this->getName();
        }
        // check file error
        if(!$file->isValid()) {
            return array('error' => 'Upload Error #'.$file->getError());
        }

        // Validate name
        if ($name === null || $name === ''){
            return array('error' => 'File name empty.');
        }

        // Validate file size
        if ($size == 0){
            return array('error' => 'File is empty.');
        }

        if (!is_null($this->sizeLimit) && $size > $this->sizeLimit) {
            return array('error' => 'File is too large.', 'preventRetry' => true);
        }

        // Validate file extension
        $pathinfo = pathinfo($name);
        $ext = isset($pathinfo['extension']) ? $pathinfo['extension'] : '';

        if($this->allowedExtensions && !in_array(strtolower($ext), array_map("strtolower", $this->allowedExtensions))){
            $these = implode(', ', $this->allowedExtensions);
            return array('error' => 'File has an invalid extension, it should be one of '. $these . '.');
        }

        // Save a chunk
        $totalParts = isset($this->params['qqtotalparts']) ? (int)$this->params['qqtotalparts'] : 1;

        $uuid = $this->params['qquuid'];
        if ($totalParts > 1){
            // handle chunk
        } else {

            // create upload directory if not exists
            if(!$this->storage->exists($uploadDirectory)) {
                $this->storage->makeDirectory($uploadDirectory, 0777, true);
            }

            $uploadName = $this->uploadName = time().'-'.$uuid.'.'.$ext;
            $upload = $this->storage->putFileAs($uploadDirectory, new UploadedFile($file), $uploadName);
            if($upload) {
//                return array(
//                    'success' => true,
//                    'uuid' => $uuid,
//                    'original_file_name' => $name,
//                    'uploaded_file_name' => $uploadName,
//                    'file_size' => $size
//                );
                return array(
                    'success' => true,
                    'uuid' => $uuid,
                    'id' => $uuid,
                    'extension' => $ext,
                    'fullPath' => '/'.$upload,
                    'mimeType' => $this->storage->mimeType($upload),
                    'modified' => Carbon::createFromTimestamp($this->storage->lastModified($upload)),
                    'name' => $uploadName,
                    'size' => FileHelpers::getHumanReadableSize($size)
                );
            }

            return array('error'=> 'Could not save uploaded file.' .
                'The upload was cancelled, or server error encountered');
        }
    }

    /**
     * Converts a given size with units to bytes.
     * @param string $str
     * @return int
     */
    protected function toBytes($str){
        $str = trim($str);
        $last = strtolower($str[strlen($str)-1]);
        $val;
        if(is_numeric($last)) {
            $val = (int) $str;
        } else {
            $val = (int) substr($str, 0, -1);
        }
        switch($last) {
            case 'g': case 'G': $val *= 1024;
            case 'm': case 'M': $val *= 1024;
            case 'k': case 'K': $val *= 1024;
        }
        return $val;
    }

}