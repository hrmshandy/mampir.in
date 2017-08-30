<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ mix('css/editor.css') }}">
</head>
<body>
    <div class="c-postArticle-content js-postField is-editable" role="textbox" contenteditable="true">
        <section class="l-section">
            <div class="l-section__divider"></div>
            <div class="l-section__content">
                <div class="l-section-inner l-section-inner--layoutNarrow">
                    <h3 class="c-post__title">Title</h3>
                    <figure class="c-post__image" contenteditable="false">
                        <img src="{{ asset('images/dummy-1.jpg') }}" alt="">
                    </figure>
                    <p class="c-post__content">Content</p>
                    <p>Content 2</p>
                </div>
            </div>
        </section>
    </div>

    <script src="{{ mix('/js/editor.js') }}"></script>
</body>
</html>