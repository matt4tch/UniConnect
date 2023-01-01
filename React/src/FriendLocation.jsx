import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GetLocation from "./GetLocation";
import SearchMap from "./SearchMap";
import LatLongContext from "./latLong";
import jsonQueryContext from "./jsonQuery";

const FriendLocation = () => {

    const navigate = useNavigate();
    const [LatLong] = useContext(LatLongContext);
    const [JsonQuery, setJsonQuery] = useContext(jsonQueryContext);
    let jsonObject = {};
    console.log(JsonQuery);

    return (
        <div className="friend-location">
            <header>
                <h1>UniConnect</h1>
            </header>
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
                <button
                    onClick={() => {
                        //navigate("/friend-location");
                        console.log(LatLong);
                        {
                            LatLong ? (
                                jsonObject = {
                                    yourLat: JsonQuery['yourLat'],
                                    yourLng: JsonQuery['yourLng'],
                                    friendLat: LatLong['lat'],
                                    friendLng: LatLong['lng']
                                },
                                setJsonQuery(jsonObject),
                                navigate("/preferences")
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