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
                <input className="bg-[#7f8d87] p-2 placeholder:text-white rounded-xl mr-5 hover:border-4" onChange={e => setInputValue(e.target.value)}id="location" name="location" placeholder="Location" value={inputValue}/>
                <button className="text-white border-[#34453D] border-2 bg-[#3c4d45] rounded-xl p-3 cursor-pointer hover:shadow-lg">Place Marker</button>
            </form>
            <LocationResults GetLocationInfo={details}/>
        </div>
    )
}

export default GetLocation;