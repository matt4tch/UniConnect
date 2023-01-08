import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GetLocation from "../Components/GetLocation";
import SearchMap from "../Components/SearchMap";
import LatLongContext from "../Context/latLong";
import jsonQueryContext from "../Context/jsonQuery";
import NotFound from "./NotFound";

const FriendLocation = () => {

    const navigate = useNavigate();
    const [LatLong, setLatLong] = useContext(LatLongContext);
    const [JsonQuery, setJsonQuery] = useContext(jsonQueryContext);
    let jsonObject = {};

    useEffect(() => {
        setLatLong(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                <button className="text-white bg-yellow-500 border-0 rounded-xl p-3 cursor-pointer hover:shadow-lg"
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