var rest = require('../../node_modules/restler');

angular.module('geo', [])

	// super simple service
	// each function returns a promise object
	.factory('geo', [function(metro) {
				rest.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDTBmhy-vf1Cj9VxnmiZU_e6s_mVxo03UI&address='+metro).on('complete', function(result) {
      if (result instanceof Error) {
        console.log('Error:', result.message);
        //this.retry(5000); // try again after 5 sec
      }  else {
        console.log(result);
        console.log('city, state:');
        //var citystate = result.results[0].address_components[3].long_name+', '+result.results[0].address_components[5].short_name;
        //console.log(citystate);
        lat = result.results[0].geometry.location.lat;
        lon = result.results[0].geometry.location.lng;
        console.log('latlon:'+lat+','+lon); 
        return lat+','+lon;
      }
    });

	}])

;

