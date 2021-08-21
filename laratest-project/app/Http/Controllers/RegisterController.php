<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Validator;

class RegisterController extends Controller
{
    public function index(){
        //return view('/register/register');
    }

    public function store(Request $req){
        $data = new User;

        
        $data->username     = $req->username;
        $data->email        = $req->email;
        $data->password     = $req->password;
        $data->re_pass      = $req->re_pass;
        

        $data->save();
        return $data;
        
    }
}
