import React from 'react';

const Footer = ({ tasks, filterTasks, removeAllTasks }) => {
    return (
      <footer className="footer" >
				<span className="todo-count"><strong>{tasks.length}</strong> - tasks</span>
				<ul className="filters">
					<li>
						<a href="#/All" className="selected" onClick={(event)=>filterTasks('all')}>All</a>
					</li>
					<li>
						<a href="#/active" onClick={(event)=>filterTasks('active')}>Active</a>
					</li>
					<li>
						<a href="#/completed" onClick={(event)=>filterTasks('completed')}>Completed</a>
					</li>
				</ul>
				<button 
					onClick={removeAllTasks}
        	className="clear-completed" 
        >
					Clear completed
				</button>
			</footer>
    )
  
}

export default Footer;