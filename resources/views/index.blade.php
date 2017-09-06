<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bahagia Itu Dekat - Mampir.in</title>

    <!-- Basic Meta -->
    <meta name="title" content="Bahagia Itu Dekat - Mampir.in">
    <meta name="description" content="Bahagia Itu Dekat. Yuk, Mampir.in!">

    <!-- Facebook Meta -->
    <meta property="fb:app_id" content="1196580010452435">
    <meta property="og:title" content="Bahagia Itu Dekat - Mampir.in">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ request()->url() }}">
    <meta property="og:image" content="{{ asset('images/share/facebook.jpg') }}">
    <meta property="og:description" content="Bahagia Itu Dekat. Yuk, Mampir.in!">

    <!-- Twitter Meta-->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@mampirin">
    <meta name="twitter:creator" content="@mampirin">
    <meta name="twitter:title" content="Bahagia Itu Dekat - Mampir.in">
    <meta name="twitter:description" content="Bahagia Itu Dekat. Yuk, Mampir.in!">
    <meta name="twitter:image" content="{{ asset('images/share/facebook.jpg') }}">

    <!-- Disable tap highlight on IE -->
    <meta name="msapplication-tap-highlight" content="no">

    <!-- MANIFEST -->
    {{-- <link rel="manifest" href="./manifest.json"> --}}

    <!-- Main Favicon -->
    <link rel="icon" type="image/png" sizes="192x192"  href="{{ url('/images/favicon/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ url('/images/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ url('/images/favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ url('/images/favicon/favicon-16x16.png') }}">

    <!-- Add to homescreen for Chrome on Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="application-name" content="Mampir.in">
    <link rel="icon" sizes="192x192" href="../images/touch/chrome-touch-icon-192x192.png">

    <!-- Add to homescreen for Safari on iOS -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="Web Starter Kit">
    <link rel="apple-touch-icon" sizes="57x57" href="{{ url('/images/favicon/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ url('/images/favicon/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ url('/images/favicon/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ url('/images/favicon/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ url('/images/favicon/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ url('/images/favicon/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ url('/images/favicon/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ url('/images/favicon/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ url('/images/favicon/apple-icon-180x180.png') }}">

    <!-- Tile icon for Win8 (144x144 + tile color) -->
    <meta name="msapplication-TileImage" content="{{ url('/images/favicon/ms-icon-144x144.png') }}">
    <meta name="msapplication-TileColor" content="#000000">

    <!-- Color the status bar on mobile devices -->
    <meta name="theme-color" content="#854f28">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet">

	<!-- Styles -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
    {{--<link rel="stylesheet" href="{{ asset('css/leaflet.css') }}">--}}
    {{--<link rel="stylesheet" href="{{ asset('css/MarkerCluster.css') }}">--}}
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">


	<!-- Scripts -->
    <script>
        window.App = <?php echo json_encode([
            'csrfToken' => csrf_token(),
            'baseUrl' => url('/'),
        ]); ?>
    </script>
</head>
<body>
	<div id="app"></div>
    {{--<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAyXuLUPJEsAyBUaAEiGbXuIA4TaAbAudM&libraries=places&ver=3.22"></script>--}}
    {{-- <script src="{{ asset('js/masonry.pkgd.min.js') }}"></script> --}}
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
	<script src="{{ mix('js/app.js') }}"></script>
    <script>
        Vue.nextTick(function(){
            setTimeout(function() {
                const frames = document.querySelectorAll('iframe');
                for(let i = 0; i < frames.length; i++) {
                    const regx = new RegExp('https?:\\/\\/(www\\.)?mampir');
                    let iframe = frames[i];
                    if(regx.test(iframe.src)) {
                        iframe.onload = function() {
                            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 50 + 'px';
                        }
                    }
                }
            }, 1000);
        });
    </script>
</body>
</html>
