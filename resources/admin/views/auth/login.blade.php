<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Login</title>

    <!-- Web Fonts & Icon Fonts  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('css/main.css', 'admin') }}" rel="stylesheet">
</head>
<body>

<!-- start: page -->
<div class="l-auth">
    <div class="l-auth__logo">
        <a href="#">
            <img src="{{ asset('admin/images/logo.png') }}" height="54" alt="Logo Admin" />
        </a>
    </div>
    <h4 class="l-auth__header">Login</h4>
    <form method="POST" action="{{ url('/_admin/login') }}" class="l-auth__form">
        {{ csrf_field() }}
        <div class="o-form-group{{ $errors->has('email') ? ' has-error' : '' }}">
            <label for="email">E-Mail</label>
            <div class="o-input-group">
                <input type="email" class="o-input" placeholder="E-Mail" name="email">
                <i class="o-input-group__pre-offset-icon material-icons">email</i>
            </div>
            @if ($errors->has('email'))
                <div class="o-form-feedback">{{ $errors->first('email') }}</div>
            @endif
        </div>
        <div class="o-form-group{{ $errors->has('password') ? ' has-error' : '' }}">
            <label for="password">Password</label>
            <div class="o-input-group">
                <input type="password" class="o-input" placeholder="Password" name="password">
                <i class="o-input-group__pre-offset-icon material-icons">lock</i>
            </div>
            @if ($errors->has('password'))
                <div class="o-form-feedback">{{ $errors->first('password') }}</div>
            @endif
        </div>
        <div class="l-auth__actions">
            <button class="o-button o-button--primary" type="submit">Log in</button>
            <div class="o-checkbox o-checkbox--inline">
                <label class="o-checkbox__label">
                    <input class="o-checkbox__input" type="checkbox" name="remember">Remember Me
                </label>
            </div>
        </div>
    </form>
</div>
<!-- end: page -->

<!-- Vendor JavaScripts -->
<script src="{{ asset('vendor/jquery/jquery.js') }}"></script>
<script src="{{ asset('vendor/bootstrap/js/bootstrap.js') }}"></script>

@yield('scripts')
</body>
</html>
