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
                <div id="map" className="flex justify-center p-10">
                    <div id="panel" className="w-3/4 border-2 place-self-center border-[#34453D]">
                        <SearchMap className="object-cover"/>
                    </div>
                    <div className="w-1/6 border-[#34453D] border-2 border-l-0 text-xl p-4 font-normal">
                        <ul>
                            <li className="border-b-2 text-center font-bold">Instructions</li>
                            <li className="border-b-2">Enter your location in the search bar</li>
                            <li className="border-b-2">If your location is not found, make sure the location is in Waterloo</li>
                            <li className="border-b-2">If your location is not in Waterloo, make sure to add 'Waterloo' or 'University of Waterloo' at the end of the input</li>
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
                                        yourLocation = {
                                            yourLat:LatLong["lat"],
                                            yourLng:LatLong["lng"]
                                        },
                                        setJsonQuery(yourLocation),
                                        navigate("/friend-location")
                                    ) : alert("Please Enter a location")
                                }
                            }}>
                            Submit Location
                        </button>
                </div>
            </div>
        </div>
    )
}

export default YourLocation;