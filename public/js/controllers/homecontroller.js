var cont = angular.module('homeController', ['ui.bootstrap', 'tagged.directives.infiniteScroll', 'ngAnimate', 'angularGrid', 'ng', 'ngCookies']);


// inject the Todo service factory into our controller
cont.controller('HomeController', ['$scope', '$http', 'Todos', '$uibModal', 'imageService', 'angularGridInstance', '$mdSidenav', '$mdDialog', '$cookies', '$location', '$log', function($scope, $http, Todos, $uibModal, imageService, angularGridInstance, $mdSidenav, $mdDialog, $cookies, $location, $log) {

	//get lat lon
	$scope.getLatLon = function(xmetro) {
	
			Todos.searchEvents(xmetro, $scope.chosenDay,  $scope.page)
				.success(function(data) {
					  //$scope.chosenLonlat = lat+','+lon;
						$scope.eventList = data;
						eventList = $scope.eventList;
						$scope.loading = false;
		});


		

	
	}
	

	$scope.formData = {};
	$scope.loading = true;
	$scope.loadingmore = false;
	$scope.fetching = false;
	$scope.disabled = true;
	$scope.isLikeEnabled = true;
	$scope.isAbuseFlagEnabled = true;
	$scope.chosenTag = "";
	$scope.chosenLonlat = "";
  $scope.chosenDay = "Today";
	$scope.page = 0;
	var eventList;

	  metro="";
  metrolatlon="";
  
  if (metrolatlon == 'search') {
		$scope.getLatLon(metro);
	}
	
  metro="";
  metrolatlon="";
	$scope.chosenMetro = metro;

	$scope.metro = metro;
	$scope.metrolatlon = metrolatlon;
	var currentlatlon = metrolatlon;
	$scope.chosenLonlat = metrolatlon;
	var previouslatlon = metrolatlon;

	$scope.sortDirection = true;

	$scope.selectedEvent = "";
	$scope.page = 0;
	//$scope.donefetching = false;
	$scope.chosenDay = "Today";
	$scope.chosenFilter = "Filters";
	//$scope.chosenCity='Chicago, IL';
	$scope.chosenCity = metro;
	var previousCity = metro;
	var isFirstVisit = true;


	// $scope.filterList=[];
	$scope.dayList = ["Today", "Tomorrow", "Weekend"];
	$scope.eventList = [];

	//define findMe function, then call it upon loading page
		$scope.findMe = function() {
					navigator.geolocation.getCurrentPosition(function(position) {
				$scope.$apply(function() {
					currentlatlon = position.coords.longitude + "," + position.coords.latitude;
					//chi test
					//currentlatlon = '-87.677814,41.917861';
					//making assumption that since they chose FINDME, they want distances from there
				 $scope.chosenLonlat = currentlatlon;
				 //query for closest metro to current position
					Todos.getNearestMetro(currentlatlon)
						.success(function(data) {
							//console.log('getNearestMetro:' + data[0].toString());

						if (data[0].metro !== $scope.metro) {
								isFirstVisit = false;
								//$scope.showConfirm(data[0].metro, data[0].shortname);
								$location.path("/" + data[0].shortname);
						} else {
							//requery events using lat/lng
							$scope.loading = true;
							Todos.getEvents(metro, 	$scope.chosenLonlat, $scope.chosenDay, $scope.chosenFilter, $scope.page)
								.success(function(data) {
									$scope.eventList = data;
									eventList = $scope.eventList;
									$scope.loading = false;
							});
							
						} //end if/else

					});
				});
			});
	}
	
	//run findMe
	if (metro === 'findme'){
		$scope.findMe();
	}
	
	//default lon,lat
	//var chicaXgogeo = "-87.6297982,41.8781136";

	/**
	//get local
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			$scope.$apply(function() {
				//$scope.position = position;
				currentlatlon = position.coords.longitude + "," + position.coords.latitude;

				//for testing scottsdale
				//currentlatlon = '-111., 33.49417';
				//-80.226439,25.788969
				//currentlatlon = "-80.0,25.0";
				//console.log('before getNearestMetro:' + currentlatlon);

				//query for closest metro to current position
				Todos.getNearestMetro(currentlatlon)
					.success(function(data) {
						//console.log('getNearestMetro:' + data[0].toString());

						if (data[0].metro !== $scope.chosenCity) {
							isFirstVisit = false;
							$scope.showConfirm(data[0].metro, data[0].shortname);
							
						}

					});

				//then change location to that city "/sf" for example

				//rerun query just in case it has already run
			});
		});
	}
**/

	$scope.showConfirm = function(closest, shortname) {
		// Appending dialog to document.body to cover sidenav in docs app
		var confirm = $mdDialog.confirm()
			.title("Looks like you're closest to " + closest)
			.textContent('Would you like to see events there?')
			.ariaLabel('Change metro?')
			//.targetEvent(ev)
			.ok('Go to ' + closest)
			.cancel('Stay here');

		$mdDialog.show(confirm).then(function() {
			//reload page for different metro
			 $location.path("/" + shortname);
		}, function() {
			//chosenCity now says "Near Me			
			$scope.chosenCity = previousCity;
			$scope.chosenLonlat = previouslatlon;
			//currentlatlon is not set using gps, so need to reset it to latlon of orig metro
			currentlatlon = previouslatlon;
		});
	};



/**
if (metrolatlon != 'search') {
		Todos.getEvents(metro, $scope.chosenLonlat, $scope.chosenDay, $scope.chosenFilter, $scope.page)
		.success(function(data) {
			$scope.eventList = data;
			eventList = $scope.eventList;
			$scope.loading = false;
		});
	}	

	//Get Cities for dropdown
	Todos.getCities($scope.chosenDay, metro)
		.success(function(data) {
			//inject current location option if geo allowed
			if (navigator.geolocation) {
				data.unshift("Near Me");
				//cur location
			}
			data.unshift("Change Metro");
			$scope.cityList = data;
			$scope.loading = false;
		});

	//Get Cities for dropdown
	//Todos.getMetros($scope.chosenDay)
	//	.success(function(data) {
			//inject current location option if geo allowed
			// if (navigator.geolocation) {
			//   data.unshift("Current Location");
			//cur location
			//   }
			//$scope.metroList = data;
			//$scope.loading = false;
	//	});

	Todos.getAllMetros()
		.success(function(data) {
			$scope.metroList = data;
		});
	
	//Get Filters for dropdown
	Todos.getFilters($scope.chosenDay, metro)
		.success(function(data) {
			$scope.filterList = data;
			$scope.loading = false;
			$scope.disabled = false;

		});
	**/
	
	$scope.changeView = function(page) {
			$location.path("/" + page); // path not hash
	}
		
		$scope.goHome = function() {
			$location.path("https://evstk.com"); // path not hash
	}

	// HANDLE ACTIONS =====================================================
	//handle day selection
		
	$scope.goSearch = function(searchStr){
    $location.path('/search/'+searchStr); // path not hash
  };
	
	$scope.daySelected = function(day) {
		$scope.loading = true;
		$scope.chosenDay = day;
		//updated code doesn't add filters to query...does it on front end
		$scope.chosenTag = '';
		$scope.page = 0;
		$scope.disabled = false;
		//$scope.donefetching = false;
		//call reload tweets
		//Todos.getEvents($scope.chosenCity, $scope.chosenDay, $scope.chosenFilter, $scope.page)
		Todos.getEvents(metro, $scope.chosenLonlat, $scope.chosenDay, $scope.chosenFilter, $scope.page)
			.success(function(data) {
				$scope.eventList = data;
				eventList = $scope.eventList;
				$scope.loading = false;
			});

	};


	
	//handle city selection
	$scope.citySelected = function(city) {
		$scope.loading = true;
		$scope.chosenCity = city;
		//reset filters
		$scope.chosenFilter = 'Filters';
		$scope.page = 0;
		$scope.disabled = false;
	  //updated code doesn't add filters to query...does it on front end
		$scope.chosenTag = '';
		//$scope.donefetching = false;

		Todos.getFilters($scope.chosenDay, metro)
			.success(function(data) {
				$scope.filterList = data;
				$scope.loading = false;
			});

		if (city == 'Change Metro') {
			$scope.showLocations();
			
		//if current location,
		} else if (city == 'Near Me') {
       $scope.findMe();

		} else {
			//else, different city chosen
			
			//update prevCity
			previousCity = $scope.chosenCity;
			
			//need to get sample lat/lon for chosen city
			Todos.getEventsLoc($scope.chosenCity)
				.success(function(data) {

					var lonlat = data.lon + "," + data.lat;
					$scope.chosenLonlat = lonlat;
					//update prevlatlon
					previouslatlon = lonlat;				
					//call reload tweets
					//Todos.getEvents($scope.chosenCity, $scope.chosenDay, $scope.chosenFilter, $scope.page)
					Todos.getEvents(metro, $scope.chosenLonlat, $scope.chosenDay, $scope.chosenFilter, $scope.page)
						.success(function(data) {
							$scope.eventList = data;
							eventList = $scope.eventList;
							origEventList = $scope.eventList;
							$scope.loading = false;
						});
				});
		}
	};

	//handle filter selection
	$scope.filterSelected = function(filter) {
		$scope.loading = true;
		$scope.page = 0;
		//$scope.donefetching = false;
		$scope.chosenFilter = filter;
		$scope.disabled = false;

		//Todos.getEvents($scope.chosenCity, $scope.chosenDay, $scope.chosenFilter, $scope.page)
		Todos.getEvents(metro, $scope.chosenLonlat, $scope.chosenDay, $scope.chosenFilter, $scope.page)
			.success(function(data) {
				$scope.eventList = data;
				eventList = $scope.eventList;
				$scope.loading = false;
			});

	};

	//handle filter selection
	$scope.updateLike = function(ev) {
		var prevLikes = $cookies.get("likes");
		//alert(prevLikes);
		//only increment if it hasn't yet in this session
		if (prevLikes !== undefined) {
			if (prevLikes.indexOf(ev._id) == -1) {
				ev.likes = ev.likes + 1 || 1; //evt.likes = evt.likes || 0; //evt.likes++;
				Todos.updateLike(ev._id);
				$cookies.put("likes", prevLikes + " " + ev._id);
				//alert($cookies.get("likes"));
				//$scope.isLikeEnabled = false;
			}
		} else {
			ev.likes = ev.likes + 1 || 1; //evt.likes = evt.likes || 0; //evt.likes++;
			Todos.updateLike(ev._id);
			$cookies.put("likes", " " + ev._id);
			//alert($cookies.get("likes"));
		}
	};

	//return whether a post has been liked or not
	$scope.isLiked = function(ev) {
		var prevLikes = $cookies.get("likes");
		if (prevLikes !== undefined) {
			if (prevLikes.indexOf(ev._id) == -1) {
				return false;
			} else {
				return true;
			}
		} else {
			return false;
		}
	}


	$scope.updateAbuseFlagCount = function(ev) {

		var prevFlags = $cookies.get("flags");
		//alert(prevFlags);
		//only increment if it hasn't yet in this session
		if (prevFlags !== undefined) {
			if (prevFlags.indexOf(ev._id) == -1) {
				ev.abuseFlagCount = ev.abuseFlagCount + 1 || 1; //evt.likes = evt.likes || 0; //evt.likes++;
				Todos.updateAbuseFlagCount(ev._id);
				$cookies.put("flags", prevFlags + " " + ev._id);
				//alert($cookies.get("flags"));
			}
		} else {
			ev.abuseFlagCount = ev.abuseFlagCount + 1 || 1; //evt.likes = evt.likes || 0; //evt.likes++;
			Todos.updateAbuseFlagCount(ev._id);
			$cookies.put("flags", " " + ev._id);
			//alert($cookies.get("flags"));
		}

	};

	//infinite scroll call for more
	$scope.getMore = function() {
		//          if (!$scope.donefetching) {
		$scope.page++;
		$scope.fetching = true;
		//$scope.loadingmore = true;
		$scope.loading = true;

		//default to current
		var whichLonlat = currentlatlon;
		if ($scope.chosenCity !== 'Near Me') {
			whichLonlat = $scope.chosenLonlat;
		}
		//      Todos.getEvents($scope.chosenCity, $scope.chosenDay, $scope.chosenFilter, $scope.page)
		Todos.getEvents(metro, $scope.chosenLonlat, $scope.chosenDay, $scope.chosenFilter, $scope.page)
			.success(function(data) {
				$scope.fetching = false;
				//setTimeout(function(){
				//$scope.loadingmore = false;
				$scope.loading = false;
				//}, 1000);

				if (data != 'none') { //none is hardcoded by service for no results
					//append new items
					$scope.eventList = $scope.eventList.concat(data);
					eventList = $scope.eventList;

					//$scope.donefetching = false;
				} else {
					$scope.disabled = true;
					//$scope.donefetching = true;
				}
			});
	};

	$scope.openModal = function(ev) {
		$scope.selectedEvent = ev;

		$scope.modalInstance = $uibModal.open({
			templateUrl: 'myPopoverTemplate.html',
			animation: true,
			scope: $scope //,
				//,ev: ev//,
				//resolve: {
				//  eve: function() {
				//   return ev;
				//  }
				//}
		});
	}

	$scope.closeModal = function() {
		$scope.modalInstance.dismiss();
	};


	$scope.refresh = function() {
		angularGridInstance.gallery.refresh();
	}


	//apply search on the list base on searchTxt which can be binded to an input element
	$scope.$watch('searchTxt', function(val) {
		//	   $scope.$searchChanged = function(val) {
		if (val !== undefined) {
			val = val.toLowerCase();
			$scope.eventList = eventList.filter(function(obj) {
				return ((obj.title !== undefined && obj.title.toLowerCase().indexOf(val) != -1) || (obj.place !== undefined && obj.place.toLowerCase().indexOf(val) != -1) || (obj.body !== undefined) && (obj.body.toLowerCase().indexOf(val) != -1));
			});
		}

	});

	//set color of button for tags
	$scope.tagCSS = function(val) {
		if ($scope.chosenTag === val) {
			return 'day-selected';
		} else {
			return 'day-option';
		}
	}

		//set color of button for tags
	$scope.tagCSSmobile = function(val) {
		if ($scope.chosenTag === val) {
			return 'day-selected';
		} else {
			return 'day-option-mobile';
		}
	}
	//filter on common tags - kids, bars, etc
	$scope.filterTag = function(val) {

		//already chosen, so this should reset it
		if ($scope.chosenTag === val) {
			$scope.chosenTag = "";
			$scope.eventList = eventList;
		} else {
			$scope.chosenTag = val;
			val = val.toLowerCase();
			$scope.eventList = eventList.filter(function(obj) {
				//return ((obj.title !== undefined && obj.title.toLowerCase().indexOf(val) != -1) || (obj.body !== undefined && obj.body.toLowerCase().indexOf(val) != -1));
				if (obj.title !== undefined)  
					return  obj.title.toLowerCase().indexOf(val) != -1; 
				if (obj.body !== undefined)
					return obj.body.toLowerCase().indexOf(val) != -1;
			});
		}
	};

	//for left side nav
	$scope.openLeftMenu = function() {
		$mdSidenav('left').toggle();
	};

	//for logout menu
	var originatorEv;
	$scope.openMenu = function($mdOpenMenu, ev) {
		originatorEv = ev;
		$mdOpenMenu(ev);
	};

	//sort images by something (lets say likes)
	$scope.sortByLikes = function() {
		//$scope.chosenCity = "BOO";
		$scope.eventList.sort(function(a, b) {
			return b.likes - a.likes;
		});
	}
	$scope.sortByTime = function() {
		$scope.eventList.sort(function(a, b) {
			return new Date(b.createdate) - new Date(a.createdate);
		});
	}

	$scope.sortByDistance = function() {
		$scope.eventList.sort(function(a, b) {
			return a.distance - b.distance;
		});
	}

	//Angular Material Modal

	//ASSIGNMENT ########################		
	$scope.showAssignment = function(ev) {
		$mdDialog.show({
				controller: DialogAssignmentController,
				templateUrl: 'dialog.addevent.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: $scope.customFullscreen, // Only for -xs, -sm breakpoints.
				locals: {
					nas: $scope.newAssignment,
					alist: $scope.assignmentList,
					master: $scope.masterAssignment,
					isAnn: false
				}
			})
			.then(function(answer) {
				//$scope.status = 'You said the information was "' + answer + '".';
				$scope.newAssignment = angular.copy($scope.masterAssignment);
			}, function() {
				$scope.newAssignment = angular.copy($scope.masterAssignment);
				$scope.status = 'You cancelled the dialog.';
			});
	};

	//location pop-up
	$scope.showFilters = function(ev) {
		$mdDialog.show({
				controller: LocationDialogController,
				scope: $scope,
				templateUrl: 'filters.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: true // Only for -xs, -sm breakpoints.
			})
			.then(function(answer) {
				$scope.status = 'You said the information was "' + answer + '".';
			}, function() {
				$scope.status = 'You cancelled the dialog.';
			});
	};
	
	//location pop-up
	$scope.showLocations = function(ev) {
		$mdDialog.show({
				controller: LocationDialogController,
				templateUrl: 'location.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: true, // Only for -xs, -sm breakpoints.
				locals: {
					metroList: $scope.metroList
				}
			})
			.then(function(answer) {
				$scope.status = 'You said the information was "' + answer + '".';
			}, function() {
			//cancel
				$scope.chosenCity = previousCity;
			});
	};

	//location pop-up controller	
	function LocationDialogController($scope, $mdDialog, $location, metroList) {
$scope.metroList = metroList;
		
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.goLocation = function(city) {
			$mdDialog.hide();
			$location.path("/" + city); // path not hash
			//$location.path("/sf"); // path not hash

		};
		
		$scope.daySelectedPopup = function(day) {
			$mdDialog.hide();
			$scope.daySelected(day);
			//$location.path("/sf"); // path not hash

		};
	}

	function DialogAssignmentController($scope, $mdDialog, $log, nas, alist, master, isAnn) {

		//$scope.newAssignment = angular.copy(nas);
		//$scope.newAssignment = nas;
		//$scope.newAssignment.isAnnouncement = isAnn;
		//$scope.assignmentList = alist;

		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.goAssignment = function() {

			if ($scope.newAssignment.name.length == 0) {
				//do nothing
			} else {
				services.createAssignment($scope.newAssignment)
					.then(function(data) {
						//console.log('createAssignment data:' + JSON.stringify(data) + ' id:' + data.data._id);
						$log.log('createAssignment data:' + JSON.stringify(data) + ' id:' + data.data._id)
							//set id of klass just created
						$scope.newAssignment._id = data.data._id;
						$scope.newAssignment.numNotComplete = data.data.numNotComplete;
						$scope.newAssignment.numComplete = 0;
						if (!$scope.newAssignment.isAnnouncement) {
							$scope.newAssignment.due = $scope.newAssignment.due.toISOString();
						}
						$scope.assignmentList.unshift($scope.newAssignment);

					});
				$mdDialog.hide();
			}
		};

	}

}])

