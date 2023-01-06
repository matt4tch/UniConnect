import { useContext /*,useEffect*/ } from "react";
import StudySpotContext from "./Context/IdealStudySpot";
import sendData from "./ApiRequests/sendData";

const StudySpotResult = ({ requestParams }) =>{
    // eslint-disable-next-line no-unused-vars
    const [_, SetStudySpot] = useContext(StudySpotContext);

    console.log(requestParams);

    if(requestParams['friend_lat'] == null){
        return;
    } else {
        const returnData = sendData(requestParams);
        returnData.then(function(parsedData){
            SetStudySpot(parsedData);
        });
    }
    

    return;
}

export default StudySpotResult;