async function sendData(dataToSend){
    const message = dataToSend;
    const res = await fetch(`https://6e51-99-228-112-134.ngrok.io/location/`, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(message)
    });
    const processedResponse = await res.json();
    if(!processedResponse.ok)
        throw new Error(`An error occured while fetching ${JSON.stringify(dataToSend)}.`)

    return processedResponse;
}

export default sendData;