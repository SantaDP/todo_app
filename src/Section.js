import React from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <section className="main" style={{display: "block"}}>
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
          {
            this.props.tasks.map((task, i) => (
            <li key={task+i} className="">
              <div className="view">
                <input 
                  className="toggle" 
                  type="checkbox" 
                  onClick={(event)=>{
                    event.target.parentElement.parentElement.classList.toggle('completed');
                    }} 
                />
                <label>{task}</label>
                <button 
                className="destroy"
                onClick={()=>this.props.handleRemoveTask(i)}
                
                >
                </button>
              </div>
            </li>
          ))
          }
          </ul>
			</section>
    )
  }
}


export default Section;