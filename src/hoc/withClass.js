import React from 'react';

const withClass = (WrappedComponent, className) => {

     return props => (
      
      <div className={className}>

            <WrappedComponent name="Max"/>

      </div>

     	);

   };



export default withClass;