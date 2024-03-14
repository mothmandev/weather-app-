//# det her giver vores api værdi 0 
let weather_data = 0;
let temperatur = 0
let cloudy = 0
let windspeed = 0 
 //# det her laver knaperne til lat, lon og opdater
const lathtml = document.getElementById("lat1")
const lonhtml = document.getElementById("lon1")
const updatebutton = document.getElementById("update")
updatebutton.addEventListener("click",() => {
  setup()
})

 //# det her difinere baggrund 
function setup() {
  createCanvas(400, 400);
  background(255);
 //# det her inportere data/api
  async function getweather() {
    const loni = lonhtml.value
    const lati = lathtml.value
    const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${loni}&units=metric&appid=1ec7f6367cac2a7f1ca1c0472fc97bbf`
    const response = await fetch(api_url);
    weather_data = await response.json();
     //# her difinere jeg variable .
    temperatur = weather_data.main.temp
    cloudy = weather_data.clouds.all
    windspeed = weather_data.wind.speed
    gust = weather_data.wind.gust
    console.log(weather_data.main);
  
    fill(0,0,0)

    text(`gust${gust}`, 10, 20)
  

  }

  getweather();
}

 //# her er baggrund som skifter farve i forhold til tempraturen 

function draw() {
  

  const temprogress = temperatur / 31
  fill(255 * temprogress, 255 - 140 * temprogress, 255 - 255 * temprogress)

  rect(0, 0, 400, 400)
  {
    //# det her skal forstille og være solen som bare er en gul cirkle 
    fill(255,255,0)
    circle(200, 200, 100, 20)
  
  }
   

  {
     //# det her skal forstille og være en sky forand solen hvor dens opacity går efter hvor skyet der er
    fill(125,125,125,cloudy/100*255)
    circle(200, 200, 100, 20)
 
  
  }
 //# det her ploter data fra api ind i en tekst fond 
  {
    fill(300,300,300)
    textSize(50)
    text(`${temperatur} C°`, 130, 110)
    textSize(20)
    text(`skyet ${cloudy}%`, 140, 270)
    text(`${windspeed} m/s`, 140, 300)
  }
  
  
}