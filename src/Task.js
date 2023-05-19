import { useState } from "react";
export const Task = (props) => {
    const [isChange,setIsChange] = useState(false)
    const [changes,setChanges] = useState(false)
    return (
    <>
        <div
            className="task"
            style={{ backgroundColor: props.incomplete ? 'red' : props.completed ? "lightgreen" : "white" }}
        >
            <h1>{props.taskName}</h1>
            <button className="completed" onClick={() => props.completeTask(props.id)}> Complete </button>
            <button className="notcompleted" onClick={() => props.incompleteTask(props.id)}> Not complete </button>
            <button className="edit" onClick={() => setIsChange(!isChange)}> edit </button>
            <button className="delete" onClick={() => props.deleteTask(props.id)}> X </button>
            {isChange ? <><input type="text" onChange={(e)=>setChanges(e.target.value)}/> <button onClick={()=>props.edit(props.id,changes)}>confirm</button> <button onClick={()=>setIsChange(!isChange)}>cancel</button></> : console.log('not editing')}
        </div>
    </>
      
    );
  };








  
  