//****************************IMAGE-SLIDER***********************************/
let img__slider = document.getElementsByClassName('img__slider');

let etape = 0;

let nbr__img = img__slider.length;
 
let back = document.querySelector('.back')

let next = document.querySelector('.next')

function enleverActiveImages() {
  for(i = 0; i < img__slider.length; i++) {
    img__slider[i].classList.remove('active');
  }
}

next.addEventListener('click', function(){
  etape++;
  if(etape >= nbr__img){
    etape = 0;
  }
  enleverActiveImages();
  img__slider[etape].classList.add('active');
})

back.addEventListener('click', function() {
  etape--;
  if(etape < 0) {
    etape = nbr__img - 1;
  }
  enleverActiveImages();
  img__slider[etape].classList.add('active');
})

setInterval(function() {
  etape++;
  if(etape >= nbr__img){
    etape = 0;
  }
  enleverActiveImages();
  img__slider[etape].classList.add('active');
}, 3000)





var menu=document.getElementById("clickmenu")
menu.addEventListener('click', openMenu)
function openMenu(){
    var mn=document.querySelector(".menu");
    mn.style.display="flex";
}
var closem=document.getElementById("close")
closem.addEventListener('click', closemenu)
function closemenu(){
    var clmn=document.querySelector(".menu");
    clmn.style.display="none";
}

var weather=document.getElementById("demo")
window.addEventListener('load', getLocation) 
var lat
var long 
var apikey="7367c21b2e79189ed810c7beacb81be2"


function showPosition(position) {
lat =  position.coords.latitude; 
long = position.coords.longitude;


//lat=55.751244
//long=37.18423  
//APi---------------------------------------------------------------------------------
   var url="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid="+apikey
   fetch(url).then(r => (r.json())).then(y => traitement(y) )




}
function traitement(jawab){
var temp=jawab.main.temp-273.15+"";
temp=temp.split(".")[0]

document.querySelector(".méteohaut").innerHTML=temp+" °C"

document.querySelector("#weather h2").innerHTML=temp+" °C"

var city = jawab.name;
document.querySelector("#city h3").innerHTML=city

var humidité = jawab.main.humidity
document.getElementById("hmdt").innerHTML= "Humidité : "+humidité+" %"

var vent = jawab.wind.speed

document.getElementById("vent").innerHTML= "Vent : " + vent* 3 + " Km/h"

var sky = jawab.weather[0].description



var wheatherImage = document.getElementById("wheatherImage")
wheatherImage.setAttribute("src",'C:/Users/ZBook/Desktop/Projet%20EL%20MAHDI/img/weather/'+sky+'.svg')






}

//

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
   
  }

}
//******************************DATE & HOUR*****************************/
var d = new Date();
var hour = d.getHours();

d=d.toString().split("G")[0]
document.getElementById("date").innerHTML = d;



//****************************NEWS***********************************/

/**
const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '9a1815f087msh5f3b1ce61eff7c0p1b3d7bjsne13a53930b1e',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};


//after translate  



fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
	.then(response => response.json())
	.then(r => getNews(r))



  


function getNews(news){

var val=news.value

for(i=0; i<val.length-1; i++ ){
  var date=val[i].datePublished
  date=date.split("T")[0]
  
  var description= val[i].description
  var image
  if(val[i].image!=undefined)
    {
      image= val[i].image.thumbnail.contentUrl
       
    }

    var div='<div id="contentNews"><div class="newArticle"><img class="imgDiv" src="'+image+'"><p class="dateNews">'+date+'</p><p class="descrNews">'+description+'</p></div><br></div>'
    document.querySelector("#center").innerHTML+=div

  }
 console.log()
 
}

*/
/********************************************CORONA**********************************************************/

const corona = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a1815f087msh5f3b1ce61eff7c0p1b3d7bjsne13a53930b1e',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/statistics', corona)
	.then(response => response.json())
	.then(c => infoCorona(c))

 
function infoCorona(statistics){
var res = statistics.response
 for(i=0; i<res.length-120; i++){

    var country = res[i].country
    var cas = res[i].cases.new
    var recovered = res[i].cases.recovered
    var deaths = res[i].deaths.new
    if(deaths == null){
      deaths = "0"
    }
    if(cas == null){
      continue
    }
    var divcovid = '<div id="left"><h4 id="country">'+country+'</h4><p id="newCases">Cas confirmés: '+cas+'</p><p id="newDeaths">Décédés: '+deaths+'</p><p id="recovered">Guéris: '+recovered+'</p></div><br></br>'

    document.querySelector("#coronaVirus").innerHTML+=divcovid

   
  } 
  
}

const wide = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a1815f087msh5f3b1ce61eff7c0p1b3d7bjsne13a53930b1e',
		'X-RapidAPI-Host': 'weather-request.p.rapidapi.com'
	}
};

fetch('https://weather-request.p.rapidapi.com/weather', wide)
	.then(response => response.json())
	.then(w => météopay(w))
	
function météopay(info){
 
 var result = info
  for(i=0; i<result.length-377; i++){

  var pays = result[i].name
  var temper = result[i].temperature
  var weather = result[i].weather
  var divwea = '<div id="allMétéo" ><div class="weath" ><h3>'+pays+'</h3><p>Temperature: '+temper+'</p><p>weather: '+weather+'</p></div><br>'
   document.querySelector("#allMétéo").innerHTML += divwea

  } 

  
}
 


const akhbar = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a1815f087msh5f3b1ce61eff7c0p1b3d7bjsne13a53930b1e',
		'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
	}
};

fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null', akhbar)
	.then(response => response.json())
	.then(information => getInform(information))


function getInform(content) {

  var contentIn = content.value

for( i=0; i<contentIn.length; i++) {
    
    var date = contentIn[i].datePublished;
    var image = contentIn[i].image.url;
    var title = contentIn[i].title;
    var description = contentIn[i].description;
    var divCon = '<div id="inform"><h3>'+title+'</h3><img src="'+image+'" alt=""><p>'+description+'</p><p>'+date+'</p></div><br>'

    document.getElementById("inform").innerHTML += divCon

}
}
	

var btnAthan = document.getElementById("athan");
var nbrDeClicsAdan=0

btnAthan.addEventListener('click', openList) 
function openList() {
  nbrDeClicsAdan++;

var horairePriére = document.getElementById("iframe")
  if(nbrDeClicsAdan%2==0)
  {
    horairePriére.style.display = "none";
  }else
  {
    horairePriére.style.display = "flex";
  }
  
 
}