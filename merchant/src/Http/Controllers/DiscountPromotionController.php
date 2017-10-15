<?php

namespace Merchant\Http\Controllers;

use App\Models\Discount;
use Merchant\Http\Requests\DiscountForm;

class DiscountPromotionController extends Controller
{

    /**
     * show discount promotion form
     */
    public function index()
    {
        $discount = Discount::byVenue()->orderBy('created_at', 'desc')->first();
        $exists = !empty($discount);

        return view('merchant::discount-promotion', compact('discount', 'exists'));
    }

    /**
     * save discount promotion
     *
     * @param DiscountForm $form
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(DiscountForm $form)
    {
        $form->store();

        return redirect()->back();
    }
}