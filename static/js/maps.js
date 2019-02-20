function init() {
     var mapDiv = document.getElementById("mymap");
     var mapOptions = {
       center: new google.maps.LatLng(37.09024, -119.4179324),  
       zoom: 5,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(mapDiv, mapOptions);
}