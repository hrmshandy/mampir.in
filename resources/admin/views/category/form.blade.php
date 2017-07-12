@extends('admin::layouts.master')

@section('content')
    <div class="bg-faded u-pt-x3" style="min-height: calc(100vh - 75px);">
        <div class="container">
            <div class="o-grid">
                <div class="o-grid__col u-6/12 u-push-3/12">
                    <form class="card"
                          method="{{ $category->exists ? 'PUT' : 'POST' }}"
                          action="{{ $category->exists ? url('_admin/category/'.$category->id) : url('_admin/category') }}">
                        {{ csrf_field() }}
                        <div class="card-header">
                            <h6>{{ $category->exists ? 'Update' : 'Create' }} Category</h6>
                        </div>
                        <div class="card-block">
                            <div class="o-form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                <label for="">Name</label>
                                <input type="text" class="o-input" name="name" placeholder="Name" value="{{ $category->exists ? $category->name : null }}">
                                @if($errors->has('name'))
                                    <div class="o-form-feedback">{{ $errors->first('name') }}</div>
                                @endif
                            </div>
                            <div class="o-form-group{{ $errors->has('parent_id') ? ' has-error' : '' }}">
                                <label for="">Parent</label>
                                <select name="parent_id" class="form-control">
                                    <option value="">None</option>
                                    @foreach($parents as $parent)
                                        <option value="{{ $parent->id }}"
                                                @if($category->exists and ($category->parent_id == $parent->id)) selected @endif>
                                            {{ $parent->name }}
                                        </option>
                                    @endforeach
                                </select>
                                @if($errors->has('parent_id'))
                                    <div class="o-form-feedback">{{ $errors->first('parent_id') }}</div>
                                @endif
                            </div>
                            <div class="o-form-group{{ $errors->has('alias') ? ' has-error' : '' }}">
                                <label for="">Alias</label>
                                <input type="text" class="o-input" name="alias" placeholder="Alias" value="{{ $category->exists ? $category->alias : null }}">
                                @if($errors->has('alias'))
                                    <div class="o-form-feedback">{{ $errors->first('alias') }}</div>
                                @endif
                            </div>
                            <div class="o-form-group{{ $errors->has('description') ? ' has-error' : '' }}">
                                <label for="">Description</label>
                                <textarea class="o-input" name="description" placeholder="Description">{{ $category->exists ? $category->description : null }}</textarea>
                                @if($errors->has('description'))
                                    <div class="o-form-feedback">{{ $errors->first('description') }}</div>
                                @endif
                            </div>
                        </div>
                        <div class="card-footer">
                            <a href="{{ url('_admin/category') }}" class="o-button">Cancel</a>
                            <button class="o-button o-button--success" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection