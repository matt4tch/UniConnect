function initMap() {
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 4,
     center: { lat: 43.4643, lng: 80.5204 }, 
   });
   const directionsService = new google.maps.DirectionsService();
   const directionsRenderer = new google.maps.DirectionsRenderer({
     draggable: true,
     map,
     panel: document.getElementById("panel"),
   });
 
   directionsRenderer.addListener("directions_changed", () => {
     const directions = directionsRenderer.getDirections();
 
     if (directions) {
       computeTotalDistance(directions);
     }
   });
   displayRoute(
     "Toronto, ON",
     "Waterloo, ON",
     directionsService,
     directionsRenderer
   );
 }
 
 function displayRoute(origin, destination, service, display) {
   service
     .route({
       origin: origin,
       destination: destination,
       waypoints: [
         { location: "Cambridge, ON" },
         { location: "Guelph, ON" },
       ],
       travelMode: google.maps.TravelMode.WALKING,
       //avoidTolls: true,
     })
     .then((result) => {
       display.setDirections(result);
     })
     .catch((e) => {
       alert("Could not display directions due to: " + e);
     });
 }
 
 function computeTotalDistance(result) {
   let total = 0;
   const myroute = result.routes[0];
 
   if (!myroute) {
     return;
   }
 
   for (let i = 0; i < myroute.legs.length; i++) {
     total += myroute.legs[i].distance.value;
   }
 
   total = total / 1000;
   document.getElementById("total").innerHTML = total + " km";
 }
 
 window.initMap = initMap;