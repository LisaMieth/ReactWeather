var React = require('react');

var WeatherMessage = ({temp, location}) => {
    //var {location, temp} = props;
       
    return(
      <h3 className="text-center">It is {temp} in {location}.</h3>
    );
};

module.exports = WeatherMessage;