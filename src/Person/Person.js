// function person() {
// 	return <h2>
// }

// var person = function () {

// }

// const person = function()
import React from 'react'

const person = (props) => {
	// return <p> I'm a Person and I am {Math.floor(Math.random() * 40)} years old! </p>
 return <p> I'm {props.name} and I am {props.age} years old! </p>  
};

export default person;