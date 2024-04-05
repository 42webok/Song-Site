
window.onload = function(){
var spner = document.getElementById("spner");
var loader = document.getElementById("loader");
var sp = document.getElementById("sp");

setTimeout(() => {
   loader.style.display = "block";
   sp.style.display = "block";
   spner.style.display = "none";
}, 3000);
}



let bar = document.getElementById("bar");
let cross = document.getElementById("cross");
let menu = document.getElementById("menu");
bar.onclick = function () {
    cross.style.display = "block";
    bar.style.display = "none";
    menu.style.top = "44%";
}
cross.onclick = function () {
    cross.style.display = "none";
    bar.style.display = "block";
    menu.style.top = "-300%";
}
/* =====================Navbar Code Ended========================== */
