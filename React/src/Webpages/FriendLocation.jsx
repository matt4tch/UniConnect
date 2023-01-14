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
                <div id="map" className="flex justify-center p-10">
                    <div id="panel" className="w-3/4 border-2 place-self-center border-[#34453D]">
                        <SearchMap className="object-cover"/>
                    </div>
                    <div className="w-1/6 border-[#34453D] border-2 border-l-0 text-xl p-4 font-normal">
                        <ul>
                            <li className="border-b-2 text-center font-bold">Instructions</li>
                            <li className="border-b-2">Enter your friend's location in the search bar</li>
                            <li className="border-b-2">If their location is not found, make sure the location is in Waterloo</li>
                            <li className="border-b-2">If their location is not in Waterloo, make sure to add 'Waterloo' or 'University of Waterloo' at the end of the input</li>
                            <ul className="font-normal ">
                                <li className="border-b-2 text-center font-bold">Location examples:</li>
                                <li className="border-b-2">E7 Waterloo</li>
                                <li className="border-b-2">SLC University of Waterloo</li>
                                <li className="border-b-2">Hagey Hall Waterloo</li>
                                <li className="border-b-2">Needles Hall Waterloo</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center m-10 p-10 rounded-3xl">
                        <div id="location-search" className="mr-5">
                            <GetLocation />
                        </div>
                        <button className="text-white border-[#34453D] border-2 bg-[#3c4d45] rounded-xl p-3 cursor-pointer hover:shadow-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                {
                                    LatLong ? (
                                        jsonObject =  {
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

        
        </div>
    )
}

export default FriendLocation;