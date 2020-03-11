import React from 'react';


const authContext = React.createContext({
	authenticated: false, 
	login: () => {}
   

   });

export default authContext;



// Technically, it doesn't have to be an object. You could also have an array, a string, a number etc. as a context value!

