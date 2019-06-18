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
            this.props.tasks.map((task) => (
            <li className="">
              <div className="view">
                <input 
                  className="toggle" 
                  type="checkbox" 
                  onClick={(event)=>event.target.parentElement.parentElement.classList.toggle('completed')} 
                />
                <label>{task}</label>
                <button className="destroy"></button>
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