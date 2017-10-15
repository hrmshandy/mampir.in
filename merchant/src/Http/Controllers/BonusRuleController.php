<?php

namespace Merchant\Http\Controllers;

use App\Models\BonusRule;
use Merchant\Http\Requests\BonusRuleForm;

class BonusRuleController extends Controller
{
    /**
     * view set bonus rule form
     *
     */
    public function index() {
        $bonus_rule = BonusRule::byVenue()->orderBy('created_at', 'desc')->first();
        $exists = !empty($bonus_rule);

        return view('merchant::set-bonus-rule', compact('bonus_rule', 'exists'));
    }

    /**
     * save new bonus rule
     *
     * @param BonusRuleForm $form
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(BonusRuleForm $form) {
        $form->store();

        return redirect()->back();
    }
}
