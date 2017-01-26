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
       <h1 className="text-center">About</h1>
       <p>This is a weather application build with React.</p>
       <p>Tools used:</p>
        <ul>
        <li>
         <a href="https://facebook.github.io/react">React </a>
          - JavaScript Framework
        </li>   
        <li>
         <a href="http://openweathermap.org">Open Weather Map </a>    
         - API to search for weather data by city name
        </li>    
        </ul>        
      </div>    
      
   )
};

module.exports = About;