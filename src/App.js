import React from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      tasks: [],
    };
  }

  handleSubmit = (event) => {
    this.setState((prev) => {
       return {
         tasks: [...prev.tasks, this.state.value],
        value: [null]
      }
    })
    event.preventDefault();
    console.log(this.state.tasks)

  }

  handleChange = (event) => {
      this.setState({
        value: event.target.value
      })
  }

  render() {
    return (
      <div className="todoapp">

        <Header 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />

        <Section 
          tasks={this.state.tasks}
          handleChecked = {this.handleChecked}
        />

        <Footer 
          tasks={this.state.tasks} 
        />
    

      </div>
    );
  }
}

export default App;
