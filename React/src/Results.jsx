import { useContext} from "react";
import jsonQueryContext from "./jsonQuery";
import sendData from "./sendData";

const Results = () => {
    const [JsonQuery] = useContext(jsonQueryContext);
    const studySpotDetails = sendData(JsonQuery);

    console.log(studySpotDetails);

    return (
        <div className="Results"> 
            <p>Your Latitude: {studySpotDetails['yourLat']}</p>
            <p>Your Longitutde: {studySpotDetails['yourLng']}</p>
            <p>Your friend&apos;s Latitude: {studySpotDetails['friendLat']}</p>
            <p>Your friend&apos;s Longitude: {studySpotDetails['friendLng']}</p>
            <p>Congrats.</p>
        </div>
    )
}

export default Results;