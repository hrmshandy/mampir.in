<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                        <a href="{{ url('/register') }}">Register</a>
                    @endif
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Laravel
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Documentation</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script>
            var teamArray = [
                { id: 1231312, nama: "Jayadi" },
                { id: 33312412, nama: "Perkasa" },
                { id: 435345345, nama: "Sutisan" }
            ];

            function objectToFormData(obj, form, namespace) {

                var fd = form || new FormData();
                var formKey;

                for(var property in obj) {
                    if(obj.hasOwnProperty(property)) {

                        if(namespace) {
                            formKey = namespace + '[' + property + ']';
                        } else {
                            formKey = property;
                        }

                        // if the property is an object, but not a File,
                        // use recursivity.
                        if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                            objectToFormData(obj[property], fd, formKey);
                        } else {
                            // if it's a string or a File object
                            fd.append(formKey, obj[property]);
                        }

                    }
                }

                return fd;
            }
            var data = { "teams": teamArray };
            var formData = objectToFormData(data);
            $.ajax({
                url: '/test',
                data: formData,
                type: 'POST',
                contentType: false,
                processData: false,
                success: function(response) {
                    console.log(response);
                }
            });
        </script>
    </body>
</html>
