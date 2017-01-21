var React = require('React');

//old code
//var About = React.createClass({
//   render: function() {
//       return(
//        <h3>About Component</h3>
//       )
//   } 
//});

//stateless functional component
//var About = function (props) {
//    return(
//        <h3>About Component</h3>
//       )
//};

//stateless functional component with arrow function
var About = (props) => {
    return(
      <div>
       <h3>About</h3>
       <p>Welcome to the about page</p>        
      </div>    
      
   )
};

module.exports = About;