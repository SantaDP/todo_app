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
      allTasks:[],
    };
  }

  handleShowActiveTasks = () => {
    const copyTasks = [...this.state.allTasks]
    const activeTasks = copyTasks.filter(active => 
      (!active.status)
      )
      this.setState(()=> {
        return {
          tasks: activeTasks,
      }
    })
  }

  handleShowComplitedTasks = () => {
    const copyTasks = [...this.state.allTasks]
    const complitedTasks = copyTasks.filter(active => 
      (active.status)
     )
     this.setState(()=> {
      return {
        tasks: complitedTasks,
        
      }
    })
  }

  handleShowAllTasks = () => {
    const allTasks = [...this.state.allTasks]
     this.setState(()=> {
      return {
        tasks: allTasks,
        
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
        allTasks: copyTasks,
      }
    })
  }

  handleRemoveAllTasks = () => {
    this.setState (()=> {
      let copyTasks = [...this.state.tasks]
      copyTasks.map((item, i) => {
       if(item.status) {
        copyTasks.splice(i,1);
       } 
      })
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
        allTasks: copyTasks,
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
            id: Date.now(),
          },
          ...prev.tasks
        ],
        allTasks: [
          {
            text: prev.value,
            status: false,
            id: Date.now(),
            display: 'block',
          },
          ...prev.allTasks
        ],
        value: '',
      }} else {
        return
      }
    });
  };

  handleChange = (event) => {
    const targetValue = event.target.value;
    console.log(this.state.tasks)
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
        {this.state.tasks.length > 0 ?
        (<Footer 
          tasks={this.state.tasks} 
          handleRemoveAllTasks = {this.handleRemoveAllTasks}
          handleShowActiveTasks = {this.handleShowActiveTasks}
          handleShowComplitedTasks = {this.handleShowComplitedTasks}
          handleShowAllTasks = {this.handleShowAllTasks}
        />) : null
        }
    

      </div>
    );
  }
}

export default App;
