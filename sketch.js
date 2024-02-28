let weather_data = null;
let tempratur = 0
let cloudy = 0;
function setup() {
  createCanvas(400, 400);
  background(255);

  async function getweather() {
    const api_url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=1ec7f6367cac2a7f1ca1c0472fc97bbf'
    const response = await fetch(api_url);
    weather_data = await response.json();
    tempratur = weather_data.main.temp
    cloudy = weather_data.clouds.all/100
    console.log(weather_data.main);
    fill(0,0,0)
    text(`temp${tempratur}`, 10, 10)
    text(`gust${weather_data.wind.gust}`, 10, 20)
    text(`speed${weather_data.wind.speed}`, 10, 30)
    text(`clouds${cloudy}`, 10, 40)
  }

  getweather();
}



function draw() {
  fill(0, 0, 0)
  line(0, 0, 400, 0);
  line(0, 400, 400, 400);
  line(0, 0, 0, 400);
  line(400, 0, 400, 400);
  const temprogress = tempratur / 21
  fill(255 * temprogress, 255 - 255 * temprogress, 255 - 255 * temprogress)

  circle(80, 10, 20, 20)
  {
    fill(255,255,0)
    circle(100, 10, 20, 20)
  
  
  }
  {
    
    fill(125,125,125,cloudy*255)
    circle(100, 10, 20, 20)
  
  
  }


}