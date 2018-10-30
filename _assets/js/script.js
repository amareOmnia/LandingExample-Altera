var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = document.getElementById("slide").offsetWidth;
  var slideList = document.getElementById("slideWrap");

  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  // marker variables
  var marker1 = document.getElementById("marker1");
  var marker2 = document.getElementById("marker2");
  var marker3 = document.getElementById("marker3");
  marker2.style.opacity = ".4";
  marker3.style.opacity = ".4";
  var currentMarker = 1;


  window.addEventListener('resize', function() {
    var pageWidth = window.innerWidth
    sliderWidth = document.getElementById("slide").offsetWidth;
    // console.log("Window: " + window.innerWidth + "pixels");
    if (pageWidth < 1366) {
      lowerMarkers(1366 - pageWidth);
    }
    resize(sliderWidth);
  });

  var resize = function(width) {
    // takes command and adjusts all slide widths
    slideList.style.width = width;
    // resets to first slide, to avoid poor margins before next button is clicked
    slideList.style.left = "0px";
    count = 1;
    //resets marker selection
    marker1.style.opacity = "1";
    marker2.style.opacity = ".4";
    marker3.style.opacity = ".4";
    currentMarker = 1;
  }

  var lowerMarkers = function(difference) {
    console.log("markers adjusting...");
    marker1.style.marginTop = 450 + difference * .05 + "px";
    marker2.style.marginTop = 450 + difference * .05 + "px";
    marker3.style.marginTop = 450 + difference * .05 + "px";
    if (window.innerWidth >= 1366) {
      resetMarkers();
    }
  }

  var resetMarkers = function() {
    marker1.style.marginTop = "450px";
    marker2.style.marginTop = "450px";
    marker3.style.marginTop = "450px";
  }

  var nextMarker = function() {
    if (currentMarker > 1) {
      if (currentMarker > 2) {
        marker3.style.opacity = ".4";
        marker1.style.opacity = "1";
        currentMarker = 1;
        return;
      }
      marker2.style.opacity = ".4";
      marker3.style.opacity = "1";
      currentMarker = 3;
      return;
    }
    marker1.style.opacity = ".4";
    marker2.style.opacity = "1";
    currentMarker = 2;
  }

  var prevMarker = function() {
    if (currentMarker > 1) {
      if (currentMarker > 2) {
        marker3.style.opacity = ".4";
        marker2.style.opacity = "1";
        currentMarker = 2;
        return;
      }
      marker2.style.opacity = ".4";
      marker1.style.opacity = "1";
      currentMarker = 1;
      return;
    }
    marker1.style.opacity = ".4";
    marker3.style.opacity = "1";
    currentMarker = 3;
  }

  var prevSlide = function() {
    if (count > 1) {
      prevMarker();
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if (count = 1) {
      prevMarker();
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  var nextSlide = function() {
    if (count < items) {
      nextMarker();
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    } else if (count = items) {
      nextMarker();
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });

};

window.onload = function() {
  responsiveSlider();
}
