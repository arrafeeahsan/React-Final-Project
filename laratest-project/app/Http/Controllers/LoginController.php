<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use validator;
//use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    public function index(){
        return view ('/login/login');
    }

    public function login(Request $req)
    {
        $emp = User::where("username",$req->username)
        ->where("password",$req->password)->first();
        return $emp;
        //if(count($emp)>0) {
        //return$emp;
       // }
        return response()->json([
            'status'=>200,
            'user'=>$emp,
    ]);
    } 


    public function verify(Request $req){ //req object comes from the file we import above from Request class 
        //dd($req); // dd is a debug function

        $data = DB::table('users')
                        ->where('username', $req->username)
                        ->where('password', $req->password)
                        ->get();
        if(count($data) > 0){
            //session or cookie
            //echo "Valid!";
            //$req->session()->put('username', $req->uname);
            return $data; //will a generate a http get request, /home is a url here
        }else{
        $err="invalid";
            return $err;
        }  
    }
}
