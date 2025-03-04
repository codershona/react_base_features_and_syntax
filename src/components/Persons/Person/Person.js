import React, { Component, Fragment  } from 'react';
// import Radium from 'radium';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

import AuthContext from '../../../context/auth-context';



class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

     static contextType = AuthContext;


   componentDidMount() {
    
    this.inputElementRef.current.focus();
    
    console.log(this.context.authenticated);

   }
 

	render() {
    
    console.log('[Person.js] rendering...');

        // return (React.createElement() React.createElement()
        return (

    <Aux>
    
 

  {this.context.authenticated ? (
    <p>Authenticated!</p>
    ) : (
    <p>Please log in </p>

     )}


    <p onClick={this.props.click}>
       I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p key="i2">{this.props.children}</p>
    <input 
    key="i3"

    ref={this.inputElementRef}

    type="text" onChange={this.props.changed} 
    value={this.props.name} />

     </Aux> 
     );

	}
     
 }


   Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
   };

export default withClass(Person, classes.Person);