<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $merchant->name }} | Mampir.in</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ mix('/css/main.css', '/assets/merchant') }}">

</head>
<body>
    <div id="app">
        @include('merchant::layouts.header')

        <main class="l-main">
            @include('merchant::layouts.sidebar')
            <div class="l-content">
                @yield('content')
            </div>
        </main>
    </div>

    <?php include_once(public_path('assets/merchant/images/svg/sprite.svg')); ?>

    <script src="{{ mix('/js/main.js', '/assets/merchant') }}"></script>
</body>
</html>