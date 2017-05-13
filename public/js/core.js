var mainmod = angular.module('evstk', ['ngRoute','ngMaterial','ngLetterAvatar','todoController', 'homeController', 'todoService', 'angularGrid']);

  mainmod.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
         .when('/findme', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'findme'; }
                      , metrolatlon: function(){ return '-87.6297982,41.8781136' }
             }
        })
        .when('/search/:city', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function($route){ return $route.current.params.city; }
                      , metrolatlon: function(){ return 'search' }
             }
        })
       .when('/chicago', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Chicago, IL'; }
                      , metrolatlon: function(){ return '-87.6297982,41.8781136' }
             }
        })
        .when('/phoenix', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Phoenix, AZ'; }
                      , metrolatlon: function(){ return '-112.074037,33.448377' } }
        })
        .when('/scottsdale', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Scottsdale, AZ'; }
                      , metrolatlon: function(){ return '-111.926052,33.494170' } }
        })
        .when('/tempe', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Tempe, AZ'; }
                      , metrolatlon: function(){ return '-111.940005,33.425510' } }
        })
        .when('/tucson', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Tucson, AZ'; }
                      , metrolatlon: function(){ return '-110.926479,32.221743' } }
        })
        .when('/berkeley', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Berkeley, CA'; }
                      , metrolatlon: function(){ return '-122.272747,37.871593' } }
        })
        .when('/emeryville', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Emeryville, CA'; }
                      , metrolatlon: function(){ return '-122.285247,37.831316' } }
        })
        .when('/la', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Los Angeles, CA'; }
                      , metrolatlon: function(){ return '-118.243685,34.052234' } }
        })
        .when('/sd', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'San Diego, CA'; }
                      , metrolatlon: function(){ return '-117.161084,32.715738' } }
        })
        .when('/sf', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'San Francisco, CA'; }
                      , metrolatlon: function(){ return '-122.419416,37.774929' } }
        })
        .when('/boulder', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Boulder, CO'; }
                      , metrolatlon: function(){ return '-105.270546,40.014986' } }
        })
        .when('/denver', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Denver, CO'; }
                      , metrolatlon: function(){ return '-104.990251,39.739236' } }
        })
        .when('/hartford', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Hartford, CT'; }
                      , metrolatlon: function(){ return '-72.685093,41.763711' } }
        })
        .when('/newhaven', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'New Haven, CT'; }
                      , metrolatlon: function(){ return '-72.927884,41.308274' } }
        })
        .when('/dc', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Washington, DC'; }
                      , metrolatlon: function(){ return '-77.036871,38.907192' } }
        })
        .when('/miami', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Miami, FL'; }
                      , metrolatlon: function(){ return '-80.226439,25.788969' }
             }
        })
        .when('/fortlauderdale', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Fort Lauderdale, FL'; }
                      , metrolatlon: function(){ return '-80.137317,26.122439' } }
        })
        .when('/orlando', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Orlando, FL'; }
                      , metrolatlon: function(){ return '-81.379236,28.538335' } }
        })
        .when('/tampa', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Tampa, FL'; }
                      , metrolatlon: function(){ return '-82.457178,27.950575' } }
        })
        .when('/atlanta', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Atlanta, GA'; }
                      , metrolatlon: function(){ return '-84.387982,33.748995' } }
        })
        .when('/savannah', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Savannah, GA'; }
                      , metrolatlon: function(){ return '-81.099834,32.083541' } }
        })
        .when('/honolulu', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Honolulu, HI'; }
                      , metrolatlon: function(){ return '-157.858333,21.306944' } }
        })
        .when('/lahaina', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Lahaina, HI'; }
                      , metrolatlon: function(){ return '-156.682500,20.878333' } }
        })
        .when('/iowacity', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Iowa City, IA'; }
                      , metrolatlon: function(){ return '-91.530168,41.661128' } }
        })
        .when('/boise', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Boise, ID'; }
                      , metrolatlon: function(){ return '-116.214607,43.618710' } }
        })
        .when('/evanston', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Evanston, IL'; }
                      , metrolatlon: function(){ return '-87.687697,42.045072' } }
        })        
        .when('/naperville', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Naperville, IL'; }
                      , metrolatlon: function(){ return '-88.153535,41.750839' } }
        })        
        .when('/schaumburg', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Schaumburg, IL'; }
                      , metrolatlon: function(){ return '-88.083406,42.033361' } }
        })        
        .when('/skokie', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Skokie, IL'; }
                      , metrolatlon: function(){ return '-87.741625,42.032403' } }
        })       
        .when('/bloomington', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Bloomington, IN'; }
                      , metrolatlon: function(){ return '-86.526386,39.165325' } }
        })        
        .when('/indianapolis', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Indianapolis, IN'; }
                      , metrolatlon: function(){ return '-86.158068,39.768403' } }
        })  
        .when('/louisville', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Louisville, KY'; }
                      , metrolatlon: function(){ return '-85.758456,38.252665' } }
        })  
        .when('/neworleans', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'New Orleans, LA'; }
                      , metrolatlon: function(){ return '-90.071532,29.951066' } }
        })  
        .when('/boston', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Boston, MA'; }
                      , metrolatlon: function(){ return '-71.058880,42.360082' } }
        })  
        .when('/cambridge', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Cambridge, MA'; }
                      , metrolatlon: function(){ return '-71.109734,42.373616' } }
        })  
        .when('/baltimore', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Baltimore, MD'; }
                      , metrolatlon: function(){ return '-76.612189,39.290385' } }
        }) 
        .when('/annarbor', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Ann Arbor, MI'; }
                      , metrolatlon: function(){ return '-83.743038,42.280826' } }
        })  
        .when('/detriot', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Detroit, MI'; }
                      , metrolatlon: function(){ return '-83.045754,42.331427' } }
        }) 
         .when('/minneapolis', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Minneapolis, MN'; }
                      , metrolatlon: function(){ return '-93.265011,44.977753' } }
        })  
        .when('/stpaul', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'St Paul, MN'; }
                      , metrolatlon: function(){ return '-93.089958,44.953703' } }
        }) 
         .when('/kc', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Kansas City, MO'; }
                      , metrolatlon: function(){ return '-94.578567,39.099727' } }
        })  
        .when('/stl', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'St Louis, MO'; }
                      , metrolatlon: function(){ return '-90.199404,38.627003' } }
        }) 
        .when('/charlotte', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Charlotte, NC'; }
                      , metrolatlon: function(){ return '-80.843124,35.227085' }
             }
        })
        .when('/durham', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Durham, NC'; }
                      , metrolatlon: function(){ return '-78.898619,35.994033' }
             }
        })
        .when('/raleigh', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Raleigh, NC'; }
                      , metrolatlon: function(){ return '-78.638179,35.779590' }
             }
        })
        .when('/newark', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Newark, NJ'; }
                      , metrolatlon: function(){ return '-74.172367,40.735657' }
             }
        })
        .when('/princeton', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Princeton, NJ'; }
                      , metrolatlon: function(){ return '-74.667223,40.357298' }
             }
        })
         .when('/albuquerque', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Albuquerque, NM'; }
                      , metrolatlon: function(){ return '-106.605553,35.085334' }
             }
        })
        .when('/santefe', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Sante Fe, NM'; }
                      , metrolatlon: function(){ return '-105.937799,35.686975' }
             }
        })
          .when('/lasvegas', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Las Vegas, NV'; }
                      , metrolatlon: function(){ return '-115.139830,36.169941' }
             }
        })
        .when('/reno', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Reno, NV'; }
                      , metrolatlon: function(){ return '-119.813803,39.529633' }
             }
        })
         .when('/nyc', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'New York, NY'; }
                      , metrolatlon: function(){ return '-74.005941,40.712784' }
             }
        })
          .when('/brooklyn', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Brooklyn, NY'; }
                      , metrolatlon: function(){ return '-73.944158,40.678178' }
             }
        })
        .when('/queens', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Flushing, NY'; }
                      , metrolatlon: function(){ return '-73.833079,40.767499' }
             }
        })
        .when('/longisland', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Long Island City, NY'; }
                      , metrolatlon: function(){ return '-73.948542,40.744679' }
             }
        })
        .when('/cincinnati', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Cincinnati, OH'; }
                      , metrolatlon: function(){ return '-84.512020,39.103118' }
             }
        })
        .when('/cleveland', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Cleveland, OH'; }
                      , metrolatlon: function(){ return '-81.694361,41.499320' }
             }
        })
        .when('/columbus', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Columbus, OH'; }
                      , metrolatlon: function(){ return '-82.998794,39.961176' }
             }
        })
        .when('/portland', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Portland, OR'; }
                      , metrolatlon: function(){ return '-122.676482,45.523062' }
             }
        })
        .when('/salem', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Salem, OR'; }
                      , metrolatlon: function(){ return '-123.035096,44.942898' }
             }
        })
        .when('/philadelphia', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Philadelphia, PA'; }
                      , metrolatlon: function(){ return '-75.165222,39.952584' }
             }
        })
        .when('/pittsburgh', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Pittsburgh, PA'; }
                      , metrolatlon: function(){ return '-79.995886,40.440625' }
             }
        })
        .when('/providence', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Providence, RI'; }
                      , metrolatlon: function(){ return '-71.412834,41.823989' }
             }
        })
        .when('/charleston', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Charleston, SC'; }
                      , metrolatlon: function(){ return '-79.931051,32.776475' }
             }
        })
        .when('/memphis', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Memphis, TN'; }
                      , metrolatlon: function(){ return '-90.048980,35.149534' }
             }
        })
        .when('/nashville', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Nashville, TN'; }
                      , metrolatlon: function(){ return '-86.781602,36.162664' }
             }
        })
        .when('/austin', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Austin, TX'; }
                      , metrolatlon: function(){ return '-97.743061,30.267153' }
             }
        })
        .when('/dallas', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Dallas, TX'; }
                      , metrolatlon: function(){ return '-96.796988,32.776664' }
             }
        })
        .when('/houston', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Houston, TX'; }
                      , metrolatlon: function(){ return '-95.369803,29.760427' }
             }
        })
        .when('/sanantonio', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'San Antonio, TX'; }
                      , metrolatlon: function(){ return '-98.493628,29.424122' }
             }
        })
        .when('/saltlakecity', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Salt Lake City, UT'; }
                      , metrolatlon: function(){ return '-111.891047,40.760779' }
             }
        })
        .when('/alexandria', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Alexandria, VA'; }
                      , metrolatlon: function(){ return '-77.046921,38.804836' }
             }
        })
        .when('/arlington', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Arlington, VA'; }
                      , metrolatlon: function(){ return '-77.106770,38.879970' }
             }
        })
        .when('/richmond', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Richmond, VA'; }
                      , metrolatlon: function(){ return '-77.436048,37.540725' }
             }
        })
        .when('/burlington', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Burlington, VT'; }
                      , metrolatlon: function(){ return '-73.212072,44.475882' }
             }
        })
         .when('/bellevue', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Bellevue, WA'; }
                      , metrolatlon: function(){ return '-122.201516,47.610150' }
             }
        })
        .when('/redmond', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Redmond, WA'; }
                      , metrolatlon: function(){ return '-122.121512,47.673988' }
             }
        })
        .when('/seattle', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Seattle, WA'; }
                      , metrolatlon: function(){ return '-122.332071,47.606209' }
             }
        })
        .when('/madison', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Madison, WI'; }
                      , metrolatlon: function(){ return '-89.401230,43.073052' }
             }
        })
        .when('/milwaukee', {
             templateUrl: '/views/events_p.html', controller: 'MasterController', caseInsensitiveMatch: true,
             resolve: { metro: function(){ return 'Milwaukee, WI'; }
                      , metrolatlon: function(){ return '-87.906474,43.038902' }
             }
        })
/**        .when('/', {
             //templateUrl: '/index1.html',
             //controller: 'MasterController',
             //caseInsensitiveMatch: true,
             //resolve: { metro: function(){ return 'Chicago, IL'; }
             //         , metrolatlon: function(){ return '-87.6297982,41.8781136' }
            redirectTo: function() {
                window.location.replace("https://evstk.com");
            }
        })
 **/       
        .when('/', {
             templateUrl: '/views/home_p.html', controller: 'HomeController', caseInsensitiveMatch: true,
             //resolve: { metro: function(){ return 'Milwaukee, WI'; }
            //          , metrolatlon: function(){ return '-87.906474,43.038902' }
            // }
        })   
        .otherwise({
             redirectTo: '/'
        })
        ;

        $locationProvider.html5Mode(true);



  }])
;


