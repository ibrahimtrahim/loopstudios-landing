let menubtn = document.getElementById("menubtn");
let overlay = document.getElementById("overlay");
let menu = document.getElementById("menu");

overlay.style.opacity = "0";
overlay.style.visibility = "hidden";

menubtn.onclick = function(){
    if(overlay.style.opacity == "0"){
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        menu.src = "./app/images/icon-close.svg";
    }
    else {
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        menu.src = "./app/images/icon-hamburger.svg";
    }
}