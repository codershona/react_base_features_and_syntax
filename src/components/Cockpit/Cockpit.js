import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';

const Cockpit = props => {
 
  const toggleBtnRef = useRef(null);
  // toggleBtnRef.current.click();

   const authContext = useContext(AuthContext);

   console.log(authContext.authenticated);

  // useState()
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTP request....
    // const timer = setTimeout(() => {
    // setTimeout(() => {
     
    //  alert('Saved data to cloud!');

    // }, 1000);

   toggleBtnRef.current.click();

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

     if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); 
     }
     if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
     }

     // and also showPersons but NOT the persons array elements.
   
   return (
		<div className={classes.Cockpit}>
		<h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button ref={toggleBtnRef} className={btnClass}
        
        onClick={props.clicked}>
        TOGGLE Persons
        </button>

       
       <button onClick={authContext.login}> Log In</button>
      
        </div>


		);
};


export default React.memo(Cockpit);