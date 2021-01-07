const hex=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

var btn=document.querySelector(".btn");
var colorChange=document.querySelector(".color");

function changeColor(){
    var hexColor="#";
    for(var i =0;i<6;i++){

        hexColor+=hex[getRandomNo()]

    }
    colorChange.innerText=hexColor;
    document.body.style.backgroundColor=hexColor;
    
}

function getRandomNo(){
    return Math.floor(Math.random() * hex.length)
}


btn.addEventListener("click",changeColor)