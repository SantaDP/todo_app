import React from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tasks: [],
    };
  }
  handleRemoveAllTasks = () => {
    this.setState (()=> {
      let copyTasks = [...this.state.tasks]
      copyTasks = [];
      return {
        tasks: copyTasks
      }
    })
  }

  handleRemoveTask = (index) => {
    this.setState((prev)=>{
      const copyTasks = [...prev.tasks];
      copyTasks.splice(index, 1);
      return {
        tasks: copyTasks,
      }
    })
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
    console.log(this.state.value)

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
          handleRemoveTask = {this.handleRemoveTask}
        />

        <Footer 
          tasks={this.state.tasks} 
          handleRemoveAllTasks = {this.handleRemoveAllTasks}
        />
    

      </div>
    );
  }
}

export default App;
