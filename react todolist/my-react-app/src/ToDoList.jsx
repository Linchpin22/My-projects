import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTask] = useState("");

    function handleInputChange(event) {
         setNewTask(event.target.value)
    }
    function addTask() {
        if(newTasks.trim() !== ""){
        setTasks(t => [...t,newTasks]);
        setNewTask("");
    }
    }
    function deleteTask(index) {
         const updateTasks = tasks.filter((_,i) => i !== index);
         setTasks(updateTasks);
    }
    function moveTaskUp(index) {

    }
    function moveTaskDown(index) {

    }
    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input 
                    type='text'
                    placeholder='Enter a task'
                    value={newTasks}
                    onChange={handleInputChange}
                />
                  <button className='add-button' onClick={addTask}>
                    Add
                  </button>
            </div>
           
            <ol>
              {tasks.map((tasks,index)=>
                <li key={index}>
                    <span className='text'>{tasks}</span>
                    <button className='delete-button' 
                            onClick={()=> deleteTask(index)}>
                                Delete
                                </button>
                                <button className='edit-button' 
                            onClick={()=> editTask(index)}>
                                Edit
                                </button>
            
                </li>
             
             )}
            </ol>
        </div>
    )
}

export default ToDoList