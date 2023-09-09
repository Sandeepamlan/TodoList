"use client"
import React, { useState } from 'react';


const page=() => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [mainTask, setMainTask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault() // stop page reload
        setMainTask([...mainTask,{title,desc}]);
        setTitle("");
        setDesc("");
    }
    const deleteHandler =(i) => {
        let copyTask = [...mainTask]
        copyTask.splice(i,1)
        setMainTask(copyTask)

    }

    let renderTask= <h2>No Task Available</h2>
    if(mainTask.length>0){
        renderTask= mainTask.map((t,i) => {
            return(
                <li key={i} className='flex items-center justify-between mb-3'>
                    <div className='flex items-center justify-between w-2/3'>
                        <h5 className='text-2xl font-semibold'>{t.title}</h5>
                        <h6 className='text-lg font-medium'>{t.desc}</h6>
                    </div>
                    <button 
                    onClick={() =>{
                        deleteHandler(i)
                    }}
                    className='bg-red-600 text-white font-bold px-2 py-2 rounded'>Delete</button>
                </li>
            );
        });
    }
    
    return (
       <> 
            <h1 className='bg-black text-4xl text-center p-5 font-bold' >Sandeep's Todo List</h1>
            <form onSubmit={submitHandler}> 
                <input type='text ' 
                className='text-2xl border-4 m-8 px-4 py-2 border-zinc-800 p-4 ' 
                placeholder='Enter Your Task'
                value={title}
                onChange={(e)=> {
                    setTitle(e.target.value)
                }}/>
                
                <input type='text ' 
                className='text-2xl border-4 m-8 px-4 py-2 border-zinc-800 p-4 ' 
                placeholder='Enter Description Here'
                value={desc}
                onChange={(e) =>{
                    setDesc(e.target.value)
                }}/>

                <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
            </form>
            <hr/>
            <div className='p-8 bg-sky-200'>
                <ul>
                    {renderTask}
                </ul>
            </div>
        </>
      );
}

export default page;