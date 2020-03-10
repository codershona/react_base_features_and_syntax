import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
  // useState()
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTP request....
    // const timer = setTimeout(() => {
    setTimeout(() => {
     
     alert('Saved data to cloud!');

    }, 1000);
    return () => {
      // clearTimeout(timer);
      // To be more precise, it runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle!
      console.log('[Cockpit.js] cleanup work in useEffect');

    };

  // }, [props.persons]);
    // }, [a, b, c]);
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
       return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');

    };

  });


    const assignedClasses = [];
      
      let btnClass = '';

    if (props.showPersons) {
    	
    	btnClass = classes.Red;
   }

     if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); 
     }
     if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
     }
   
   return (
		<div className={classes.Cockpit}>
		<h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass}
        
        onClick={props.clicked}>
        TOGGLE Persons
        </button>
        </div>


		);
};


export default Cockpit;