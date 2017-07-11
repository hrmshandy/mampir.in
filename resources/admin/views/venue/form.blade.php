@extends('admin::layouts.master')

@section('content')
    <div class="bg-faded u-pt-x3" style="min-height: calc(100vh - 75px);">
        <div class="container">
            <div class="o-grid">
                <div class="o-grid__col u-8/12 u-push-2/12">
                    <form method="POST"
                          action="{{ $venue->exists ? adm_url('venue/'.$venue->id) : adm_url('venue') }}">
                        @if($venue->exists) {{ method_field('PUT') }} @endif
                        {{ csrf_field() }}
                        <div class="card u-mb-x2">
                            <div class="card-header">
                                Basic Information
                            </div>
                            <div class="card-block">
                                <div class="o-grid">
                                    <div class="o-grid__col u-3/12">
                                        <div class="o-form-group{{ $errors->has('logo') ? ' has-error' : '' }}">
                                            <label for="">Logo</label>
                                            <dropify name="logo" text="Select an image" default-file="{{ $venue->logo }}"></dropify>
                                            @if($errors->has('logo'))
                                                <div class="o-form-feedback">{{ $errors->first('logo') }}</div>
                                            @endif
                                        </div>

                                    </div>
                                    <div class="o-grid__col u-9/12">
                                        <div class="o-form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                            <label for="">Venue Name</label>
                                            <input type="text" class="o-input" name="name" placeholder="Venue Name" value="{{ $venue->exists ? $venue->name : null }}">
                                            @if($errors->has('name'))
                                                <div class="o-form-feedback">{{ $errors->first('name') }}</div>
                                            @endif
                                        </div>
                                        <div class="o-form-group{{ $errors->has('categories') ? ' has-error' : '' }}">
                                            <label for="">Categories</label>
                                            <select name="category[]" id="categories" placeholder="Type to search..." multiple>
                                                @foreach($categories as $category)
                                                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                                                @endforeach
                                            </select>
                                            @if($errors->has('categories'))
                                                <div class="o-form-feedback">{{ $errors->first('categories') }}</div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card u-mb-x2">
                            <div class="card-header">
                                Location
                            </div>
                            <div class="card-block">
                                <div class="o-form-group{{ $errors->has('address') ? ' has-error' : '' }}">
                                    <label for="">Address</label>
                                    <small class="text-muted">( Type to Search or drag the marker )</small>
                                    <places-search name="address"
                                                   :value="{{ json_encode(['address' => $venue->address, 'lat' => $venue->lat, 'lng' => $venue->lng ]) }}">
                                    </places-search>
                                    @if($errors->has('address'))
                                        <div class="o-form-feedback">{{ $errors->first('address') }}</div>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="card u-mb-x2">
                            <div class="card-header">
                                <div class="o-grid o-grid--middle">
                                    <div class="o-grid__col u-6/12">
                                        Gallery
                                    </div>
                                    <div class="o-grid__col u-6/12 u-text-right">
                                        <finder>Add Image</finder>
                                    </div>
                                </div>
                            </div>
                            <div class="card-block">
                                @if(count($venue->photos))
                                    <gallery :images="{{ json_encode($venue->photos) }}"></gallery>
                                @endif
                            </div>
                        </div>
                        <div class="card u-mb-x2">
                            <div class="card-header">
                                Details
                            </div>
                            <div class="card-block">
                                <div class="o-form-group{{ $errors->has('details.desc') ? ' has-error' : '' }}">
                                    <label for="">Description</label>
                                    <textarea class="o-textarea" name="details[desc]" placeholder="Description" rows="4">{{ $venue->exists ? $venue->details->desc : null }}</textarea>
                                    @if($errors->has('details.desc'))
                                        <div class="o-form-feedback">{{ $errors->first('details.desc') }}</div>
                                    @endif
                                </div>
                                <div class="o-grid">
                                    <div class="o-grid__col u-4/12">
                                        <div class="o-form-group{{ $errors->has('details.phone_number') ? ' has-error' : '' }}">
                                            <label for="">Phone Number</label>
                                            <input type="text" class="o-input" name="details[phone_number]" placeholder="Phone Number" value="{{ $venue->exists ? $venue->details->phone_number : null }}">
                                            @if($errors->has('details.phone_number'))
                                                <div class="o-form-feedback">{{ $errors->first('details.phone_number') }}</div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-4/12">
                                        <div class="o-form-group{{ $errors->has('details.website') ? ' has-error' : '' }}">
                                            <label for="">Website</label>
                                            <input type="text" class="o-input" name="details[website]" placeholder="Website" value="{{ $venue->exists ? $venue->details->website : null }}">
                                            @if($errors->has('details.website'))
                                                <div class="o-form-feedback">{{ $errors->first('details.website') }}</div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-4/12">
                                        <div class="o-form-group{{ $errors->has('details.email') ? ' has-error' : '' }}">
                                            <label for="">E-Mail</label>
                                            <input type="text" class="o-input" name="details[email]" placeholder="E-Mail" value="{{ $venue->exists ? $venue->details->email : null }}">
                                            @if($errors->has('details.email'))
                                                <div class="o-form-feedback">{{ $errors->first('details.email') }}</div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card u-mb-x2">
                            <div class="card-header">
                                Facilities
                            </div>
                            <div class="card-block"></div>
                        </div>
                        {{--<div class="card u-mb-x2">--}}
                            {{--<div class="card-header">--}}
                                {{--Opening Hours--}}
                            {{--</div>--}}
                            {{--<div class="card-block"></div>--}}
                        {{--</div>--}}
                        <div class="u-mb-x5">
                            <a href="{{ adm_url('venue') }}" class="o-button o-button--default">Cancel</a>
                            @if($venue->exists)
                                @if($venue->status == 1)
                                    <input type="submit" name="status" class="o-button o-button--warning" value="Unpublish">
                                @else
                                    <input type="submit" name="status" class="o-button o-button--success" value="Publish">
                                @endif
                            @else
                                <input type="submit" name="status" class="o-button o-button--success" value="Publish">
                            @endif
                            <button type="submit" class="o-button o-button--success">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        var categories = new Choices('#categories', {
            paste: false,
            duplicateItems: false,
        });
    </script>
@endsection