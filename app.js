let works =["java fullstack devloper","MERN stack developer","front end developer",];
let wBlk = document.getElementById("work");

setInterval(function(){
    let id = Math.floor(Math.random()*2);
    wBlk.innerText = works[id];
},3000)


// to update current year in footer*/
let yr = document.getElementById("yr");
yr.innerText = new Date().getFullYear();


// responsive menu toogle*/
let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")

menuBtn.addEventListener("click",function(event){
    menu.classList.toggle("active");
})