import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LocationPreferenceContext from "./Context/locationPreference";
import jsonQueryContext from "./Context/jsonQuery";

const LocationList = (props) => {
    const navigate = useNavigate();

    const locs = props['locs']['locations'];
    const [rating, setRating] = useContext(LocationPreferenceContext);
    const [JsonQuery, setJsonQuery] = useContext(jsonQueryContext);

    const [stateUpdate, setStateUpdate] = useState(0);

    if(rating.length < 2){
        return (
            <div className="loading-pane">
                <h3>Loading...</h3>
            </div>
        )
    }
    
    return ( 
        <div className="location-list">
            <h1>{props.title}</h1>
            {locs.map((loc) => (
                <div className="location" key={loc.id}>
                    <div className="text">
                        <h1>{ loc.title }</h1>
                        <p>{ loc.body }</p>  
                        <h2>Current rating: { rating[loc.id - 1] }</h2>
                        <div className="preference-rating">
                            <form>
                                <div className="location-input">
                                    <select 
                                        value={ rating[loc.id - 1] } 
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                            let storeParameters = rating;
                                            storeParameters[loc.id - 1] = e.target.value;
                                            console.log(storeParameters)
                                            setStateUpdate(stateUpdate + 1);
                                            setRating(storeParameters)}}>
                                        Location rating:
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <button 
                                    className="location-update"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        console.log(e.target.value);
                                    }}> Update { loc.title } Rating
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                ))}
            <button 
                className="final-submit"
                onClick={(e) => {
                    e.preventDefault();
                    {
                        let jsonObject = {
                            yourLat: JsonQuery['yourLat'],
                            yourLng: JsonQuery['yourLng'],
                            friendLat: JsonQuery['friendLat'],
                            friendLng: JsonQuery['friendLng'],
                            preferences: rating
                        }
                        setJsonQuery(jsonObject),
                        navigate("/results")
                    }
                }}>
                Submit
            </button>
        </div>
    );
};
 
export default LocationList;