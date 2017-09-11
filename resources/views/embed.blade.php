<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }}</title>
    <style>
        html {
            box-sizing: border-box;
        }
        *, *:before, *:after {
            box-sizing: inherit;
        }
        body {
            margin: 0;
        }
        .instagram-media {
            max-width: 700px !important;
        }
    </style>
</head>
<body>
    {!! $html !!}
    <script>
        var wrapper = window.parent.document.getElementById('{{ $id }}');
        var aspectRatioFill = wrapper.querySelector('.o-aspect-ratio-fill');
        var parentIframe = wrapper.querySelector('.o-iframe');

        var blockquote = document.querySelector('blockquote');
        var blockquoteWidth = blockquote.clientWidth;
        var docWidth = document.body.clientWidth;
        var thumbnailWidth = parseInt("{{ $thumbnail_width }}");
        var thumbnailHeight = parseInt("{{ $thumbnail_height }}");
        var newThumbnailheight = blockquoteWidth * thumbnailHeight / thumbnailWidth;
        var captionHeight = parseInt("{{ !empty($title) ? (blockquote.childNodes[0].querySelectorAll('p')[0].clientHeight+100) : 0 }}");
        var iframeHeight = captionHeight + newThumbnailheight + 64;
        var paddingPercantage = (iframeHeight / docWidth) * 100;

        if(wrapper && parentIframe && aspectRatioFill) {
            aspectRatioFill.style.paddingBottom = paddingPercantage+'%';
            parentIframe.height = iframeHeight;
        }

        window.addEventListener('resize', function() {
            var iframe = document.querySelector('iframe');
//            console.log(iframe.height);
            if(iframe && iframe.clientHeight !== 0) {
                iframeHeight = iframe.clientHeight;
            }
            paddingPercantage = (iframeHeight / docWidth) * 100;

            if(wrapper && parentIframe && aspectRatioFill) {
                aspectRatioFill.style.paddingBottom = paddingPercantage+'%';
                parentIframe.height = iframeHeight;
            }
        });
    </script>

</body>
</html>