<?php

namespace App\Traits\Base;

use Carbon\Carbon;
use Illuminate\Support\Str;

trait BaseTrait
{
    /**
     * @param string $startDate e.g 2022-04-09
     * @param string $startTime e.g 06:00
     * @return Carbon
     */
    public function combineDateAndTime($date, $time)
    {
        $date = $date instanceof Carbon ? $date : Carbon::parse($date);

        /**
         *  The copy method essentially creates a new Carbon object which you can
         *  apply then the changes to without affecting the original $date variable
         *
         *  Reference: https://stackoverflow.com/questions/34413877/php-carbon-class-changing-my-original-variable-value
         */
        return $date->copy()->addHours(Str::before($time, ':'))->addMinutes(Str::after($time, ':'));
    }
}
