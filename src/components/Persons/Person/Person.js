import React, { Component, Fragment  } from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';




class Person extends Component {
	render() {
    
    console.log('[Person.js] rendering...');

        // return (React.createElement() React.createElement()
        return (

    <React.Fragment>

    <p onClick={this.props.click}>
       I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p key="i2">{this.props.children}</p>
    <input 
    key="i3"
    type="text" onChange={this.props.changed} 
    value={this.props.name} />

     </React.Fragment> 
     );

	}
     
 }

export default Person;