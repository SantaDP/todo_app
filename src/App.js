import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tasks: [],
      visibilityTasks: [],
    };
  }
  
  handleFilterTasks = (status) => {
    this.setState ( prev => {
      const copyTasks = prev.tasks;      
      let showTasks = [];
      status === 'active' ?
      showTasks = copyTasks.filter(task => !task.status) :
      status === 'completed' ? 
      showTasks = copyTasks.filter(task => task.status) :
      showTasks = copyTasks;

      return {
        visibilityTasks: showTasks,
      }
    })
  }

  handleChangeStatus = (index) => {
    const copyTasks = [...this.state.tasks]
    copyTasks[index] = {
      ...copyTasks[index],
      status: !copyTasks[index].status
    }
    this.setState(() => {
      return {
        tasks: copyTasks,
        visibilityTasks: copyTasks,
      }
    })
  }

  handleRemoveTask = (id) => {
    this.setState((prev)=>{
      const copyTasks = prev.tasks.filter(todo => todo.id !== id);
      return {
        tasks: copyTasks,
        visibilityTasks: copyTasks,    
      }
    })
   
  }

  handleRemoveAlltak = () => {
    this.setState (()=> {
      const copyTasks = this.state.tasks.filter (task => !task.status)
      return {
        tasks: copyTasks,
        visibilityTasks: copyTasks,
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prev) => {
       if(prev.value.length > 0 && prev.value.trim() !== ""){
         const newTasks = [{
          text: prev.value,
          status: false,
          id: Date.now(),},
          ...prev.tasks
        ]
        return {
          tasks: newTasks,
          value: '',
          visibilityTasks: newTasks,
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
          tasks={this.state.visibilityTasks}
          handleChecked = {this.handleChecked}
          handleRemoveTask = {this.handleRemoveTask}
          handleChange={this.handleChange}
          handleChangeStatus={this.handleChangeStatus}
          visibilityTasks={this.state.visibilityTasks}
        />
        
        <Footer 
          tasks={this.state.tasks} 
          filterTasks={this.handleFilterTasks}
          removeAllTasks={this.handleRemoveAlltak}
        />
      </div>
    );
  }
}

export default App;
