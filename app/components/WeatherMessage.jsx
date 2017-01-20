var React = require('react');

var WeatherMessage = ({temp, location}) => {
    //var {location, temp} = props;
       
    return(
      <h4>It is {temp} in {location}.</h4>
    );
};

module.exports = WeatherMessage;