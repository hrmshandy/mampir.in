<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ mix('css/locator.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <div class="locator-wrapper">
            <div class="locator">
                <div class="row">
                    <div class="col-sm-5">
                        <select name="category" class="form-control" v-model="form.category" :disabled="searching">
                            <option value="">-- Select Category --</option>
                            @foreach($categories as $key => $value)
                                <option value="{{ $key }}">{{ $value }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="col-sm-5">
                        <input type="text" name="query" class="form-control" v-model="form.query" placeholder="Query" :disabled="searching">
                    </div>
                    <div class="col-sm-2">
                        <button type="button" class="btn btn-primary btn-block" @click="search" :disabled="searching">
                            <span v-if="!searching">Search</span>
                            <span v-else>Loading...</span>
                        </button>
                    </div>
                </div>

                <div v-if="hasResult">
                    <div v-if="!results.length" class="locator-no-result">
                        <p>No Result Found</p>
                    </div>

                    <div v-else class="locator-result">
                        <div class="locator-result__bar">
                            <button class="btn btn-success" type="button" @click="saveAll" :disabled="saving">
                                <span v-if="!saving">Save All</span>
                                <span v-else>Loading...</span>
                            </button>
                        </div>
                        <div v-for="(result, index) in results" class="location has-no-logo">
                            <button class="btn btn-success btn-sm location__btn" type="button" @click="save(index)" :disabled="result.saving">
                                <span v-if="!result.saving">Save</span>
                                <span v-else>Loading...</span>
                            </button>
                            <button class="btn btn-danger btn-sm location__btn" type="button" @click="ignore(index)">Ignore</button>
                            <div class="location__body">
                                <div class="location__logo"></div>
                                <div class="location__info">
                                    <input type="text" class="form-control location__name" placeholder="Name" v-model="result.name">
                                    <textarea rows="2" class="form-control location__address" placeholder="Address" v-model="result.address"></textarea>
                                </div>
                                <div v-if="result.place_photos.length > 0" class="location__photos">
                                    <div v-for="photo in result.place_photos" class="location__photo-item">
                                        <img :src="photo" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/locator.js') }}"></script>
</body>
</html>
