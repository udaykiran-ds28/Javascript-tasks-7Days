
async function weather(){
    let cityInput=document.getElementById("cityInput")
    let output=document.getElementById("output")
    const city = cityInput.value.trim().toLowerCase();
    try {
    console.log("Fetching dummy weather API...");
    const data = await fetch("./weather.json")
    if(!data.ok){
        throw new Error("Failed to fetch weather data");;
    }
    const response = await data.json();
    const cityData = response?.[city];
    console.log(cityData)
    if (!cityData) {
        throw new Error("City not available");
    }
    const humidity = cityData?.main?.humidity;
    const condition = cityData?.weather?.[0]?.description;
    const temp=cityData?.main?.temp;
    output.innerHTML = `<h3>${cityData.city}</h3>
    <p>temperature:${temp}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Condition: ${condition}</p>
    `;

}catch (error) {
    console.error("Error:", error.message);
    output.innerHTML = `<p style="color:red">${error.message}</p>`;
  }
};
