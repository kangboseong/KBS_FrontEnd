///////////////////////////////////////////////////// loading area
/////////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded",()=>{
  console.log("loading complete");  

  /******************************************************
   ******************************************************/
 let top = document.querySelector("#top");
 let menu = document.querySelector(".menu");
 /******************************************************
  ******************************************************/

  // menu click //
  menu.onclick =
  ()=>{
    // console.log("click click click");
    top.classList.toggle("on");
    
  }; // menu click //

});////////////////////////////////////////////////// loading area
//////////////////////////////////////////////////////////////////