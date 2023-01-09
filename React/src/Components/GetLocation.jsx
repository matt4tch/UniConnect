import { useState} from 'react'
import { useQuery } from "@tanstack/react-query";
import fetchGeoLocation from "../ApiRequests/fetchGeoLocation";
import LocationResults from './LocationResults';

const GetLocation = () => {
    const [requestParams, setRequestParams] = useState({
        location: ""
    }, []);

    const results = useQuery(["search", requestParams], fetchGeoLocation);
    const locationDetails = results?.data ?? [];
    const [inputValue, setInputValue] = useState("");

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

                    if(location == ""){
                        alert('Location not found, please try again!');
                    } else {
                        setSubmitState(true);
                        setInputValue(location);
                        setRequestParams(location);
                    }
                }}>
                <input onChange={e => setInputValue(e.target.value)}id="location" name="location" placeholder="Location" value={inputValue}/>
                <button className="text-white bg-yellow-500 border-0 rounded-xl p-3 cursor-pointer hover:shadow-lg">Submit</button>
            </form>
            <LocationResults GetLocationInfo={details}/>
        </div>
    )
}

export default GetLocation;