import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super (props);
  }
  render() {
    return (
      <footer className="footer" style={{display: "block"}}>
				<span className="todo-count"><strong>{this.props.tasks.length}</strong> items left</span>
				<ul className="filters">
					<li>
						<a href="#/" className="selected">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button 
        className="clear-completed" 
        style={{display: "block"}}
        onClick={()=>this.props.handleRemoveAllTasks()}
        >Clear completed</button>
			</footer>
    )
  }
}

export default Footer;