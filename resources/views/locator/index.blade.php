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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="{{ mix('css/locator.css') }}" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css" rel="stylesheet" />
</head>
<body>
    <div id="app">
        <div class="locator-wrapper">
            <div class="locator">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <select2 class="form-control" v-model="form.city_id" :disabled="searching">
                                <option disabled value="0">Select City</option>
                                @foreach($cities as $key => $value)
                                    <option value="{{ $key }}">{{ $value }}</option>
                                @endforeach
                            </select2>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Area" v-model="form.area">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <select2 class="form-control" v-model="form.categories" :disabled="searching" multiple>
                                <option disabled value="">-- Select Categories --</option>
                                @foreach($categories as $key => $value)
                                    <option value="{{ $key }}">{{ $value }}</option>
                                @endforeach
                            </select2>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="form-group">
                            <input type="text" name="query" class="form-control" v-model="form.query" placeholder="Query" :disabled="searching">
                        </div>
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
                            <div class="row">
                                <div class="col-sm-6">
                                    <button class="btn btn-success btn-sm location__btn" type="button" @click="save(index)" :disabled="result.saving">
                                        <span v-if="!result.saving">Save</span>
                                        <span v-else>Loading...</span>
                                    </button>
                                    <button class="btn btn-danger btn-sm location__btn" type="button" @click="ignore(index)">Ignore</button>

                                </div>
                                <div class="col-sm-6 text-right text-warning">
                                    <span v-if="result.exists">Already imported</span>
                                </div>
                            </div>
                            <div class="location__body">
                                <div class="location__logo"></div>
                                <div class="location__info">
                                    <input type="text" class="form-control location__name" placeholder="Name" v-model="result.name">
                                    <textarea rows="2" class="form-control location__address" placeholder="Address" v-model="result.address"></textarea>
                                </div>
                                <div v-if="result.photos.length > 0" class="location__photos">
                                    <div v-for="photo in result.photos" class="location__photo-item">
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

    <script type="text/x-template" id="select2-template">
        <select>
            <slot></slot>
        </select>
    </script>

    <!-- Scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <script src="{{ mix('js/locator.js') }}"></script>
</body>
</html>
