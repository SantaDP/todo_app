import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <header className="header">
				<h1>todos</h1>
        <form
        onSubmit={this.props.handleSubmit}
        >
          <label>
            <input 
            placeholder="What needs to be done?"
            className="new-todo"
            type="text" 
            name="name" 
            value={this.props.value}
            onChange={this.props.handleChange}
            />
          </label> 
        </form>
			
			</header>
    )
  }
}

export default Header;