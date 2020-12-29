var randomNunber1 = Math.floor(Math.random() * 6) + 1;

var imageSource1 = "images/dice" + randomNunber1 + ".png";

var tagSelect1 = document.querySelectorAll("img")[0];

tagSelect1.setAttribute("src",imageSource1);

var randomNunber2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice" + randomNunber2 + ".png";

var tagSelect2 = document.querySelectorAll("img")[1];

tagSelect2.setAttribute("src",imageSource2);

if(randomNunber1 > randomNunber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Win!";
}else if(randomNunber1 < randomNunber2){
    document.querySelector("h1").innerHTML = "Play 2 Win! 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draws";
}