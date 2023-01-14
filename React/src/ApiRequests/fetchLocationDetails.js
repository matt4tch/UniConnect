async function fetchLocationDetails(){
    const message = "key";
    const res = await fetch(`https://PersonalProject.richardsha1.repl.co/location_info/`,{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(message)
    });
    const processedResponse = await res.json();
    if(!processedResponse.ok)
        throw new Error(`An error occured while fetching ${JSON.stringify(message)}.`)

    return processedResponse;
}

export default fetchLocationDetails;