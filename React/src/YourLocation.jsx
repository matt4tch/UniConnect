import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GetLocation from "./GetLocation";
import SearchMap from "./SearchMap";
import LatLongContext from "./latLong";
import jsonQueryContext from "./jsonQuery";

const YourLocation = () =>{
    const navigate = useNavigate();
    const [LatLong] = useContext(LatLongContext);
    // eslint-disable-next-line no-unused-vars
    const [_, setJsonQuery] = useContext(jsonQueryContext);
    let yourLocation = {};

    return (
        <div className="your-location">
            <header>
                <h1>UniConnect</h1>
            </header>
            <div>
                <h3>Where are you?</h3>
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
                        {
                            LatLong ? (
                                yourLocation = {
                                    yourLat:LatLong["lat"],
                                    yourLng:LatLong["lng"]
                                },
                                setJsonQuery(yourLocation),
                                navigate("/friend-location")
                            ) : alert("Please Enter a location")
                        }
                    }}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default YourLocation;