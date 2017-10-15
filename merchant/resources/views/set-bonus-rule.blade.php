@extends('merchant::layouts.master')

@section('content')
    <div class="l-container-fluid">
        <h4 class="text-muted mb-3">Set Bonus Rule</h4>
        <form class="l-form-box" action="{{ url('bonus-rule') }}" method="{{ $exists ? 'put' : 'post' }}" enctype="multipart/form-data">
            {{ csrf_field() }}

            <input type="hidden" name="venue_id" value="{{ $merchant->id }}">

            <div class="form-group">
                <image-upload
                        class="form-control{{ $errors->has('image') ? ' is-invalid' : '' }}"
                        value="{{ $exists ? $bonus_rule->image : null }}"
                        preview="/storage{{ $exists ? $bonus_rule->image : null }}"></image-upload>

                @if ($errors->has('image'))
                    <span class="invalid-feedback">
                        {{ $errors->first('image') }}
                    </span>
                @endif
            </div>

            <div class="form-group">
                <input type="text" name="title" class="form-control{{ $errors->has('title') ? ' is-invalid' : '' }}" placeholder="Judul Bonus" value="{{ $exists ? $bonus_rule->title : old('title') }}">

                @if ($errors->has('title'))
                    <span class="invalid-feedback">
                        {{ $errors->first('title') }}
                    </span>
                @endif
            </div>

            <div class="form-group">
                <textarea name="description" class="form-control" placeholder="Keterangan Bonus" rows="6">{{ $exists ? $bonus_rule->description : old('description') }}</textarea>
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="submit">Submit Bonus</button>
            </div>
        </form>   
    </div>
@endsection


