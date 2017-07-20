<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\City;
use App\Models\Venue;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;

class VenueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $venues = Venue::with('detail', 'facilities', 'opening_hours', 'photos')
                        ->orderBy('created_at', 'desc')
                        ->paginate(5);

        return view('admin::venue.index', compact('venues'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Venue $venue
     * @return \Illuminate\Http\Response
     */
    public function create(Venue $venue)
    {
        $cities = City::all();
        $categories = Category::all();
        return view('admin::venue.form', compact('venue', 'cities', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Requests\VenueForm $form
     * @return \Illuminate\Http\Response
     * @internal param Request $request
     */
    public function store(Requests\VenueForm $form)
    {
        $form->store();

        return redirect('_admin/venue');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Venue $venue
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function edit(Venue $venue)
    {
        $cities = City::all();
        $categories = Category::all();
        return view('admin::venue.form', compact('venue', 'cities', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Requests\VenueForm $form
     * @param Venue $venue
     * @return \Illuminate\Http\Response
     * @internal param Request $request
     * @internal param int $id
     */
    public function update(Requests\VenueForm $form, Venue $venue)
    {
        $venue = $form->update($venue);

        return redirect('_admin/venue/'.$venue->id.'/edit');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Venue $venue
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function destroy(Venue $venue)
    {
        $venue->delete();

        return back();
    }
}
