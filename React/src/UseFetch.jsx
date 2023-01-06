import { useState, useEffect } from 'react';
import fetchLocationDetails from './fetchLocationDetails';
import LocationPreferenceContext from './locationPreference';
import { useContext } from 'react';

const useFetch = () => {

    // eslint-disable-next-line no-unused-vars
    const [_, setLocationPreference] = useContext(LocationPreferenceContext);

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const results = fetchLocationDetails();

    console.log(results);
    useEffect(() => {
        results.then(function(parsedData){
            const length = parsedData['locations'].length;
            let storeParameters = new Array(length);
            storeParameters.fill("5");
            setLocationPreference(storeParameters);
            setData(parsedData);
            setIsPending(false);
            setError(null);
        }, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Second type of hook. Runs every time it rerenders. Can take a second array paramater which holds dependincies (criteria for which renders should cause this function to run) after the first which is the unnamed function.

    return { data, isPending, error }
}

export default useFetch;