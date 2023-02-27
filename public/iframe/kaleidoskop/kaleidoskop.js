// ! make section only load when 500px before visible
// ! add a loading icon

let initialLoad = true;
let animationOn = false;

const blackOverlay = document.getElementById("blackOverlay");
const canvas = document.getElementById("kaleidoskopCanvas");
const ctx = canvas.getContext("2d", { alpha: false });
let currentWindowWidth = window.parent.innerWidth;

const mouseTouchHeadline = document.getElementById("mouseTouchHeadline");

function headlineText() {
  if ("ontouchstart" in window) {
    mouseTouchHeadline.innerHTML = "Berühre oder Streiche über das Bild";
  } else {
    mouseTouchHeadline.innerHTML = "Bewege die Maus über das Bild";
  }
}
headlineText();
let half_PI = Math.PI / 2,
  two_PI = Math.PI * 2,
  ease = 0.001;

const kaleidoskop = {
  offsetScale: 0.8,
  offsetRotation: 0,
  offsetX: Math.random() * 200,
  offsetY: Math.random() * 200,
  radius: 400,
  slices: 16,
  zoom: 4,
};

function setRadiusSizeAndMargin() {
  currentWindowWidth = window.parent.innerWidth;
  if (currentWindowWidth >= 850) {
    kaleidoskop.radius = 400;
  } else if (currentWindowWidth <= 849 && currentWindowWidth >= 590) {
    kaleidoskop.radius = 250;
  } else if (currentWindowWidth <= 589 && currentWindowWidth >= 400) {
    kaleidoskop.radius = 185;
  } else if (currentWindowWidth <= 399) {
    kaleidoskop.radius = 130;
    kaleidoskop.zoom = 10;
  }

  // ! adapt to .canvasContainer & .circleBorder in css

  canvas.width = kaleidoskop.radius * 2;
  canvas.height = kaleidoskop.radius * 2;
  canvas.style.marginLeft = -kaleidoskop.radius + "px";
  canvas.style.marginTop = -kaleidoskop.radius + "px";
}
setRadiusSizeAndMargin();

var img = new Image();

