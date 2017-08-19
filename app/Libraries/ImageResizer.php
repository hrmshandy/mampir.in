<?php

namespace App\Libraries;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ImageResizer
{
    protected $file;
    protected $disk;
    protected $imageManager;

    protected $image;

    protected $width;
    protected $height;

    protected $path = '/';
    protected $extension = 'jpg';

    protected $availableResizeMode = ['exact', 'portrait', 'landscape', 'auto', 'fit', 'crop'];

    /**
     * ImageResizer constructor.
     * @param $file
     * @param Storage $disk
     * @param Image $image
     */
    public function __construct($file)
    {
        $this->file = $file;
        $this->disk = Storage::disk(config('filesystems.default'));
        $this->imageManager = new ImageManager;
    }

    /**
     * @param int|null $width
     * @param int|null $height
     * @param string $mode
     * @return $this
     * @throws \Exception
     */
    public function resize(int $width = null, int $height = null, string $mode = 'auto')
    {
        if($this->file instanceof UploadedFile) {
            $this->buildFromUploadedFile();
        } else if (preg_match("/^(http|https):\/\//", $this->file)) {
            $this->buildFromUrl();
        } else {
            throw new \Exception('source image undefined.');
        }

        if(!in_array($mode, $this->availableResizeMode)) {
            throw new \Exception('resize mode "'.$mode.'" not available.');
        }

        $this->{$mode."Resize"}($width, $height);

        return $this;
    }

    public function save($filename = null, $quality = 100)
    {
        if(empty($filename))
            $filename = time().'-'.str_random();
        $path = trim($this->path,'/').'/'.$filename.'.'.$this->extension;

        $this->disk->put($path, (string) $this->image->encode($this->extension, $quality));

        return $path;
    }

    public function setPath($path)
    {
        $this->path = $path;

        return $this;
    }

    protected function buildFromUploadedFile()
    {
        $this->image = $this->imageManager->make($this->file);
        $this->extension = $this->file->getClientOriginalExtension();
    }

    protected function buildFromUrl()
    {
        $content = file_get_contents($this->file);
        $this->image = $this->imageManager->make($content);
        $pathinfo_ext = pathinfo($this->file, PATHINFO_EXTENSION);
        $this->extension = !empty($pathinfo_ext) ? $pathinfo_ext : 'jpg';
    }

    // Resize Mode

    protected function autoResize($width, $height)
    {
        $this->image->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
    }

    protected function exactResize($width, $height)
    {
        $this->image->resize($width, $height, function ($constraint) {
            $constraint->upsize();
        });
    }

    protected function portraitResize($width, $height)
    {
        $this->image->widen($width, $height, function ($constraint) {
            $constraint->upsize();
        });
    }

    protected function landscapeResize($width, $height)
    {
        $this->image->heighten($width, $height, function ($constraint) {
            $constraint->upsize();
        });
    }

    protected function fitResize($width, $height)
    {
        $this->image->fit($width, $height, function ($constraint) {
            $constraint->upsize();
        });
    }

    protected function cropResize($width, $height)
    {
        //
    }

}