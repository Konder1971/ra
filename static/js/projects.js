window.onload = function() {
  var hhpe = document.querySelector(".pepic").offsetWidth;
  var hpeheight;
  hpeheight = document.querySelectorAll(".pepic");
  for (i = 0; i < hpeheight.length; i++) {
    hpeheight[i].style.height = hhpe + "px";
  };
  window.onresize = function(event) {
    var hhpe = document.querySelector(".pepic").offsetWidth;
    hpeheight = document.querySelectorAll(".pepic");
    for (i = 0; i < hpeheight.length; i++) {
      hpeheight[i].style.height = hhpe + "px";
    }
  }
}

var hhpe = document.querySelector(".pepic").offsetWidth;
var hpeheight;
hpeheight = document.querySelectorAll(".pepic");
for (i = 0; i < hpeheight.length; i++) {
  hpeheight[i].style.height = hhpe + "px";
};
window.onresize = function(event) {
  var hhpe = document.querySelector(".pepic").offsetWidth;
  hpeheight = document.querySelectorAll(".pepic");
  for (i = 0; i < hpeheight.length; i++) {
    hpeheight[i].style.height = hhpe + "px";
  }
}
