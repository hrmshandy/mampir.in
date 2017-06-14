<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#854f28">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <!-- MANIFEST -->
    {{-- <link rel="manifest" href="./manifest.json"> --}}

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

	<title>Mampir.in</title>

	 <!-- Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet">

	<!-- Styles -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
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
</body>
</html>
