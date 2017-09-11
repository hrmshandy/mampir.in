var urlPatterns = [
    {
        regex: /youtu\.be\/([\w\-.]+)/,
        type: 'iframe', w: 560, h: 314,
        url: '//www.youtube.com/embed/$1',
        allowFullscreen: true
    },
    {
        regex: /youtube\.com(.+)v=([^&]+)/,
        type: 'iframe', w: 560, h: 314,
        url: '//www.youtube.com/embed/$2',
        allowFullscreen: true
    },
    {
        regex: /youtube.com\/embed\/([a-z0-9\-_]+(?:\?.+)?)/i,
        type: 'iframe', w: 560, h: 314,
        url: '//www.youtube.com/embed/$1',
        allowFullscreen: true
    },
    {
        regex: /vimeo\.com\/([0-9]+)/,
        type: 'iframe', w: 425, h: 350,
        url: '//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc',
        allowfullscreen: true
    },
    {
        regex: /vimeo\.com\/(.*)\/([0-9]+)/,
        type: "iframe", w: 425, h: 350,
        url: "//player.vimeo.com/video/$2?title=0&amp;byline=0",
        allowfullscreen: true
    }
];

tinymce.PluginManager.add('video', function(editor) {
    editor.addButton('video', {
        icon: 'youtube',
        tooltip: "Insert YouTube",
        onclick: function() {
            editor.windowManager.open({
                title: 'Insert YouTube',
                width: 500,
                height: 100,
                body: [
                    {type: 'textbox', name: 'url', placeholder: 'Enter a YouTube link'}
                ],
                onsubmit: function(e) {

                    e.preventDefault();

                    var data = tinymce.extend({}, e.data);

                    if(!e.data.url) {
                        tinymce.activeEditor.windowManager.alert('Please enter the YouTube link');
                    } else {

                        editor.windowManager.close();

                        tinymce.each(urlPatterns, function(pattern) {
                            var i;
                            var url;

                            var match = pattern.regex.exec(data.url);

                            if (match) {
                                url = pattern.url;

                                for (i = 0; match[i]; i++) {
                                    /*jshint loopfunc:true*/
                                    /*eslint no-loop-func:0 */
                                    url = url.replace('$' + i, function () {
                                        return match[i];
                                    });
                                }

                                data.source = url;
                                data.type = pattern.type;
                                data.allowFullscreen = pattern.allowFullscreen;
                                data.width = data.width || pattern.w;
                                data.height = data.height || pattern.h;
                            }
                        });

                        var html = document.createElement('figure');
                        var aspectRatioFill = document.createElement('div');
                        var iframeContainer = document.createElement('div');
                        var iframe = document.createElement('iframe');
                        var newLine = '<p><br></p>';

                        aspectRatioFill.classList.add('o-aspect-ratio-fill');
                        aspectRatioFill.style.paddingBottom = ((data.height/data.width)*100)+'%';

                        iframe.classList.add('o-iframe');
                        iframe.src = data.source;
                        iframe.width = data.width;
                        iframe.height = data.height;
                        iframe.setAttribute("allowFullscreen", data.allowFullscreen);
                        iframe.setAttribute('frameborder', 0);
                        iframe.setAttribute('scrolling', 'no');

                        iframeContainer.classList.add('o-iframe-container');
                        iframeContainer.appendChild(iframe);

                        html.className += 'o-ce o-ce--figure';
                        html.setAttribute('contenteditable', false);
                        html.appendChild(aspectRatioFill);
                        html.appendChild(iframeContainer);
                        // Insert content when the window form is submitted
                        editor.insertContent(html.outerHTML+newLine);
                        editor.fire('KeyDown');
                        editor.fire('KeyUp');
                    }
                }
            });
        }
    });
});