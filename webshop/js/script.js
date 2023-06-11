//# Oldalsáv elrejtése/megjelenítése
var i;
var sidebar = document.getElementById('sidebar');
var button = document.getElementById('sideButton');
var content = document.getElementById('content');

if(localStorage.getItem("sidebar") == null || i == 1 || localStorage.getItem("sidebar") == true) {
    sidebar.style.width = "300px";
    content.style.marginLeft = "320px";
    
    i = 0;
} else {
    sidebar.style.width = "21px";
    content.style.marginLeft = "41px";

    i = 1;


}

var degree = 0;
function sideHidden() {
    

    if(i == 0) {
        sidebar.style.width = "21px";
        content.style.marginLeft = "41px";

        i = 1
        localStorage.setItem("sidebar", false);
    } else {
        sidebar.style.width = "300px";
        content.style.marginLeft = "320px";

        i = 0;
        localStorage.setItem("sidebar", true);
    }
    degree += 180;
    button.style.transform = `rotate(${degree}deg)`;
}


var navbar = document.getElementById("navbar");
var sidebar = document.getElementById("sidebar");

window.addEventListener("scroll", function() {
  var navbarBottom = navbar.offsetTop + navbar.offsetHeight;
  var windowBottom = window.pageYOffset + window.innerHeight;
  var sidebarHeight = sidebar.offsetHeight;

  if (windowBottom > navbarBottom) {
    var maxSidebarTop = windowBottom - sidebarHeight;
    sidebar.style.top = Math.min(maxSidebarTop, navbarBottom) + "px";
  } else {
    sidebar.style.top = navbarBottom + "px";
  }
});