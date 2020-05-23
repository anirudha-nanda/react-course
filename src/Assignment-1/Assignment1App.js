import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class Assignment1App extends Component {

  state={
    
    userDetails:{
    name: 'Ani'
    }
  };


   NameChangeHandler=(event)=>{
    console.log("hello");
    this.setState({
      userDetails: {
        name:event.target.value
      }
    }
    );
  };
  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
     
    };

    return (
      <div className="App">
        <h1 style={style}>Hello this is Assignment 1</h1>
        <UserInput 
        name={this.state.userDetails.name}
        change={this.NameChangeHandler}
        /> 
        <UserOutput  style={style}
        name={this.state.userDetails.name}
        />  
        <UserOutput
        style={style}
         name={this.state.userDetails.name} />  
        <UserOutput 
        style={style}
         name={this.state.userDetails.name}/>   
      </div>
    );
  }
};

export default Assignment1App;
