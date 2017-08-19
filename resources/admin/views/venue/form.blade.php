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
                                            <finder name="logo"
                                                    button-text="Select an image"
                                                    existing-image="{{ $venue->logo }}">
                                            </finder>
                                            @if($errors->has('logo'))
                                                <div class="o-form-feedback">{{ $errors->first('logo') }}</div>
                                            @endif
                                        </div>

                                    </div>
                                    <div class="o-grid__col u-9/12">
                                        <div class="o-form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                            <label for="">Venue Name</label>
                                            <input type="text" class="o-input" name="name" placeholder="Venue Name" value="{{ $venue->name }}">
                                            @if($errors->has('name'))
                                                <div class="o-form-feedback">{{ $errors->first('name') }}</div>
                                            @endif
                                        </div>
                                        <div class="o-form-group{{ $errors->has('categories') ? ' has-error' : '' }}">
                                            <label for="">Categories</label>
                                            @php $current_categories = $venue->exists ? $venue->categories()->pluck('id')->all() : []; @endphp
                                            <select name="categories[]" class="choice" placeholder="Type to search..." multiple>
                                                @foreach($categories as $category)
                                                    <option value="{{ $category->id }}"
                                                            @if(in_array($category->id, $current_categories)) selected @endif>
                                                        {{ $category->name }}
                                                    </option>
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
                                <div class="o-form-group{{ $errors->has('city_id') ? ' has-error' : '' }}">
                                    <label for="">City</label>
                                    <select name="city_id" class="choice" placeholder="Select City">
                                        @foreach($cities as $city)
                                            <option value="{{ $city->id }}"
                                                    @if($city->id == $venue->city_id) selected @endif>
                                                {{ $city->name }}
                                            </option>
                                        @endforeach
                                    </select>
                                    @if($errors->has('city_id'))
                                        <div class="o-form-feedback">{{ $errors->first('city_id') }}</div>
                                    @endif
                                </div>
                                <div class="o-form-group{{ $errors->has('area') ? ' has-error' : '' }}">
                                    <label for="">Area</label>
                                    <input type="text" class="o-input" name="area" placeholder="Area" value="{{ $venue->area }}">
                                    @if($errors->has('area'))
                                        <div class="o-form-feedback">{{ $errors->first('area') }}</div>
                                    @endif
                                </div>
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
                                Gallery
                            </div>
                            <div class="card-block">
                                <finder name="photos"
                                        button-text="Add an image"
                                        mode="gallery"
                                        :existing-images="{{ $venue->exists ? json_encode($venue->photos) : json_encode([]) }}">
                                </finder>
                            </div>
                        </div>
                        <div class="card u-mb-x2">
                            <div class="card-header">
                                Details
                            </div>
                            <div class="card-block">
                                <div class="o-form-group{{ $errors->has('detail.desc') ? ' has-error' : '' }}">
                                    <label for="">Description</label>
                                    <textarea class="o-textarea" name="detail[desc]" placeholder="Description" rows="4">{{ $venue->exists ? $venue->detail->desc : null }}</textarea>
                                    @if($errors->has('detail.desc'))
                                        <div class="o-form-feedback">{{ $errors->first('detail.desc') }}</div>
                                    @endif
                                </div>
                                <div class="o-grid">
                                    <div class="o-grid__col u-4/12">
                                        <div class="o-form-group{{ $errors->has('detail.phone_number') ? ' has-error' : '' }}">
                                            <label for="">Phone Number</label>
                                            <input type="text" class="o-input" name="detail[phone_number]" placeholder="Phone Number" value="{{ $venue->exists ? $venue->detail->phone_number : null }}">
                                            @if($errors->has('detail.phone_number'))
                                                <div class="o-form-feedback">{{ $errors->first('detail.phone_number') }}</div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-4/12">
                                        <div class="o-form-group{{ $errors->has('detail.website') ? ' has-error' : '' }}">
                                            <label for="">Website</label>
                                            <input type="text" class="o-input" name="detail[website]" placeholder="Website" value="{{ $venue->exists ? $venue->detail->website : null }}">
                                            @if($errors->has('detail.website'))
                                                <div class="o-form-feedback">{{ $errors->first('detail.website') }}</div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="o-grid__col u-4/12">
                                        <div class="o-form-group{{ $errors->has('detail.email') ? ' has-error' : '' }}">
                                            <label for="">E-Mail</label>
                                            <input type="text" class="o-input" name="detail[email]" placeholder="E-Mail" value="{{ $venue->exists ? $venue->detail->email : null }}">
                                            @if($errors->has('detail.email'))
                                                <div class="o-form-feedback">{{ $errors->first('detail.email') }}</div>
                                            @endif
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {{--<div class="card u-mb-x2">--}}
                            {{--<div class="card-header">--}}
                                {{--Facilities--}}
                            {{--</div>--}}
                            {{--<div class="card-block"></div>--}}
                        {{--</div>--}}
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
        var choices = document.querySelectorAll('.choice');

        choices.forEach(function(el){
            new Choices(el, {
                paste: false,
                duplicateItems: false,
                delimiter: ',',
                removeItemButton: true
            });
        });
    </script>
@endsection