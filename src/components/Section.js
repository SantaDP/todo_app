import React from 'react';
import TodoItem from './TodoItem';

const Section = ({ handleChangeStatus, handleRemoveTask, tasks }) => {
    return (
      <section className="main" >
				<input 
        id="toggle-all" 
        className="toggle-all" 
        type="checkbox" 
        />

				<label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {
            tasks.map((task, i) => (
              (task.text.length > 0) ?
                <TodoItem 
                  key={task.id}
                  task={task}
                  handleChangeStatus={handleChangeStatus}
                  handleRemoveTask = {handleRemoveTask}
                  index={i}
                />
            : null
          )) 
          }
        </ul>
			</section>
    )
  
}


export default Section;