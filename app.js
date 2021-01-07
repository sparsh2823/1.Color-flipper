const colorSeries=["RED","BLUE","GREEN","BLACK","YELLOW","PINK"]

var btn= document.querySelector(".btn")
var colorSelect= document.querySelector(".color")


function changeColor(){
    var randomNo=getRandomNo();
    document.body.style.backgroundColor=colorSeries[randomNo];
    colorSelect.innerText=colorSeries[randomNo];
}

function getRandomNo(){
    return Math.floor(Math.random() * colorSeries.length)
}



btn.addEventListener("click",changeColor)