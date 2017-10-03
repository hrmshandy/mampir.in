@extends('merchant::layouts.master')

@section('content')
    <div class="l-container-fluid">
        <h4 class="text-muted mb-3">Set Bonus Rule</h4>
        <form class="l-form-box" action="{{ url('bonus-rule') }}" method="post">
            {{ csrf_field() }}

            <input type="hidden" name="venue_id" value="{{ $merchant->id }}">
            
            <div class="form-group">
                <image-upload></image-upload>
            </div>

            <div class="form-group">
                <input type="text" name="title" class="form-control" placeholder="Judul Bonus">
            </div>

            <div class="form-group">
                <textarea name="description" class="form-control" placeholder="Keterangan Bonus" rows="6"></textarea>
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="submit">Submit Bonus</button>
            </div>
        </form>   
    </div>
@endsection


