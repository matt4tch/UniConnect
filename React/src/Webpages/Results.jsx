import { useState, useContext, useEffect, useMemo} from "react";
import { DirectionsRenderer, GoogleMap} from "@react-google-maps/api";
import jsonQueryContext from "../Context/jsonQuery";
import sendData from "../ApiRequests/sendData";
import StudySpotContext from "../Context/IdealStudySpot.js";
import calculateRoute from "../ApiRequests/fetchRoute";
import ErrorBoundary from "../Components/ErrorBoundary";

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
            <h2 className="loader text-4xl text-[#25312b] font-serif flex justify-center mb-8">LOADING...</h2>
          </div>
        );
    }
    return (
        <div className="Results">
            <h3 className="text-2xl text-black font-serif flex justify-center m-2 mt-10 uppercase tracking-[10px]">Your optimal study spot is</h3>
            <h1 className="text-4xl text-[#25312b] font-serif flex justify-center mb-8">{StudySpotResults['Results']['Study_Location']}</h1>
            <p className="flex justify-center">It will take you around { StudySpotResults['Results']['User_1_Time']} minutes to get there.</p>
            <p className="flex justify-center">It will take your friend around { StudySpotResults['Results']['User_2_Time']} minutes to get there.</p>
            <div className="flex justify-center"><GoogleMap
                center={center}
                zoom={15} 
                mapContainerClassName="panel"
                mapContainerStyle={{
                    
                    margin: "20px 0 0",
                    height: "60vh",
                    width: "80%"
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
                
            </GoogleMap> </div>
            <div className="your-directions">
                <h3 className="flex justify-center text-3xl font-serif m-4 text-[#25312b] uppercase">Your directions</h3>
                <div  id="your-panel"></div>
            </div>
            <div className="friend-directions">
                <h3 className="flex justify-center text-3xl font-serif m-4 text-[#25312b] uppercase">Friend Directions</h3>
                <div id="friend-panel"></div>
            </div>
        </div>
    )
}

export default function ResultsErrorBoundary(props){
    return (
        <ErrorBoundary>
            <Results {...props} />
        </ErrorBoundary>
    );
};