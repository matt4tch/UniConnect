import { useContext, useEffect } from "react";
import LatLongContext from "./latLong";

const LocationResults = ({ Coordinates }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, setLatLong] = useContext(LatLongContext);

    useEffect(() => {
        if (Coordinates.status === "ZERO_RESULTS") {
            alert('Location not found, please try again!');
        } else {
            let coordinates = {
                lat: Coordinates['results'][0]['geometry']['location']['lat'],
                lng: Coordinates['results'][0]['geometry']['location']['lng']
            }
            setLatLong(coordinates);
        }
    }, []);

    return;
}

export default LocationResults;