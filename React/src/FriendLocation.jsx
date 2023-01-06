import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GetLocation from "./GetLocation";
import SearchMap from "./SearchMap";
import LatLongContext from "./Context/latLong";
import jsonQueryContext from "./Context/jsonQuery";
import NotFound from "./NotFound";

const FriendLocation = () => {

    const navigate = useNavigate();
    const [LatLong] = useContext(LatLongContext);
    const [JsonQuery, setJsonQuery] = useContext(jsonQueryContext);
    let jsonObject = {};

    if(JsonQuery==null){
        return (
        <div className="Error">
            <NotFound />
        </div>
        );
    }

    return (
        <div className="friend-location">
            <div>
                <h3>Where is your friend?</h3>
                <div id="location-search">
                    <GetLocation />
                </div>
                <div id="map">
                    <div id="panel">
                        <SearchMap />
                    </div>
                </div>
                <button className="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        {
                            LatLong ? (
                                jsonObject = {
                                    yourLat: JsonQuery['yourLat'],
                                    yourLng: JsonQuery['yourLng'],
                                    friendLat: LatLong['lat'],
                                    friendLng: LatLong['lng']
                                },
                                setJsonQuery(jsonObject),
                                navigate("/location-preferences")
                            ) : alert("Please Enter a location")
                        }
                    }}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default FriendLocation;