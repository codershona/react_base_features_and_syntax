// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; // use Uppercase character for components.

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, This is my a React App </h1>

//     </div>
//   );
// }

class App extends Component {
   state = {
    persons: [
    { name: 'Max', age: 28 }, 
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }

    ]

   }

switchNameHandler = () => {
  console.log('Was clicked!');
}

	render() {
	return (
    <div className="App">
      <h1>Hi, This is my a React App </h1>
    <p> This is now really working! </p>
    
    <button onClick={this.switchNameHandler}>Switch Name</button>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].nage} />
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Biking</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
  );

 // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
// return React.createElement('div', null, React.createElement('h1', null, 'Does react work now?'));
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does react work now?'));
        }
	}


export default App;