img.onload = function () {
  let fill = ctx.createPattern(img, "repeat");

  var scale, step, cx;

  scale =
    kaleidoskop.zoom * (kaleidoskop.radius / Math.min(img.width, img.height));
  step = two_PI / kaleidoskop.slices;
  cx = img.width / 2;

  function draw() {
    ctx.fillStyle = fill;

    for (var i = 0; i <= kaleidoskop.slices; i++) {
      ctx.save();
      ctx.translate(kaleidoskop.radius, kaleidoskop.radius);
      ctx.rotate(i * step);
      ctx.beginPath();
      ctx.moveTo(-0.5, -0.5);
      ctx.arc(0, 0, kaleidoskop.radius, step * -0.51, step * 0.51);
      ctx.rotate(half_PI);
      ctx.scale(scale, scale);
      ctx.scale([-1, 1][i % 2], 1);
      ctx.translate(kaleidoskop.offsetX - cx, kaleidoskop.offsetY);
      ctx.rotate(kaleidoskop.offsetRotation);
      ctx.scale(kaleidoskop.offsetScale, kaleidoskop.offsetScale);
      ctx.fill();
      ctx.restore();
    }
  }

  let movementX = kaleidoskop.offsetX;
  let movementY = kaleidoskop.offsetY;
  let rotation = kaleidoskop.offsetRotation;

  canvas.style.position = "relative";
  // canvas margin declared in SetRadiusSizeAndMargin function
  canvas.style.left = "50%";
  canvas.style.top = "50%";

  let reverse = false;
  // time stamp variables
  let framesPerSecond = 20;
  let now;
  let then;
  let framesPerSecondInterval = 1000 / framesPerSecond;
  let elapsed;

  function animate() {
    // already request another frame
    requestAnimationFrame(animate);

    // creating a time stamp based on the actual clock Time for the animation
    // so it doesnt run faster on high refresh rates
    now = Date.now();
    elapsed = now - then;
    if (!animationOn) {
      return;
    }

    if (elapsed > framesPerSecondInterval) {
      then = now - (elapsed % framesPerSecondInterval);

      if (!reverse) {
        rotation -= 0.0015;
      } else {
        rotation += 0.0015;
      }
      if (rotation < 0.5) {
        reverse = true;
      } else if (rotation > 4) {
        reverse = false;
      }
      kaleidoskop.offsetX += (movementX - kaleidoskop.offsetX) * ease;
      kaleidoskop.offsetY += (movementY - kaleidoskop.offsetY) * ease;
      kaleidoskop.offsetRotation += cutDecimals(
        (rotation - kaleidoskop.offsetRotation) * ease
      );

      draw();
    }
  }
  // initial animation start
  function startAnimation() {
    then = Date.now();
    animate(0);
  }
  startAnimation();

  // Throttling Function
  const throttleFunction = (func, delay) => {
    // Previously called time of the function
    let prev = 0;
    return (...args) => {
      // Current called time of the function
      let now = new Date().getTime();

      // Logging the difference between previously
      // called and current called timings

      // If difference is greater than delay call
      // the function again.
      if (now - prev > delay) {
        prev = now;

        // "..." is the spread operator here
        // returning the function with the
        // array of arguments
        return func(...args);
      }
    };
  };

  // !!!!!!!!!!!!!!!!!!!!! Event listener FUNCTIONS !!!!!!!!!!!!!!!!!!!!!!

  // ! decimal cutting function
  function cutDecimals(number) {
    number = number * 1000;
    number = Math.floor(number);
    number = number / 1000;
    return number;
  }

  // ! mouse movement function
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let mouseEventOn = false;

  function mousemove(event) {
    if (!animationOn) {
      return;
    }
    // sometimes the windowWidth and windowHeight are 0 because the window is not loaded yet
    if (windowWidth == 0 || windowHeight == 0) {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      return;
    }

    let mouseX;
    let mouseY;

    mouseX = event.pageX / windowWidth;
    mouseY = event.pageY / windowHeight;
    mouseX = cutDecimals(mouseX);
    mouseY = cutDecimals(mouseY);

    movementX = Math.floor((mouseX - 1) * kaleidoskop.radius * -2);
    movementY = Math.floor((mouseY - 1) * kaleidoskop.radius * 2);
  }

  // ! Mouse Throttle
  let throttleDelay = 100;
  function mouseEvent(e) {
    // let event = e;
    throttleFunction(mousemove(e), throttleDelay);
  }
  mouseEventOn = false;

  // ! Touch function

  // eslint-disable-next-line no-unused-vars
  function touchmove(e) {
    //  * move Image
  }
  // eslint-disable-next-line no-unused-vars
  function touchstart(e) {
    let random = 0;
    random = Math.random() * (0.1 - 0.01) + 0.01;
    movementX = movementX - random;
    random = Math.random() * (0.1 - 0.01) + 0.01;
    movementY = movementY - random;
  }

  //  ! Touch throttle
  function touchMoveEvent(e) {
    throttleFunction(touchmove(e), throttleDelay);
  }
  function touchStartEvent(e) {
    throttleFunction(touchstart(e), throttleDelay);
  }

  // ! !!!!!!!!!!!!!!!!!! EVENT LISTENERS !!!!!!!!!!!!!!!!!!

  //
  window.parent.addEventListener("touchmove", touchMoveEvent);
  window.parent.addEventListener("touchstart", touchStartEvent);

  let iframe = window.parent.document.getElementById("kaleidoskop");

  // ! Scroll EventListener
  window.parent.addEventListener(
    "scroll",
    throttleFunction(() => {
      let isVisible = iFrameIsInViewport(iframe);
      turnOffAnimationOffScreen(isVisible);
      turnOffMouseEventOffScreen(isVisible);
    }, throttleDelay)
  );

  // ! Section in viewport?
  // add & remove EventListeners Start & Stop Animation
  function iFrameIsInViewport(element) {
    const rect = element.getBoundingClientRect();
    if (
      rect.top - window.parent.innerHeight <= 0 &&
      rect.top >= 0 - element.offsetHeight
    ) {
      return true;
    } else {
      return false;
    }
  }

  // ! turn off Animation and reset button
  function turnOffAnimationOffScreen(bolean) {
    if (animationOn == false) {
      return;
    }
    if (!bolean) {
      animationOn = false;
      kaleidoskopBtn.innerHTML =
        "<span letter='S'>S</span><span letter='T'>T</span><span letter='A'>A</span><span letter='R'>R</span><span letter='T'>T</span>";
    }
  }

  // ! add & remove Mouse Movement EventListener
  function turnOffMouseEventOffScreen(bolean) {
    if (!bolean && mouseEventOn) {
      window.removeEventListener("mousemove", mouseEvent);
      mouseEventOn = false;
    } else if (bolean && !mouseEventOn && animationOn) {
      window.addEventListener("mousemove", mouseEvent);
      mouseEventOn = true;
    }
  }

  // ! Play Pause Button
  const kaleidoskopBtn = document.getElementById("kaleidoskopBtn");
  function toggleAnimation() {
    animationOn = !animationOn;
    if (initialLoad) {
      initialLoad = false;
      blackOverlay.classList.add("invisible");
      movementX = 130;
      movementY = -130;
    }
    if (animationOn) {
      if (!mouseEventOn) {
        window.addEventListener("mousemove", mouseEvent);
        mouseEventOn = true;
      }

      kaleidoskopBtn.innerHTML =
        " <span letter='S'>S</span><span letter='T'>T</span><span letter='O'>O</span><span letter='P'>P</span>";
      animate(0);
    }
    if (!animationOn) {
      if (mouseEventOn) {
        window.removeEventListener("mousemove", mouseEvent);
        mouseEventOn = false;
      }
      kaleidoskopBtn.innerHTML =
        " <span letter='S'>S</span><span letter='T'>T</span><span letter='A'>A</span><span letter='R'>R</span><span letter='T'>T</span>";
    }
  }
  // ! Button EventListener
  kaleidoskopBtn.addEventListener("click", () => {
    toggleAnimation();
  });
  // ! make responsive with window resize and canvas.width

  window.parent.addEventListener(
    "resize",
    throttleFunction(() => {
      setRadiusSizeAndMargin();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw();
    }, throttleDelay)
  );

  draw();
};
img.src = "./magic_forest.jpg";
