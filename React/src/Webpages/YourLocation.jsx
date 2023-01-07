import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GetLocation from "../Components/GetLocation";
import SearchMap from "../Components/SearchMap";
import LatLongContext from "../Context/latLong";
import jsonQueryContext from "../Context/jsonQuery";

const YourLocation = () =>{
    const navigate = useNavigate();
    const [LatLong, setLatLong] = useContext(LatLongContext);
    // eslint-disable-next-line no-unused-vars
    const [_, setJsonQuery] = useContext(jsonQueryContext);
    let yourLocation = {};

    useEffect(() => {
        setLatLong(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="your-location">
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
                <button className="your-submit"
                    onClick={(e) => {
                        e.preventDefault();
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