<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;

use Illuminate\Http\Request; //we can now inject the current HTTP request automatically in the route callback

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {

    }

    public function signup(SignupRequest $request)
    {

    }

    public function logout(Request $request)
    {
        
    }
}
