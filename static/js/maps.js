function init() {
     var mapDiv = document.getElementById("mymap");
     var mapOptions = {
       center: new google.maps.LatLng(53.3453116,-6.2735728),  
       zoom: 13,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(mapDiv, mapOptions);
}