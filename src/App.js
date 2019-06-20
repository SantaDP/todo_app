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
  handleChangeStatus = (index) => {
    const copyTasks = [...this.state.tasks]
    copyTasks[index] = {
      ...copyTasks[index],
      status: !copyTasks[index].status
    }
    this.setState(() => {
      return {
        tasks: copyTasks
      }
    })
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
    event.preventDefault();
    this.setState((prev) => {
       if(prev.value.length > 0){
      return {
        tasks: [
          {
            text: prev.value,
            status: false,
          },
          ...prev.tasks
        ],
        value: '',
      }} else {
        return
      }
    });
  };

  handleChange = (event) => {
    const targetValue = event.target.value;
      this.setState((prev)=>{
        return {
        value: targetValue,
        } 
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
          handleEditStatus = {this.handleEditStatus}
          handleChange={this.handleChange}
          handleChangeStatus={this.handleChangeStatus}
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
