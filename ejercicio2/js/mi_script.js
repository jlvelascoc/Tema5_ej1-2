"use strict";

function showDropdown(event) {
  var li = event.target;
  var ul = li.getElementsByTagName("ul")[0];
  var height;
  var heightTemp = 0;

  ul.style.display = "inline-block";
  height = ul.offsetHeight;
  ul.style.height = "0px";
  heightTemp = 0;

  var stop = setInterval(frame, 10);

  function frame() {

    if (heightTemp >= height) {
      clearInterval(stop);
    }
    else {
      heightTemp += 5;
      ul.style.height = heightTemp + "px";
    }
  }
}

function hideDropdown(event) {
  var li = event.target;
  var ul = li.getElementsByTagName("ul")[0];
  var heightTemp;

  heightTemp = ul.offsetHeight;

  var stop = setInterval(frame, 10);

  function frame() {

    if (heightTemp <= 0) {
      clearInterval(stop);
      ul.style.height = "inherit";
    }
    else {
      heightTemp -=5;
      ul.style.height = heightTemp + "px";
    }
  }
}
