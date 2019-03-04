var map;
function initMap() {
     var mapDiv = document.getElementById('mymap');
     var mapOptions = {
       center: new google.maps.LatLng(53.3453116,-6.2735728),  
       zoom: 13,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     
     map = new google.maps.Map(mapDiv, mapOptions);
     

     var defaultBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(53.3461447,-6.2728271),
          new google.maps.LatLng(53.3438193,-6.281254));
          
     var options = {
          bounds: defaultBounds
     };
     
     
     
}

function activatePlacesSearch() {
            var input = document.getElementById('searchBox');
            var autocomplete = new google.maps.places.Autocomplete(input);
}

    activatePlacesSearch();