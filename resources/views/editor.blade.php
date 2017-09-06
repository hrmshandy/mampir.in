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
    <div class="c-postArticle-content js-postField is-editable">
        <section class="l-section">
            <div class="l-section__divider"></div>
            <div class="l-section__content">
                <div class="l-section-inner l-section-inner--layoutNarrow">
                    <h3 class="o-graf o-graf--h3">Title 1</h3>
                    <figure class="o-graf o-graf--figure" contenteditable="false">
                        <img src="{{ asset('images/dummy-1.jpg') }}" alt="">
                        <figcaption contenteditable="true"><span class="defaultValue">Caption (optional)</span></figcaption>
                    </figure>
                    <figure>
                        <iframe class="instagram-media instagram-media-rendered" src="https://www.instagram.com/p/BYA_iYLB0qI/embed/captioned" allowtransparency="true" frameborder="0" height="651" scrolling="no" style="background: rgb(255, 255, 255);border: 1px solid rgb(219, 219, 219);margin: 1px 1px 12px;max-width: 658px;width: calc(100% - 2px);border-radius: 4px;box-shadow: none;display: block;padding: 0px;"></iframe>
                    </figure>
                    <h3 class="o-graf o-graf--h3">Title 2</h3>
                    <p class="o-graf o-graf--p">Content</p>
                    <h3 class="o-graf o-graf--h3">Title 3</h3>
                    <p class="o-graf o-graf--p">Content 2</p>
                </div>
            </div>
        </section>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="{{ mix('/js/editor.js') }}"></script>
</body>
</html>