<?php


namespace Merchant\Http\Controllers;

setlocale(LC_MONETARY, 'id_ID');

use App\Models\Checkin;
use Carbon\Carbon;
use Illuminate\Http\Request;

class StatisticController extends Controller
{

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $venueId = op()->venue->id;
        $dateStart = Carbon::parse($request->get('date-start'));
        $dateEnd = Carbon::parse($request->get('date-end'));
        $interval = $dateEnd->diffInDays($dateStart);
        $dateStartCompare = Carbon::parse($request->get('date-start'))->subDays($interval+1);
        $dateEndCompare = Carbon::parse($request->get('date-start'))->subDay();

        $lastStats = Checkin::selectRaw('count(*) numberOfCheckIn, sum(total_purchase) totalPurchase, day(created_at) day, month(created_at) month, year(created_at) year')
            ->byVenue($venueId)
            ->whereBetween('created_at', [$dateStartCompare, $dateEndCompare])
            ->groupBy('created_at')
            ->get();
        $nowStats = Checkin::selectRaw('count(*) numberOfCheckIn, sum(total_purchase) totalPurchase, day(created_at) day, month(created_at) month, year(created_at) year')
            ->byVenue($venueId)
            ->whereBetween('created_at', [$dateStart, $dateEnd])
            ->groupBy('created_at')
            ->get();

        $data = [
            'summary' => [
                'numberOfCheckIn' => [
                    'last' => $lastStats->sum('numberOfCheckIn'),
                    'now' => $nowStats->sum('numberOfCheckIn')
                ],
                'rangeOfRevenue'=> [
                    'last' => $lastStats->sum('totalPurchase'),
                    'now' => $nowStats->sum('totalPurchase'),
                ]
            ],
            'stats' => $nowStats
        ];
        return response()->json($data);
    }
}