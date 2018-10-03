const responsiveSlider = function () {
  const slider = document.getElementById('slider');
  let sliderWidth = document.getElementById('slide').offsetWidth;
  const slideList = document.getElementById('slideWrap');

  let count = 1;
  const items = slideList.querySelectorAll('li').length;
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let currentMarker = 1;
  const marker = [];
  let markerExists = true;

  // defines markers until no more exist
  for (i = 1; markerExists; ++i) {
    console.log(`marker${i} check`);
    marker[i] = document.getElementById(`marker${i}`);
    if (marker[i] == null) {
      var slideTotal = i - 1;
      markerExists = false;
      console.log(`no more markers.. total= ${slideTotal}`);
    }
  }
  markerInit();


  function markerInit() {
    for (i = slideTotal; i > 0; --i) {
      if (i > 1) {
        marker[i].style.opacity = '.4';
        continue;
      }
      marker[1].style.opacity = '1';
    }
    currentMarker = 1;
    console.log('markers initialized');
  }

  window.addEventListener('resize', () => {
    const pageWidth = window.innerWidth;
    sliderWidth = document.getElementById('slide').offsetWidth;
    if (pageWidth <= 1366) {
      lowerMarkers(1366 - pageWidth);
    }
    resize(sliderWidth);
  });

  var resize = function (width) {
    // takes command and adjusts all slide widths
    slideList.style.width = width;
    // resets to first slide, to avoid poor margins before next button is clicked
    slideList.style.left = '0px';
    count = 1;

    markerInit();
  };

  var lowerMarkers = function (difference) {
    console.log('markers adjusting...');
    for (i = 1; i <= slideTotal; ++i) {
      marker[i].style.marginTop = `${450 + difference * 0.05}px`;
    }
  };

  const nextMarker = function () {
    if (currentMarker > 1) {
      if (currentMarker > 2) {
        slideShift(3, 1);
        return;
      }
      slideShift(2, 3);
      return;
    }
    marker1.style.opacity = '.4';
    marker2.style.opacity = '1';
    currentMarker = 2;
  };

  var slideShift = function (fade, focus) {
    marker[fade].style.opacity = '.4';
    marker[focus].style.opacity = '1';
    currentMarker = focus;
  };

  const prevMarker = function () {
    if (currentMarker > 1) {
      if (currentMarker > 2) {
        slideShift(3, 2);
        return;
      }
      slideShift(2, 1);
      return;
    }
    slideShift(1, 3);
  };


  const prevSlide = function () {
    if (count > 1) {
      prevMarker();
      count -= 2;
      slideList.style.left = `-${count * sliderWidth}px`;
      count++;
    } else if (count = 1) {
      prevMarker();
      count = items - 1;
      slideList.style.left = `-${count * sliderWidth}px`;
      count++;
    }
  };

  const nextSlide = function () {
    if (count < items) {
      nextMarker();
      slideList.style.left = `-${count * sliderWidth}px`;
      count++;
    } else if (count = items) {
      nextMarker();
      slideList.style.left = '0px';
      count = 1;
    }
  };

  next.addEventListener('click', () => {
    nextSlide();
  });

  prev.addEventListener('click', () => {
    prevSlide();
  });
};

window.onload = function () {
  responsiveSlider();
};
