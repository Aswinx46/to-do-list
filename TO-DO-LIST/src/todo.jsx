
import React, {useState} from "react"

function TODO(){

    const [task,setTask]=useState(['eat breakfast','bath'])
    const [newTask,setNewTask]=useState('')

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){

        if(newTask.trim()!='')
        {
            setTask(t=>[...t,newTask]);
            setNewTask('');
            console.log(newTask)
        }
       
    }

    function deleteTask(index){
        const UpdatedTask=task.filter((_,i)=>i!=index)
        setTask(UpdatedTask)
    }

    function editTask(index){
        const editElement=task.filter((_,i)=>i==index)
        const flat=editElement.flat()
        console.log(flat)
    }
    return(
        <div className="outer">
             <h1 id="heading">T0-DO APP</h1>
    <div className="main">

        <div className="container">
        <h1 id="insideContainer">ENTER YOUR LIST </h1>
        <input type="text"  value={newTask} className="input" onChange={handleInputChange}/>
        <button id="add" onClick={addTask}>ADD TASK</button>
        <ol>
        {task.map((task,index)=><li  key={index}>{task}  <div><button className="Button" onClick={()=>{editTask(index)}}>EDIT</button> <button className="Button" onClick={()=>{deleteTask(index)}}>❌</button></div>  </li>)}
        </ol>
        </div>
      


    </div>
    </div>)

}

export default TODO