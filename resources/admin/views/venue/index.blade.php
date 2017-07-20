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
    </script>
@endsection