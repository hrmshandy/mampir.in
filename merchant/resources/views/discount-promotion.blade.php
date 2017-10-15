@extends('merchant::layouts.master')

@section('content')
    <div class="l-container-fluid">
        <h4 class="text-muted mb-3">Set Bonus Rule</h4>
        <form class="l-form-box" action="{{ url('discount-promotion') }}" method="{{ $exists ? 'put' : 'post' }}" enctype="multipart/form-data">
            {{ csrf_field() }}

            <input type="hidden" name="venue_id" value="{{ $merchant->id }}">

            <div class="form-group">
                <image-upload
                        class="form-control{{ $errors->has('image') ? ' is-invalid' : '' }}"
                        value="{{ $exists ? $discount->image : null }}"
                        preview="/storage{{ $exists ? $discount->image : null }}"></image-upload>

                @if ($errors->has('image'))
                    <span class="invalid-feedback">
                        {{ $errors->first('image') }}
                    </span>
                @endif
            </div>

            <div class="form-group">
                <input type="text" name="title" class="form-control{{ $errors->has('title') ? ' is-invalid' : '' }}" placeholder="Judul Bonus" value="{{ $exists ? $discount->title : old('title') }}">

                @if ($errors->has('title'))
                    <span class="invalid-feedback">
                        {{ $errors->first('title') }}
                    </span>
                @endif
            </div>

            <div class="form-group">
                <div class="row align-items-center">
                    <div class="col-sm-5">
                        <div class="d-flex">
                            <select name="date_start[day]" id="" class="form-control w-50 mr-1{{ $errors->has('date_start.day') ? ' is-invalid' : '' }}">
                                <option value="">Tgl</option>
                                @for($d = 1; $d <= 31; $d++)
                                    <option value="{{ $d }}"
                                            @if($discount->date_start['day'] == $d) selected @endif>
                                        {{ $d }}
                                    </option>
                                @endfor
                            </select>
                            <select name="date_start[month]" id="" class="form-control{{ $errors->has('date_start.month') ? ' is-invalid' : '' }}">
                                <option value="">Bulan</option>
                                @for($m = 1; $m <= 12; $m++)
                                    <option value="{{ $m }}"
                                            @if($discount->date_start['month'] == $m) selected @endif
                                            @if($m < now()->month) disabled @endif>
                                        {{ date("F", mktime(0, 0, 0, $m, 1)) }}
                                    </option>
                                @endfor
                            </select>
                        </div>

                        @if ($errors->has('date_start.day') or $errors->has('date_start.month'))
                            <span class="invalid-feedback d-block">
                                Date start is required.
                            </span>
                        @endif
                    </div>
                    <div class="col-sm-2">
                        <div class="u-dividerH u-dividerH--small"></div>
                    </div>
                    <div class="col-sm-5">
                        <div class="d-flex">
                            <select name="date_end[day]" id="" class="form-control w-50 mr-1{{ $errors->has('date_end.day') ? ' is-invalid' : '' }}">
                                <option value="">Tgl</option>
                                @for($d = 1; $d <= 31; $d++)
                                    <option value="{{ $d }}"
                                            @if($discount->date_end['day'] == $d) selected @endif>
                                        {{ $d }}
                                    </option>
                                @endfor
                            </select>
                            <select name="date_end[month]" id="" class="form-control{{ $errors->has('date_end.month') ? ' is-invalid' : '' }}">
                                <option value="">Bulan</option>
                                @for($m = 1; $m <= 12; $m++)
                                    <option value="{{ $m }}"
                                            @if($discount->date_end['month'] == $m) selected @endif
                                            @if($m < now()->month) disabled @endif>
                                        {{ date("F", mktime(0, 0, 0, $m, 1)) }}
                                    </option>
                                @endfor
                            </select>
                        </div>

                        @if ($errors->has('date_end.day') or $errors->has('date_end.month'))
                            <span class="invalid-feedback d-block">
                                Date end is required.
                            </span>
                        @endif
                    </div>
                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="submit">Submit Bonus</button>
            </div>
        </form>
    </div>
@endsection


