<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request; //we can now inject the current HTTP request automatically in the route callback

class AuthController extends Controller
{
    // var? tu understand declartaion
    public function login(LoginRequest $request)
    {
        $data = $request->validated();
        // create a user in DB; use the create method, which accepts an array of attributes, creates a model, and inserts it into the database.
        // 
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])                  
        ]);

    }

    public function signup(SignupRequest $request)
    {

    }

    public function logout(Request $request)
    {
        
    }
}
