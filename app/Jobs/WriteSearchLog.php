<?php

namespace App\Jobs;

use App\Models\Keyword;
use App\Models\SearchLog;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class WriteSearchLog implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $query;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($query)
    {
        $this->query = $query;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $keyword = Keyword::firstOrNew(['keyword' => $this->query['keyword']]);

        $searchLog = SearchLog::firstOrNew([
            'keyword_id' => $keyword->id,
            'user_id' => auth()->check() ? auth()->user()->id : null,
            'city' => $this->query['city'],
            'ip' => request()->getClientIp(),
            'user_agent' => request()->server('HTTP_USER_AGENT')
        ]);

        if(!$searchLog->exists) {
            $keyword->hint++;
            $keyword->save();

            $searchLog->hint++;
            $searchLog->save();
        }
    }
}
