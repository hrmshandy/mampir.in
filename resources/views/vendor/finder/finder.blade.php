<!DOCTYPE html>
<html>
    <head>
        <meta name="_token" content="{!! csrf_token() !!}">

        <title>Finder</title>

        <link href="{{ asset('vendor/finder/css/finder.css') }}" rel="stylesheet" type="text/css">

        <script src="{{ asset('vendor/modernizr/modernizr.js') }}"></script>
        <script>
            window.App = <?php echo json_encode([
                'baseUrl' => url('/'),
                'csrfToken' => csrf_token()
            ]); ?>
        </script>
    </head>
    <body>
        <div id="app">
            <file-manager accept="image/*"></file-manager>
        </div>

        <script src="{{ asset('vendor/finder/js/finder.js') }}"></script>

    </body>
</html>
