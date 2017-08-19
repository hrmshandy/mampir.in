<!doctype html>
<html class="fixed sidebar-left-xs">
<head>

    <!-- Basic -->
    <meta charset="UTF-8">

    <title>Mampir.in Administartor</title>
    <meta name="keywords" content="Mampir.in Administartor"/>
    <meta name="description" content="Mampir.in - Administartor">
    <meta name="author" content="mampir.in">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

    <!-- Web Fonts & Icon Fonts  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

    <!-- Theme CSS -->
    <link rel="stylesheet" href="{{ asset('vendor/finder/css/finder.css') }}"/>
    <link rel="stylesheet" href="{{ mix('css/main.css', 'admin') }}"/>

    {{-- Head Libs --}}
    <script src="{{ asset('vendor/modernizr/modernizr.js') }}"></script>
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
            'baseUrl' => url('/')
        ]); ?>
    </script>
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand u-mr-x5" href="#"><img src="{{ asset('admin/images/logo.png') }}" alt="Logo Admin" style="height: 50px;"/></a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('_admin') }}">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('_admin/category') }}">Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('_admin/venue') }}">Venue</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>
                        <form id="logout-form" method="POST" action="{{ url('_admin/logout') }}" style="display: none;">
                            {{ csrf_field() }}
                        </form>
                    </li>
                </ul>
            </div>
        </nav>

        <main>
            @yield('content')
        </main>
    </div>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/holder/2.9.4/holder.min.js"></script>
    <script src="{{ mix('js/main.js', 'admin') }}"></script>
    @yield('scripts')
</body>
</html>
