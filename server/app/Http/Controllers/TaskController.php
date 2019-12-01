<?php

namespace App\Http\Controllers;

use DB;
use Log;
use Illuminate\Http\Request;
use App\Http\Requests;

use App\Task;

const ERROR_MESSAGE = "The server encountered an error while proccessing the request";

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::orderBy('created_at', 'asc')->get();
        return response()->json($tasks);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(!$request->name || $request->done === null){
            Log::warning("Update request with invalid parameters. name: {$request->name}, done: {$request->done}");
            return response()->json(ERROR_MESSAGE, 422);
        }

        $task = new Task;
        $task->name = $request->name;
        $task->done = $request->done;

        $success = $task->save();
        if(!$success){
            Log::error("Failed to create new task item with params name: '{$request->name}' and done: '{$request->done}' returned no results");
            return response()->json(ERROR_MESSAGE, 422);
        }
        return response()->json($task);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $task = DB::table('tasks')->where('id',$id)->update(['name'=>$request->name, 'done'=>$request->done]);

        if(!$task){
            Log::error("The executed query for updating $id with params name: '{$request->name}' and done: '{$request->done}' returned no results");
            return response()->json(ERROR_MESSAGE, 422);
        }
        
        $response = Task::find($id);
        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Task::find($id); 
        if(!$task){
            Log::error("Could not find record $id");
            return response()->json(ERROR_MESSAGE, 422);
        }

        $success = $task->delete();
        if(!$success){
            Log::error("Could not delete record $id");
            return response()->json(ERROR_MESSAGE, 422);
        }

        return response()->json($task);
    }
}
