// import React, { Component } from 'react';
import React, { PureComponent } from 'react';

import Person from './Person/Person';

import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');

  //   return state;
  // }

  // componetWillReceiveProps(props) {
  //   console.log('[Person.js] componetWillReceiveProps', props);

  // }

  


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked

  //     ) {

  //     return true;

  //   } else {

  //     return false;

  //   }
  //   //  return true;
  // }



  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    // return null;
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {
    
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
    
  }
  // The naming can be confusing but "Lifecycle Hooks" have absolutely nothing to do with "React Hooks"!
  

  render() {

    console.log('[Persons.js] rendering...');

   return (

    <AuthContext.Consumer>
     
     {(context) => this.props.persons.map( ( person, index ) => {
      
      return ( 
        <Person
          click={() => this.props.clicked( index )}
            name={person.name} 
            age={person.age} 
             key={person.id}
            changed={event => this.props.changed( event, person.id )} 
            isAuth={this.props.isAuthenticated}
            />
            
            );
           
         })}
       </AuthContext.Consumer>;
     }
}

export default Persons;
