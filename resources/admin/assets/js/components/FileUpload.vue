<template>
	<div>
		<div>
			<input type="file" :id="id || name" :accept="accept" @click="fileInputClick" @change="fileInputChange" :multiple="multiple">
			<span>
				<slot></slot>
			</span>
		</div>
		<!-- <svg class="progress-circle" width="30" height="30" viewBox="0 0 70 70"><path d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"/></svg>
		<svg class="checkmark" width="30" height="30" viewBox="0 0 70 70"><path d="m31.5,46.5l15.3,-23.2"/><path d="m31.5,46.5l-8.5,-7.1"/></svg>
		<svg class="cross" width="30" height="30" viewBox="0 0 70 70"><path d="m35,35l-9.3,-9.3"/><path d="m35,35l9.3,9.3"/><path d="m35,35l-9.3,9.3"/><path d="m35,35l9.3,-9.3"/></svg> -->
		<!-- <button type="button" @click="fileUpload">Upload</button> -->
	</div>
</template>

<script>

export default {
	props: {
	    name: {
	      	type: String,
	      	required: true
	    },
	    id: String,
	    action: {
	      	type: String,
	      	required: true
	    },
	    accept: String,
	    multiple: String,
	    headers: Object,
	    formData: Object,
	    method: String
	},
	data() {
		return {
			myFiles: [] // a container for the files in our field
		};
	},
	computed: {
		baseUrl() {
			return baseUrl;
		}
	},
	methods: {
		fileInputClick() {
	     	// click actually triggers after the file dialog opens
	      	this.$dispatch('onFileClick', this.myFiles);
	    },
	    fileInputChange() {
	    	// get the group of files assigned to this field
			var ident = this.id || this.name,
				el = this.$els.progressButton;
			this.myFiles = document.getElementById(ident).files;
			this.fileUpload();
			this.$dispatch('onFileChange', this.myFiles);
	    },
	    _onProgress(e) {
	      	// this is an internal call in XHR to update the progress
	      	e.percent = (e.loaded / e.total) * 100;
	      	this.$dispatch('onFileProgress', e);
	    },
	    _handleUpload(file) {
	    	this.$dispatch('beforeFileUpload', file);
			var form = new FormData();
			var xhr = new XMLHttpRequest();
			try {
				form.append('Content-Type', file.type || 'application/octet-stream');
				// our request will have the file in the ['file'] key
				form.append('file', file);
				for(var data in this.formData) {
					form.append(data, this.formData[data]);
				}
			} catch (err) {
				this.$dispatch('onFileError', file, err);
				return;
			}

			return new Promise(function(resolve, reject) {
				xhr.upload.addEventListener('progress', this._onProgress, false);

				xhr.onreadystatechange = function() {
					if (xhr.readyState < 4) {
						return;
					}
					if (xhr.status < 400) {
						var res = JSON.parse(xhr.response);
						this.$dispatch('onFileUpload', file, res);
						resolve(res);
					} else {
						var err = JSON.parse(xhr.responseText);
						err.status = xhr.status;
						err.statusText = xhr.statusText;
						//this.$dispatch('onFileError', file, err);
						reject(err);
					}
				}.bind(this);

				xhr.onerror = function() {
					var err = JSON.parse(xhr.responseText);
					err.status = xhr.status;
					err.statusText = xhr.statusText;
					//this.$dispatch('onFileError', file, err);
					reject(err);
				}.bind(this);

				xhr.open(this.method || "POST", baseUrl+this.action, true);
				if (this.headers) {
					for(var header in this.headers) {
						xhr.setRequestHeader(header, this.headers[header]);
					}
				}

				xhr.send(form);
        		this.$dispatch('afterFileUpload', file);

			}.bind(this));
	    },
	    fileUpload() {
			if(this.myFiles.length > 0) {
				// a hack to push all the Promises into a new array
				var arrayOfPromises = Array.prototype.slice.call(this.myFiles, 0).map(function(file) {
				  	return this._handleUpload(file);
				}.bind(this));
				// wait for everything to finish
				Promise.all(arrayOfPromises).then(function(allFiles) {
				  	this.$dispatch('onAllFilesUploaded', allFiles);
				}.bind(this)).catch(function(err) {
				  	this.$dispatch('onFileError', this.myFiles, err);
				}.bind(this));
			} else {
				// someone tried to upload without adding files
				var err = new Error("No files to upload for this field");
				this.$dispatch('onFileError', this.myFiles, err);
			}
		}
	}
}
</script>