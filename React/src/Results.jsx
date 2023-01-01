import { useContext } from "react";
import jsonQueryContext from "./jsonQuery";

const Results = () => {
    const [JsonQuery] = useContext(jsonQueryContext);

    return (
        <div className="Results"> 
            <p>Your Latitude: {JsonQuery['yourLat']}</p>
            <p>Your Longitutde: {JsonQuery['yourLng']}</p>
            <p>Your friend&apos;s Latitude: {JsonQuery['friendLat']}</p>
            <p>Your friend&apos;s Longitude: {JsonQuery['friendLng']}</p>
            <p>Congrats.</p>
        </div>
    )
}

export default Results;