var weather;

//Data - API-key
var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bd265d92444e62242350e0f75dc1cacf', gotData;

function setup() {
  createCanvas(windowWidth,windowHeight);
  loadJSON(url, gotData);
}

function gotData(data){
	//println(data);
	weather = data;
}

function draw() {
	background(179, 217, 255);
	if (weather) {

//Data from Open Weather: weather - main - temp/humidity
 fill(0, 115, 230);
 ellipse(300, 200, weather.main.temp, weather.main.temp);
 ellipse(500, 200, weather.main.humidity, weather.main.humidity);


//Text for the tempature for London, UK
textSize(20);
text("Temperature: LONDON", 200, 40);
fill(0, 102, 153);
textStyle(ITALIC);

//Text for the humidity for London, UK
textSize(10);
text("Humidity: LONDON", 460, 150);
fill(0, 102, 153);
textStyle(ITALIC);




 }
}
