const server_URL = "https://dd84-99-228-112-134.ngrok.io/";

console.log("Hit");
async function getUserInfo() {
    const promise = await fetch(server_URL);
    const processedReponse = await promise.json();
    console.log("Reached");

    alert(processedReponse);
}


document.querySelector('.Determine_Results').addEventListener("click", getUserInfo);