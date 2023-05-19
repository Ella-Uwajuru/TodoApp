import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true ,incomplete:false};
        } else {
          return task;
        }
      })
    );
  };
  const incompleteTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, incomplete: true,completed:false };
        } else {
          return task;
        }
      })
    );
  };
  const editTask = (id,changes)=>{
    const newList = todoList.map((theTask)=>{
      if(theTask.id === id){
        return {...theTask,taskName:changes}
      }
      return theTask
    })
    setTodoList(newList)
  }
  const deleteAllTask = ()=>{
    setTodoList([])
  }
  const [completFilter,setCompletFilter] = useState(false)
  const [inCompletFilter,setInCompletFilter] =useState(false)
  return (
    <div className="App">
      <h1 className="title">my to do App</h1>
      <div className="addTask">
        <input className="input" placeholder="enter activity ..." required onChange={handleChange} />
        <button className="add-btn" onClick={addTask}> Add Task</button>
      </div>
      <div>
          sort tasks by: <br/>
          <button className="sorting" onClick={()=>setCompletFilter(!completFilter)}>completed only</button>
          <button className="sorting" onClick={()=>setInCompletFilter(!inCompletFilter)}>incomplete only</button>
      </div>
<div>
<button className="delete-all" onClick={deleteAllTask}>delete all Tasks</button>
</div>
      <div className="list">
        {todoList.map((task) => {
          if(inCompletFilter){
            if(task.incomplete === true){
              return (
                <>
                  <Task taskName={task.taskName} id={task.id} completed={task.completed} incomplete = {task.incomplete} incompleteTask = {incompleteTask} deleteTask={deleteTask} completeTask={completeTask} edit = {editTask}/>
                </>
              );
            }return null
          }
          if(completFilter){
            if(task.completed === true){
              return (
                <>
                  <Task taskName={task.taskName} id={task.id} completed={task.completed} incomplete = {task.incomplete} incompleteTask = {incompleteTask} deleteTask={deleteTask} completeTask={completeTask} edit = {editTask}/>
                </>
              );
            }
            return null
          }return (
            <>
              <Task taskName={task.taskName} id={task.id} completed={task.completed} incomplete = {task.incomplete} incompleteTask = {incompleteTask} deleteTask={deleteTask} completeTask={completeTask} edit = {editTask}/>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default App;
