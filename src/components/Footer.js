import React from 'react';

export const FILTER_ORDER_ALL = 'all';
export const FILTER_ORDER_ACTIVE = 'active';
export const FILTER_ORDER_COMPLETED = 'completed';

const Footer = ({ tasks, filterTasks, removeAllTasks, filterField }) => {
    return (
      <footer className="footer" >
				<span className="todo-count"><strong>{tasks.length}</strong> - tasks</span>
				<ul className="filters">
					<li>
						<a 
							href="#/All" 
							onClick={()=>filterTasks(FILTER_ORDER_ALL)}
							className={filterField === FILTER_ORDER_ALL ? 'selected' : ''}
						>
						All
						</a>
					</li>
					<li>
						<a 
						href="#/active" 
						className={filterField === FILTER_ORDER_ACTIVE ? 'selected' : ''}
						onClick={()=>filterTasks(FILTER_ORDER_ACTIVE)}
						>
						Active
						</a>
					</li>
					<li>
						<a 
						href="#/completed" 
						className={filterField === FILTER_ORDER_COMPLETED ? 'selected' : ''}
						onClick={()=>filterTasks(FILTER_ORDER_COMPLETED)}
						>
						Completed</a>
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