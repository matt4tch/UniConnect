import { useContext, useState} from 'react'
import { useQuery } from "@tanstack/react-query";
import fetchGeoLocation from "./fetchGeoLocation";
import LatLongContext from './latLong';

const GetLocation = () => {
    const [requestParams, setRequestParams] = useState({
        location: ""
    });

    // eslint-disable-next-line no-unused-vars
    const [_, setLatLong] = useContext(LatLongContext);
    const results = useQuery(["search", requestParams], fetchGeoLocation);
    const locationDetails = results?.data ?? [];

    return (
        <div className="default-location-search">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const location = formData.get("location");
                    setRequestParams(location);

                    if (locationDetails.status === "ZERO_RESULTS") {
                        alert('Location not found, please try again!');
                    } else {
                        let coordinates = {
                            lat: locationDetails['results'][0]['geometry']['location']['lat'],
                            lng: locationDetails['results'][0]['geometry']['location']['lng']
                        }
                        setLatLong(coordinates);
                    }
                }}>
                <input id="location" name="location" placeholder="Location" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default GetLocation;