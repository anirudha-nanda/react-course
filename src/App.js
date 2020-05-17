import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state = {
  persons : [
    { name: 'Ani', age: 28},
    { name: 'Harsh', age: 29},
    { name: 'Vivek', age: 24}
  ]
}
  render() {

    return (
      <div className="App">
      <h1>Hello1</h1>
      <button>Switch Name</button>

    <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies : raching</Person>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );


  }
}

export default App;
