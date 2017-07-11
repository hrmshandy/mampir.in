<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\Venue;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VenueController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $venues = Venue::with('details', 'facilities', 'opening_hours', 'photos')->orderBy('created_at', 'desc')->paginate(5);
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
        $categories = Category::all();
        return view('admin::venue.form', compact('venue', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'address' => 'required'
        ]);

        $data = $request->all();
        if($request->status == 'Publish') {
            $data['status'] = 1;
        } else {
            $data['status'] = 0;
        }

        $venue = Venue::create($data);

        $venue->categories()->attach($request->category);

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
        $categories = Category::all();
        return view('admin::venue.form', compact('venue', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Venue $venue)
    {
        $this->validate($request, [
            'name' => 'required',
            'address' => 'required'
        ]);

        $data = $request->all();
        if($request->status == 'Publish') {
            $data['status'] = 1;
        } else {
            $data['status'] = 0;
        }

        $venue->update($data);

        $venue->categories()->sync($request->category);

        return redirect('_admin/venue');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
