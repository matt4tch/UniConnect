import { useContext, useEffect} from "react";
import jsonQueryContext from "./jsonQuery";
import sendData from "./sendData";
import StudySpotContext from "./IdealStudySpot.js";

const Results = () => {
    const [JsonQuery] = useContext(jsonQueryContext);

    const SpotDetails = sendData(JsonQuery);
    console.log(SpotDetails);
    const [StudySpotResults, setStudySpotResult] = useContext(StudySpotContext);
    
    useEffect(() => {
        SpotDetails.then(function(parsedData){
            setStudySpotResult(parsedData);
        }, [SpotDetails]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (StudySpotResults == null || StudySpotResults.ok == null || StudySpotResults.ok == false) {
        return (
          <div className="loading-pane">
            <h2 className="loader">Loading...</h2>
          </div>
        );
    }

    console.log(StudySpotResults)

    return (
        <div className="Results">
            <p>Your Latitude: {StudySpotResults['Results'][0]['your_lat']}</p>
            <p>Your Longitutde: {StudySpotResults['Results'][1]['your_lng']}</p>
            <p>Your friend&apos;s Latitude: {StudySpotResults['Results'][2]['friend_lat']}</p>
            <p>Your friend&apos;s Longitude: {StudySpotResults['Results'][3]['friend_lng']}</p>
            <p>Congrats.</p>
        </div>
    )
}

export default Results;