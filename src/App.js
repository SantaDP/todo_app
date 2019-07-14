import React from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer, {
  FILTER_ORDER_ALL,
  FILTER_ORDER_ACTIVE,
  FILTER_ORDER_COMPLETED
}
 from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tasks: [],
      visibilityTasks: [],
      filterField: '',
    };
  }

  filterTasks(tasks, filterField) {
    const callbackMap = {
      [FILTER_ORDER_ACTIVE]: task => !task.status,
      [FILTER_ORDER_COMPLETED]: task => task.status,
      [FILTER_ORDER_ALL]: task => task,
    }
    const callback = callbackMap[filterField] || callbackMap[FILTER_ORDER_ALL]
    return [...tasks].filter(callback)
  }
  
  handleFilterTasks = (filterField) => {
    this.setState ( prev => {
      return {
        filterField,
        visibilityTasks: this.filterTasks(prev.tasks, filterField),
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
      const copyTasks = prev.tasks;
      return {
        tasks: copyTasks.filter(todo => todo.id !== id),  
        visibilityTasks: copyTasks.filter(todo => todo.id !== id),
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
    const {visibilityTasks, tasks, value, filterField} = this.state;
    return (
      <div className="todoapp">
        <Header 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={value}
        />

        <Section 
          tasks={visibilityTasks}
          handleChecked = {this.handleChecked}
          handleRemoveTask = {this.handleRemoveTask}
          handleChange={this.handleChange}
          handleChangeStatus={this.handleChangeStatus}
        />
        
        <Footer 
          tasks={tasks} 
          filterTasks={this.handleFilterTasks}
          removeAllTasks={this.handleRemoveAlltak}
          filterField={filterField}
        />
      </div>
    );
  }
}

export default App;
