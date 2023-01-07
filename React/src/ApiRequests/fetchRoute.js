async function calculateRoute(origin, destination){
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const lat = origin.lat;
    const lng = origin.lng;
    
    const res = directionsService.route({
        origin: {lat: lat,lng: lng},
        destination: destination,
        waypoints: [],
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.WALKING
    }).catch((e)=> {
        console.log("Could not display directions due to: " + e);
    });

    return res;
}

export default calculateRoute