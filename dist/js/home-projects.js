/*
window.onload = function () {
  const heig = document.querySelector('.portfolio-link').offsetWidth
  document.querySelector('.portfolio-link').style.height = heig + 'px'
  window.onresize = function (event) {
    const heig = document.querySelector('.portfolio-link').offsetWidth
    document.querySelector('.portfolio-link').style.height = heig + 'px'
  }
}
const heig = document.querySelector('.portfolio-link').offsetWidth
document.querySelector('.portfolio-link').style.height = heig + 'px'
window.onresize = function (event) {
  const heig = document.querySelector('.portfolio-link').offsetWidth
  document.querySelector('.portfolio-link').style.height = heig + 'px'
}
*/
/*
document.addEventListener('DOMContentLoaded', function () {
  const heig = document.querySelector('.portfolio-link').offsetWidth
  document.querySelector('.portfolio-link').style.height = heig + 'px'
}, false)
*/

window.onload = function() {
  var hhpe = document.querySelector(".portfolio-link").offsetWidth;
  var hpeheight;
  hpeheight = document.querySelectorAll(".portfolio-link");
  for (i = 0; i < hpeheight.length; i++) {
    hpeheight[i].style.height = hhpe + "px";
  };
  window.onresize = function(event) {
    var hhpe = document.querySelector(".portfolio-link").offsetWidth;
    hpeheight = document.querySelectorAll(".portfolio-link");
    for (i = 0; i < hpeheight.length; i++) {
      hpeheight[i].style.height = hhpe + "px";
    }
  }
}

var hhpe = document.querySelector(".portfolio-link").offsetWidth;
var hpeheight;
hpeheight = document.querySelectorAll(".portfolio-link");
for (i = 0; i < hpeheight.length; i++) {
  hpeheight[i].style.height = hhpe + "px";
};
window.onresize = function(event) {
  var hhpe = document.querySelector(".portfolio-link").offsetWidth;
  hpeheight = document.querySelectorAll(".portfolio-link");
  for (i = 0; i < hpeheight.length; i++) {
    hpeheight[i].style.height = hhpe + "px";
  }
}
