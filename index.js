const notifyIcon= document.querySelector(".notify-icon .notify");
const menu= document.querySelector(".menu");
const Body=document.querySelector("body");
const banner= document.querySelector(".banner")
const mode= document.querySelector(".notify-icon .fa-sun")
const notifyContent= document.querySelectorAll(".notify-content .notify-item")
console.log(mode)
notifyIcon.addEventListener("click",()=>{
  menu.classList.toggle("active");
})

mode.addEventListener("click",()=>{
  if (Body.classList.contains("light")) {
    Body.classList.replace("light","dark");
    menu.classList.replace("light","dark");
    banner.classList.replace("light","dark");
    mode.setAttribute("class","fa-regular fa-moon");
    
  } else {
    Body.classList.replace("dark","light");
    menu.classList.replace("dark","light");
    banner.classList.replace("dark","light");
    mode.setAttribute("class","fa-regular fa-sun")
  }

})
notifyContent.forEach((item)=>{
  item.addEventListener("click",()=>{
    item.style.background= "#d2eaf43c"
  })
})
