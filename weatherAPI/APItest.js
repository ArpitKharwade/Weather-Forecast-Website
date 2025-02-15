console.log('hello');
const API_KEY = "624528845bd001ce6c8a10d8f8bef14a";
async function showWeather(){
//    let latitude = 15.333;
//    let longtitude = 74.0833;
let city = "goa";

   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

   const data = await response.json();
   console.log("Weather data:->", data);

   let newpara = document.createElement('p');
   newpara.textContent = `${data?.main?.temp.toFixed(2)} °C`

   document.body.appendChild(newpara);

}


function getLocation(){
   if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
   }
   else{
      console.log("No geolocation Support");
   }
}

function showPosition(position){
   let lat = position.coords.latitude;
   let long = position.coords.longitude;

   console.log(lat);
   console.log(long);
}