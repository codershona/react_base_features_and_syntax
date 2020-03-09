### React Base features and Syntax



* NOTES :
```
    - npx create-react-app react_base_features_and_syntax ;
    - cd react_base_features_and_syntax ;
    - yarn start ;
    - localhost:3000/ ;
    * Understanding the base features and Syntax;
    * Working with Lists and Conditional;
    * Styling React Components and elements ;
     - Adding and Using Radium (npm install --save radium) : [Radium is a popular package in react which allows us to use inline styles with sudo selectors and media queries.] ;
     - npm install --save styled-components ;
     - npm run eject ; then --- git add . ; then -- git commit -m "" ; then -- run : npm run eject again ; 
     - Debugging react Apps ;
     - Diving Deeper into Components and react Internals ;
     - Remove Errorboundaries folder use it it some cases;


     TIPS :  New minor version of npm available! 6.13.7 → 6.14.2       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.14.2   │
   │               Run npm install -g npm to update! 

```


####  Class-based vs Functional Components :

```

     class-based --------------------------------   Functional
   
  * class XY extends Component ---------    const XY = props => {...}
    ** Access to State (Yes)   -------   Access to State(useSate()) (Yes)
    ** Lifecycle Hooks (Yes)   --------- Lifecycle Hooks (NO)
  
  - Access State and Props via "this"  ----- Access Props via "props"
  - this.sate.XY & this.props.XY       ------ props.XY
  (Use if you need to manage State    ----- (Use in all other Cases)
  	or access to Lifecycle Hooks
  	 and you don't 
  	 want to use React Hooks!)

```