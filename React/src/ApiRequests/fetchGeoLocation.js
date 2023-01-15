async function fetchGeoLocation({queryKey}){
    const location = queryKey[1];
    const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_API_KEY}`);

    if(!res.ok)
        throw new Error(`An error occured while fetching: ${location}`);
    
    return res.json();
}

export default fetchGeoLocation;
