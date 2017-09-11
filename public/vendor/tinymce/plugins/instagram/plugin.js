tinymce.PluginManager.add('instagram', function(editor) {
    editor.addButton('instagram', {
        icon: 'instagram',
        tooltip: "Insert Instagram",
        onclick: function() {

            editor.windowManager.open({
                title: 'Insert Instagram',
                width: 500,
                height: 100,
                body: [
                    {type: 'textbox', name: 'url', placeholder: 'Enter a Instagram post link'}
                ],
                onsubmit: function(e) {

                    e.preventDefault();

                    if(!e.data.url) {
                        tinymce.activeEditor.windowManager.alert('Please enter the Instagram post link');
                    } else {

                        axios.get('/api/media-resource/'+e.data.url).then(function(response) {
                            var data = response.data.data;
                            var status = response.data.status;

                            if(status === 'success') {

                                editor.windowManager.close();

                                var html = document.createElement('figure');
                                var aspectRatioFill = document.createElement('div');
                                var iframeContainer = document.createElement('div');
                                var iframe = document.createElement('iframe');
                                var newLine = '<p><br></p>';

                                aspectRatioFill.classList.add('o-aspect-ratio-fill');

                                iframe.classList.add('o-iframe');
                                iframe.src = '/media/'+data.id;
                                iframe.width = data.width;
                                iframe.height = 625;
                                iframe.setAttribute("allowFullscreen", data.allowFullscreen);
                                iframe.setAttribute('frameborder', 0);
                                iframe.setAttribute('scrolling', 'no');

                                iframeContainer.classList.add('o-iframe-container');
                                iframeContainer.appendChild(iframe);

                                html.className += 'o-ce o-ce--figure';
                                html.setAttribute('contenteditable', false);
                                html.setAttribute('id', data.id);
                                html.appendChild(aspectRatioFill);
                                html.appendChild(iframeContainer);

                                // Insert content when the window form is submitted
                                editor.insertContent(html.outerHTML+newLine);

                                editor.fire('KeyDown');
                            } else {
                                tinymce.activeEditor.windowManager.alert("Oops, Can't scrap this post url, maybe this post url is private.");
                            }
                        });
                    }
                }
            });

        }
    });
});