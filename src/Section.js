import React from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {

    return (
      <section className="main" style={{display: "block"}}>
				<input 
        id="toggle-all" 
        className="toggle-all" 
        type="checkbox" 
        />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
          {
            this.props.tasks.map((task, i) => (
              (task.text.length > 0) ?
            <li  className={task.status ? 'completed' : 'active'}>
              <div className="view">
                <input 
                  checked={task.status}
                  onChange={() => this.props.handleChangeStatus(i)}
                  className="toggle" 
                  type="checkbox"  
                />
                <label>{task.text}</label>
                <button 
                className="destroy"
                onClick={()=>this.props.handleRemoveTask(i)}
                >
                </button>
              </div>
            </li> : null
          )) 
          }
          </ul>
			</section>
    )
  }
}


export default Section;