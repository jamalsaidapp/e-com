<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ mix('css/all.css') }}" rel="stylesheet">


</head>

<body>
    <div id="app">
        <app></app>
    </div>


    <!-- Scripts -->
<script src="{{ asset('js/app.js') }}"></script>

<script src="{{ asset('frontend/assets/js/modernizr.js') }}"></script>
<script src="{{ asset('frontend/assets/js/jquery-main.js') }}"></script>
<script src="{{ asset('frontend/assets/js/jquery-migrate.js') }}"></script>
<script src="{{ asset('frontend/assets/js/popper.min.js') }}"></script>
<script src="{{ asset('frontend/assets/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('frontend/assets/js/headroom.min.js') }}"></script>
<script src="{{ asset('frontend/assets/js/swiper.min.js') }}"></script>
<script src="{{ asset('frontend/assets/js/fancybox.min.js') }}"></script>
<script src="{{ asset('frontend/assets/js/slicknav.js') }}"></script>
<script src="{{ asset('frontend/assets/js/countdown.js') }}"></script>
<script src="{{ asset('frontend/assets/js/custom.js') }}"></script>

</body>

</html>
