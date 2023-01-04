import { useContext, useEffect } from "react";
import LatLongContext from "./latLong";

const LocationResults = ({ GetLocationInfo }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, setLatLong] = useContext(LatLongContext);

    const Coordinates = GetLocationInfo['Coordinates'];
    const SubmitState = GetLocationInfo['submitState'];

    useEffect(() => {
        if (Coordinates.status === "ZERO_RESULTS" && SubmitState) {
            alert('Location not found, please try again!');
        } else if (SubmitState) {
            const latitute = Coordinates['results'][0]['geometry']['location']['lat'];
            const longitude = Coordinates['results'][0]['geometry']['location']['lng']

            const latUpperBound = 43.530000;
            const latLowerBound = 43.400000;

            const lngUpperBound = -80.480000;
            const lngLowerBound = -80.620000;

            if(latitute >= latLowerBound && latitute <= latUpperBound && longitude >= lngLowerBound && longitude <= lngUpperBound){
                let coordinates = {
                    lat: latitute,
                    lng: longitude
                }
                setLatLong(coordinates);
            } else {
                alert('Location not found, please enter a location in Waterloo and try again!');
            }
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return;
}

export default LocationResults;