@extends('admin::layouts.master')

@section('content')

    <div class="bg-faded u-pt-x3" style="min-height: calc(100vh - 75px);">
        <div class="container">
            <div class="o-grid">
                <div class="o-grid__col u-8/12 u-push-2/12">
                    <div class="u-mb-x4">
                        <a href="{{ adm_url('venue/create') }}" class="o-button o-button--success">Add New</a>
                        <a href="{{ adm_url('locator') }}" class="o-button o-button--success">Add by google locator</a>
                    </div>

                    @php
                        $hasFilter = request()->has('city_id') || request()->has('categories');
                        $hasSort = request()->has('sort_field') || request()->has('sort_direction');
                    @endphp

                    <div class="o-grid o-grid--middle u-mb-x3">
                        <div class="o-grid__col u-8/12">
                            <form>
                                <input type="hidden" name="sort_field" value="{{ request('sort_field') }}">
                                <input type="hidden" name="sort_direction" value="{{ request('sort_direction') }}">
                                <input type="hidden" name="city_id" value="{{ request('city_id') }}">
                                @if(request()->has('categories'))
                                    @foreach(request('categories') as $category)
                                        <input type="hidden" name="categories[]" value="{{ request('city_id') }}">
                                    @endforeach
                                @endif
                                <div class="input-group">
                                    <input type="text" name="keyword" class="form-control" placeholder="Search for..." value="{{ request('keyword') }}">
                                    <span class="input-group-btn">
                                        <button class="btn btn-secondary" type="submit"><i class="material-icons">search</i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div class="o-grid__col u-4/12 u-text-right">
                            <a href="#" data-trigger="filter" class="o-button o-button--link @if($hasFilter) o-button--primary @endif">Filter</a>
                            <a href="#" data-trigger="sort" class="o-button o-button--link @if($hasSort) o-button--primary @endif">Sort</a>
                            <a href="{{ request()->url() }}" class="o-button o-button--link">Clear All</a>
                        </div>
                    </div>

                    <div id="filter"
                         @if($hasFilter)
                            class="has-opened u-mb-x2"
                         @else
                             class="u-mb-x2"
                             style="display: none;"
                         @endif>
                        <form class="o-grid o-grid--middle">
                            <input type="hidden" name="sort_field" value="{{ request('sort_field') }}">
                            <input type="hidden" name="sort_direction" value="{{ request('sort_direction') }}">
                            <input type="hidden" name="keyword" value="{{ request('keyword') }}">
                            <div class="o-grid__col u-4/12">
                                <select name="city_id" class="choice" placeholder="Select City">
                                    @foreach($cities as $city)
                                        <option value="{{ $city->id }}"
                                                @if($city->id == request('city_id')) selected @endif>
                                            {{ $city->name }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="o-grid__col u-6/12">
                                <select name="categories[]" class="choice" placeholder="Select Category" multiple>
                                    @foreach($categories as $category)
                                        <option value="{{ $category->id }}"
                                                @if(request()->has('categories')
                                                    and in_array($category->id, request('categories'))) selected @endif>
                                            {{ $category->name }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="o-grid__col u-2/12">
                                <button class="o-button o-button--primary" type="submit">Filter</button>
                            </div>
                        </form>
                    </div>

                    <div id="sort"
                         @if($hasSort)
                             class="has-opened u-mb-x2"
                         @else
                             class="u-mb-x2"
                             style="display: none;"
                         @endif>
                        <form class="o-grid o-grid--middle">
                            <input type="hidden" name="keyword" value="{{ request('keyword') }}">
                            <input type="hidden" name="city_id" value="{{ request('city_id') }}">
                            @if(request()->has('categories'))
                                @foreach(request('categories') as $category)
                                    <input type="hidden" name="categories[]" value="{{ request('city_id') }}">
                                @endforeach
                            @endif
                            <div class="o-grid__col u-4/12">
                                <select name="sort_field" class="form-control">
                                    <option value="created_at" @if(request('sort_field') == 'created_at') selected @endif>Date Creation</option>
                                    <option value="name" @if(request('sort_field') == 'name') selected @endif>Name</option>
                                </select>
                            </div>
                            <div class="o-grid__col u-4/12">
                                <select name="sort_direction" class="form-control">
                                    <option value="desc" @if(request('sort_direction') == 'desc') selected @endif>Descending</option>
                                    <option value="asc" @if(request('sort_direction') == 'asc') selected @endif>Ascending</option>
                                </select>
                            </div>
                            <div class="o-grid__col u-4/12">
                                <button class="o-button o-button--primary" type="submit">Sort</button>
                            </div>
                        </form>
                    </div>


                    @if(count($venues) > 0)
                        @foreach($venues as $venue)
                            <div class="card u-mt-x2">
                                <div class="card-block">
                                    <div class="c-venue">
                                        @if(count($venue->photos) > 0)
                                            <div class="c-venue__image" style="background-image: url({{ '/img/cache/small/'.$venue->photos[0] }})"></div>
                                        @else
                                            <div class="c-venue__image holderjs" data-background-src="?holder.js/150x100?theme=vine&text=No Image"></div>
                                        @endif
                                        <div class="c-venue__body">
                                            <h5 class="u-mt-x0 u-mb-x2">
                                                {{ $venue->name }}
                                                <small>
                                                    @if($venue->status == 1)
                                                        <span class="badge badge-success">Published</span>
                                                    @else
                                                        <span class="badge badge-warning">Unpublished</span>
                                                    @endif
                                                </small>
                                            </h5>
                                            {{ $venue->address }} <br/>
                                            <div class="u-mt-x1">
                                                <label for="categories">Categories:</label>
                                                @if(count($venue->categories))
                                                    @foreach($venue->categories as $category)
                                                        <span class="badge badge-primary">{{ $category->name }}</span>
                                                    @endforeach
                                                @endif
                                            </div>


                                            <hr>
                                            <div class="c-venue__actions">
                                                <a href="{{ adm_url('venue/'.$venue->id.'/edit') }}" class="btn btn-link btn-sm u-color-primary"><i class="material-icons">mode_edit</i> Edit</a>
                                                <form method="POST" action="{{ adm_url('venue/'.$venue->id) }}" class="u-inline-block">
                                                    {{ method_field('DELETE') }}
                                                    {{ csrf_field() }}
                                                    <button type="submit" style="cursor: pointer;"
                                                            class="btn btn-link btn-sm u-color-danger"
                                                            onclick="return confirm('Are you sure ?')">
                                                        <i class="material-icons">delete</i> Delete
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @endif

                    <div class="u-mt-x3">
                        {{ $venues->links('pagination::bootstrap-4') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


@section('scripts')
    <script>

        function toggle(el) {
            var container = document.getElementById(el.dataset.trigger);

            if(container.classList.contains('has-opened')) {
                el.classList.remove('o-button--primary');
                container.classList.remove('has-opened');
                container.style.display = 'none';
            } else {
                el.classList.add('o-button--primary');
                container.classList.add('has-opened');
                container.style.display = 'block';
            }
        }

        // sort
        var sortBtn = document.querySelector('[data-trigger="sort"]');
        sortBtn.addEventListener('click', function(e){
            e.preventDefault();

            toggle(this);
        });

        // filter
        var filterBtn = document.querySelector('[data-trigger="filter"]');
        filterBtn.addEventListener('click', function(e){
            e.preventDefault();

            toggle(this);
        });
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