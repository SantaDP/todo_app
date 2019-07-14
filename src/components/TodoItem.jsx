import React from 'react';

const TodoItem = ({task, handleChangeStatus, handleRemoveTask, index }) => {
  return (
    <li   
      className={task.status ? 'completed' : 'active'}
      style={{display:task.display}}
    >
      <div className="view">
        <input 
          checked={task.status}
          onChange={() => handleChangeStatus(index)}
          className="toggle" 
          type="checkbox"  
        />
        <label>{task.text}</label>
        <button 
        className="destroy"
        onClick={()=>handleRemoveTask(task.id)}
        >
        </button>
      </div>
    </li>
  )
}

export default TodoItem;
