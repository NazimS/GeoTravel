
// navbar fixed, scroll top begin
window.onscroll = function (){myFunction()} 

const topnav = document.querySelector(".nav-menu");
let sticky = topnav.offsetTop;

function myFunction() {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

      topnav.classList.add("sticky");
      document.querySelector(".connect-chevron").style.display = "block";

  } else {

      topnav.classList.remove("sticky");
      document.querySelector(".connect-chevron").style.display = "none";
      
  }

}



// navbar fixed, scroll top end