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
	render() {
	return (
    <div className="App">
      <h1>Hi, This is my a React App </h1>
    <p> This is now really working! </p>
    
    <Person name="Lissa" age="32" />
     <Person name="Lily" age="23" />
      <Person name="Lima" age="46" />
    </div>
  );

 // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
// return React.createElement('div', null, React.createElement('h1', null, 'Does react work now?'));
// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does react work now?'));
        }
	}


export default App;
