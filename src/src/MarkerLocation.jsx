import { useState /*, useEffect, useRef*/ } from 'react'
import { useQuery } from "@tanstack/react-query";
import {  } from '@ubilabs/google-maps-react-hooks'
//import { Marker } from '@react-google-maps/api';
import fetchGeoLocation from "./fetchGeoLocation";

const MarkerLocation = () => {
    //const [location, setLocation] = useState("200 University Ave W, Waterloo");
    const [requestParams, setRequestParams] = useState({
        location: ""
    });

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
                    const lat = locationDetails['results'][0]['geometry']['location']['lat'];
                    const lon = locationDetails['results'][0]['geometry']['location']['lng'];

                    console.log(lat + " " + lon);
                }}>
                <input id="location" name="location" placeholder="Location" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default MarkerLocation;