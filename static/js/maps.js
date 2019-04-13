var map, places, infoWindow;
var markers = [];
var autocomplete;
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var selectedType;

function initMap() {
        map = new google.maps.Map(document.getElementById('mymap'), {
          center: {lat: 53.3453116, lng: -6.2735728}, 
          zoom: 13,
		  mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false
        });

        infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });

        autocomplete = new google.maps.places.Autocomplete(
            (
                document.getElementById('searchBox')), {
                types: ['(cities)'],
            });
        places = new google.maps.places.PlacesService(map);

        autocomplete.addListener('place_changed', onPlaceChanged);
      }

      function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
          selectedType='lodging'
          console.log('Selected type is: ')
          console.log(selectedType);
          search();
        } else {
          document.getElementById('searchBox').placeholder = 'Enter a city';
        }
      }

      function search() {
        var selectedTypeNew;
        selectedTypeNew='';
        
        var multiType = selectedType.includes(",");
        if (multiType) {
          selectedTypeNew = selectedType.split(',');
          
          var search = {
            bounds: map.getBounds(),
            types: selectedTypeNew   
          };
        } else {
          var search = {
            bounds: map.getBounds(),
            types: [selectedType]   
          };
        }
        
        clearResults();
        clearMarkers();

        places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 200);
              addResult(results[i], i);
            }
            displayListing();
          }
        });
      }

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
        markers = [];
      }

      function dropMarker(i) {
        return function() {
          markers[i].setMap(map);
        };
      }

      function addResult(result, i) {
        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';
        
        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var ratingTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        //var rating = '';
        var ratingHtml = '';
        var ratingNew = '';
        //var rating = document.createTextNode(result.rating);
        var ratingNum = parseFloat(result.rating);
        //rating = 3;
        var blackstar = '&#9733;';
        var whitestar = '&#9734;';
        if (ratingNum) {
          
          for (var i = 0; i < 5; i++) {
            if (ratingNum < (i + 0.5)) {
              //ratingHtml += '&#10025;';
              ratingHtml += whitestar;
              //ratingHtml +='0';
              console.log(ratingHtml);
            } else {
              //ratingHtml += '&#10029;';
              ratingHtml += blackstar;
              //ratingHtml +='1';
              console.log(ratingHtml);
            }
          //document.getElementById('iw-rating-row').style.display = '';
          //document.getElementById('iw-rating').innerHTML = ratingHtml;
            ratingNew = document.createTextNode(ratingHtml);
          }
        } else {
          //document.getElementById('iw-rating-row').style.display = 'none';
          ratingNew = document.createTextNode(ratingHtml);
        }
        
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        ratingTd.appendChild(ratingNew);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        tr.appendChild(ratingTd);
        results.appendChild(tr);
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }

      function showInfoWindow() {
        var marker = this;
        places.getDetails({placeId: marker.placeResult.place_id},
            function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              infoWindow.open(map, marker);
              buildIWContent(place);  //Feed results into info window....
            });
      }
      
      function buildIWContent(place) {
        document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
            'src="' + place.icon + '"/>';
        document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
            '">' + place.name + '</a></b>';
        document.getElementById('iw-address').textContent = place.vicinity;

        if (place.formatted_phone_number) {
          document.getElementById('iw-phone-row').style.display = '';
          document.getElementById('iw-phone').textContent =
              place.formatted_phone_number;
        } else {
          document.getElementById('iw-phone-row').style.display = 'none';
        }

        if (place.rating) {
          var ratingHtml = '';
          for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
              ratingHtml += '&#10025;';
            } else {
              ratingHtml += '&#10029;';
            }
          document.getElementById('iw-rating-row').style.display = '';
          document.getElementById('iw-rating').innerHTML = ratingHtml;
          }
        } else {
          document.getElementById('iw-rating-row').style.display = 'none';
        }

        if (place.website) {
          var fullUrl = place.website;
          var website = hostnameRegexp.exec(place.website);
          if (website === null) {
            website = 'http://' + place.website + '/';
            fullUrl = website;
          }
          document.getElementById('iw-website-row').style.display = '';
          document.getElementById('iw-website').textContent = website;
        } else {
          document.getElementById('iw-website-row').style.display = 'none';
        }
      }

function setSearchType(selectedSearchType) {
  selectedType ='';
  selectedType = selectedSearchType;
  search();
}

function clearOptions() {
  var clearOpts = document.getElementsByName("searchType");
  for(var i = 0; i < clearOpts.length; i++) {
    clearOpts[i].checked = false;
  }
  clearResults();
  clearMarkers();
  hideListingTable();
}

function hideListingTable() {
  document.getElementById("listing").style.display = "none";
}

function displayListing() {
  document.getElementById("listing").style.display = "block";
}