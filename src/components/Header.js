import React from 'react';

const Header =({handleSubmit, value, handleChange}) => {
    return (
      <header className="header">
				<h1>todos</h1>
        <form
        onSubmit={handleSubmit}
        >
          <label>
            <input 
            placeholder="What needs to be done?"
            className="new-todo"
            type="text" 
            name="name" 
            value={value}
            onChange={handleChange}
            />
          </label> 
        </form>
			</header>
    )
  }

export default Header;