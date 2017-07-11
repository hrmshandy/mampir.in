@extends('admin::layouts.master')

@section('content')
    <div class="bg-faded u-pt-x3" style="min-height: calc(100vh - 75px);">
        <div class="container">
            <div class="o-grid">
                <div class="o-grid__col u-8/12 u-push-2/12">
                    <div class="card">
                        <div class="card-header">
                            <a href="{{ url('_admin/category/create') }}" class="o-button o-button--success">Add New</a>
                        </div>
                        <div class="card-block">
                            <table class="table">
                                <thead>
                                <tr>
                                    {{--<th>No</th>--}}
                                    <th>Name</th>
                                    <th>Icon</th>
                                    <th>Alias</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                @if(count($categories) > 0)
                                    @foreach($categories as $category)
                                        <tr>
                                            {{--<td>{{ page_iteration($loop->iteration) }}</td>--}}
                                            <td>{{ $category->name }}</td>
                                            <td width="60"></td>
                                            <td>{{ $category->alias }}</td>
                                            <td>{{ $category->description }}</td>
                                            <td width="120">
                                                <a href="{{ url('_admin/category/'.$category->id.'/edit') }}"
                                                   class="btn btn-link btn-sm u-color-primary">
                                                    <i class="material-icons">mode_edit</i>
                                                </a>
                                                <form method="POST" action="{{ url('_admin/category/'.$category->id) }}" class="u-inline-block">
                                                    {{ method_field('DELETE') }}
                                                    {{ csrf_field() }}
                                                    <button type="submit" style="cursor: pointer;"
                                                            class="btn btn-link btn-sm u-color-danger"
                                                            onclick="return confirm('Are you sure ?')">
                                                        <i class="material-icons">delete</i>
                                                    </button>
                                                </form>
                                                @if(count($category->children) > 0)
                                                <a href="#" class="u-color-black" data-toggle="children">
                                                    <i class="material-icons">keyboard_arrow_down</i>
                                                </a>
                                                @endif
                                            </td>
                                        </tr>
                                        @if(count($categories) > 0)
                                            <tr>
                                                <td colspan="5" class="u-p-x0">
                                                    <table class="table children" style="display: none; background-color: #f7f7f7;     margin-bottom: 0;">
                                                        @foreach($category->children as $child)
                                                            <tr class="child">
                                                                <td class="u-pl-x4">{{ $child->name }}</td>
                                                                <td></td>
                                                                <td>{{ $child->alias }}</td>
                                                                <td>{{ $child->description }}</td>
                                                                <td width="110">
                                                                    <a href="{{ url('_admin/category/'.$child->id.'/edit') }}" class="btn btn-link btn-sm u-color-primary">
                                                                        <i class="material-icons">mode_edit</i>
                                                                    </a>
                                                                    <form method="POST" action="{{ url('_admin/category/'.$child->id) }}" class="u-inline-block">
                                                                        {{ method_field('DELETE') }}
                                                                        {{ csrf_field() }}
                                                                        <button type="submit" style="cursor: pointer;"
                                                                                class="btn btn-link btn-sm u-color-danger"
                                                                                onclick="return confirm('Are you sure ?')">
                                                                            <i class="material-icons">delete</i>
                                                                        </button>
                                                                    </form>
                                                                </td>
                                                            </tr>
                                                        @endforeach
                                                    </table>
                                                </td>
                                            </tr>
                                        @endif
                                    @endforeach
                                @else
                                    <tr>
                                        <td colspan="5">Data Not Found</td>
                                    </tr>
                                @endif
                                </tbody>
                            </table>
                            <div class="text-center u-mt-x2">
                                {{ $categories->links('pagination::bootstrap-4') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


@section('scripts')
    <script>
        var triggers = document.querySelectorAll('[data-toggle="children"]');

        triggers.forEach(function(item) {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                var children = e.target.closest("tr").nextElementSibling.querySelector('.children');
                if(children.classList.contains('is-shown')) {
                    children.style.display = 'none';
                    children.classList.remove('is-shown');
                } else {
                    children.style.display = 'table';
                    children.classList.add('is-shown');
                }
            });
        });
    </script>
@endsection