.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('blue-grey')
		.accentPalette('deep-orange');
});

cont.filter('parseUrl', function($sce) {
    var  //URLs starting with http://, https://, or ftp://
      replacePattern1 = /(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
	    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
	    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim,
	    //Change email addresses to mailto:: links.
	    //replacePattern3 = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
	    //replacePattern3 = /(#[\S]+(\b|$))/gim;
	    replacePattern3 = /(^|\s)#([\S]+)/gim,
	    replacePattern4 = /(^|\s)@([\S]+)/gim;
	    //replacePattern3 = /(#\w\w+)/gim;

	    return function(text, target, otherProp) {        
	        //angular.forEach(text.match(replacePattern1), function(url) {
	        //text = text.replace(replacePattern1, "<a href=\"$1\" target=\"_blank\">$1</a>");
	        //});
				  if (text.match(replacePattern1))
							text = text.replace(replacePattern1, "<a href=\"$1\" target=\"_blank\">$1</a>");
	        angular.forEach(text.match(replacePattern2), function(url) {
	        	text = text.replace(replacePattern2, "$1<a href=\"http://$2\" target=\"_blank\">$2</a>");
	        });
	        angular.forEach(text.match(replacePattern3), function(url) {
	        	text = text.replace(replacePattern3, "$1<a href=\"https://twitter.com/hashtag/$2\" target=\"_blank\">#$2</a>");
	        });
	        angular.forEach(text.match(replacePattern4), function(url) {
	        	text = text.replace(replacePattern4, "$1<a href=\"https://twitter.com/$2\" target=\"_blank\">@$2</a>");
	        });        
					return $sce.trustAsHtml(text);

	        //return text;        
	    };
	});