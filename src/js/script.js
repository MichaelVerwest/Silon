var burger = "";
document.addEventListener("DOMContentLoaded", function() {
  burger = document.getElementById('burger')
  mobileWr = document.getElementById("mobile_wr")
  mobileBl = document.getElementById("mobile__nav_bl")
  mobileMenu = document.getElementById("mobile_navigation")
  burger.onclick = toggleBurger
});
function toggleBurger() {
  if(burger.classList.contains("active") || mobileBl.classList.contains("active") || mobileWr.classList.contains("active")
  || mobileMenu.classList.contains("active")


  ){
    mobileMenu.classList.remove("active");
    burger.classList.remove("active");
    mobileBl.classList.remove("active");
    mobileWr.classList.remove("active");
  }else{
    burger.classList += " active";
    mobileBl.classList += " active";
    mobileMenu.classList += " active";
    mobileWr.classList += " active";
  }
}