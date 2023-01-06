import { useState} from 'react'
import { useQuery } from "@tanstack/react-query";
import fetchGeoLocation from "./ApiRequests/fetchGeoLocation";
import LocationResults from './LocationResults';

const GetLocation = () => {
    const [requestParams, setRequestParams] = useState({
        location: ""
    }, []);

    const results = useQuery(["search", requestParams], fetchGeoLocation);
    const locationDetails = results?.data ?? [];

    const [submitState, setSubmitState] = useState(false);
    const details = {
        Coordinates: locationDetails,
        submitState: submitState
    }

    if (results.isLoading) {
        return (
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        );
      }

    return (
        <div className="default-location-search">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const location = formData.get("location");
                    setSubmitState(true);
                    setRequestParams(location);
                }}>
                <input id="location" name="location" placeholder="Location" />
                <button>Submit</button>
            </form>
            <LocationResults GetLocationInfo={details}/>
        </div>
    )
}

export default GetLocation;