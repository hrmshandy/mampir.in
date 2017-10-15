<?php

namespace Merchant\Supports;

class CurrencyFormat
{
    protected $value;

    public function __construct($value)
    {
        $this->value = $value;
    }

    public function __toString()
    {
        
    }
}