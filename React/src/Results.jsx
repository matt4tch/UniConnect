import { useState, useContext, useEffect, useMemo} from "react";
import { DirectionsRenderer, GoogleMap} from "@react-google-maps/api";
import jsonQueryContext from "./Context/jsonQuery";
import sendData from "./ApiRequests/sendData";
import StudySpotContext from "./Context/IdealStudySpot.js";
//import NotFound from "./NotFound";
import calculateRoute from "./ApiRequests/fetchRoute";

const Results = () => {
    const [JsonQuery] = useContext(jsonQueryContext);

    const SpotDetails = sendData(JsonQuery);
    const [StudySpotResults, setStudySpotResult] = useContext(StudySpotContext);
    
    const center = useMemo(() => ({
        lat: 43.4723, lng: -80.5449 //University of Waterloo
    }), []);

    const [yourDirection, setYourDirection] = useState();
    const [friendDirection, setFriendDirection] = useState();
    
    useEffect(() => {
        SpotDetails.then(function(parsedData){
            setStudySpotResult(parsedData);
        }, [SpotDetails]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const yourCoordinates = {
        lat: JsonQuery['yourLat'],
        lng: JsonQuery['yourLng']
    }

    const friendCoordinates = {
        lat: JsonQuery['friendLat'],
        lng: JsonQuery['friendLng']
    }

    const YourResult = StudySpotResults ? calculateRoute(yourCoordinates, StudySpotResults['Results']['Study_Location']) : null;
    const FriendResult = StudySpotResults ? calculateRoute(friendCoordinates, StudySpotResults['Results']['Study_Location']): null;

    useEffect(() => {
        YourResult ? YourResult.then((parsedData) =>{
            setYourDirection(parsedData);
        }): null;
        FriendResult ? FriendResult.then((parsedData) =>{
            setFriendDirection(parsedData);
        }) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [StudySpotResults]);

    if (StudySpotResults == null || StudySpotResults.ok == null || !StudySpotResults.ok || FriendResult == null) {
        return (
          <div className="loading-pane">
            <h2 className="loader">Loading...</h2>
          </div>
        );
    }
    return (
        <div className="Results">
            <h3>The optimal study spot is: {StudySpotResults['Results']['Study_Location']}</h3>
            <p>It will take you around { StudySpotResults['Results']['User_1_Time']} minutes to get there.</p>
            <p>It will take your friend around { StudySpotResults['Results']['User_2_Time']} minutes to get there.</p>
            <GoogleMap
                center={center}
                zoom={15} 
                mapContainerClassName="panel"
                mapContainerStyle={{
                    margin: "20px 0 0",
                    height: "60vh",
                    width: "100%"
                }} //Setting the size of the Map
                > 
                {friendDirection != null &&
                    <div className="directions">
                        <DirectionsRenderer directions={friendDirection} 
                        panel={ document.getElementById('friend-panel') }/>
                        <DirectionsRenderer directions={yourDirection} 
                        panel={ document.getElementById('your-panel') }/>
                    </div>
                }
                
            </GoogleMap>
            <div className="your-directions">
                <h3>Your directions:</h3>
                <div id="your-panel"></div>
            </div>
            <div className="friend-directions">
                <h3>Directions for your friend:</h3>
                <div id="friend-panel"></div>
            </div>
        </div>
    )
}

export default Results;