var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=86c44e959683227d299e8e1965d82f56&units=metric';

module.exports = {
    getTemp: function (location) {
        
      var encodedLocation = encodeURIComponent(location);    
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;    
        
      return axios.get(requestUrl).then(function (response) {
          
         //do error checking to catch any errors by API
          if(response.data.cod && response.data.message){
            //if this if statement fires something went wrong and we can throw a new error
            throw new Error('Something went wrong. Cannot fetch weather.');  
          }
          else{
            //return temperature
            return response.data.main.temp;
          }
      }, function(response) {
          //if API sends back an error we can pull off the message with this
          throw new Error('Something went wrong. Cannot fetch weather.');
      });    
    }
}