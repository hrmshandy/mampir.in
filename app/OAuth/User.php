<?php

namespace App\OAuth;

use App\Contracts\User as UserContract;

class User implements UserContract
{
    protected $user;

    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Get the unique identifier for the user.
     *
     * @return string
     */
    public function getId()
    {
        return $this->user['id'];
    }

    /**
     * Get the nickname / username for the user.
     *
     * @return string
     */
    // public function getNickname()
    // {
    //     return $this->user->nickname;
    // }

    /**
     * Get the full name of the user.
     *
     * @return string
     */
    public function getName()
    {
        return $this->user['name'];
    }

    /**
     * Get the e-mail address of the user.
     *
     * @return string
     */
    public function getEmail()
    {
        return isset($this->user['email']) ? $this->user['email'] : $this->user['id'].'@mail.com';
    }

    /**
     * Get the avatar / image URL for the user.
     *
     * @return string
     */
    public function getAvatar()
    {
        return $this->user['avatar'];
    }

    /**
     * Get the raw user array.
     *
     * @return array
     */
    public function getRaw()
    {
        return $this->user;
    }
}
