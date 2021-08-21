<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\User;
use App\Http\Controllers\Input;

use App\Exports\ClientsExport;
use Maatwebsite\Excel\Facades\Excel;

class ClientController extends Controller
{
    public function index(){
        return view('/client/client');
    }

    public function create(){
        return view('client.create');
    }

    public function insert(Request $req){
        $data = new Client;

        $data->client_name        = $req->client_name;
        $data->client_username    = $req->client_username;
        $data->client_email       = $req->client_email;
        $data->client_password    = $req->client_password;
        $data->account_nameR      = $req->account_nameR;
        $data->account_nameL      = $req->account_nameL;

        $data->save();
        return $data;
        
    }

    public function details($id){
        
        $data = Client::find($id);
        return $data;
    }

    //public function details(){
    //    return view('/client/detailsTEST');
    //}

    public function edit($id){
        $data = Client::find($id);
        return $data;  
    }

    public function update(Request $req, $id){
        $data = Client::find($id);
        $data->client_name        = $req->client_name;
        $data->client_username    = $req->client_username;
        $data->client_email       = $req->client_email;
        //$client->client_password    = $req->password;
        //$client->account_nameR      = $req->accountregular;
        //$client->account_nameL      = $req->accountloan;

        $data->save();

        return $data;
    }

    public function delete($id){
        $data = Client::find($id);
        return $data;
    }

    public function destroy($id){
        $data = Client::find($id);
        $data->delete($id);
        return $data;
    }

    public function list(){
        $data = Client::all();
        return $data;
    }

    public function search(){
        return view('client.search');
    }

    public function searching(Request $req){
        $q = $req->q;
        $client = Client::where('client_name', 'LIKE', '%'.$q.'%')
                            ->orWhere('client_email', 'LIKE', '%'.$q.'%')
                            ->get();
        if (count($client)>0) {
            return view('client.searchresult')->withDetails($client)->withQuery($q);
        }else{
            return view ('client.searchresult')->withMessage('No Details found. Try to search again !');
        }
    }

    public function getClientList(){

    }

    public function download(){

        return Excel::download(new ClientsExport, 'Clients.xlsx'); 
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

    public function searchClient(Request $request,$keyowrd){
      $data=Client::where('id', 'like', '%' . $keyowrd . '%')
            ->orWhere('client_username', 'like', '%' . $keyowrd . '%')
            ->get();
        if($data){
            return response()->json($data, 200);
        }else{
            return response()->json([
                'code'=>401, 
                'message' => 'No Product Found!']);
        }

    }

}
