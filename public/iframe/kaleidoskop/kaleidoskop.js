// ! make section only load when 500px before visible
// ! add a loading icon

let initialLoad = true;
let animationOn = false;

const blackOverlay = document.getElementById("blackOverlay");
const canvas = document.getElementById("kaleidoskopCanvas");
const ctx = canvas.getContext("2d", { alpha: false });

var half_PI = Math.PI / 2,
  two_PI = Math.PI * 2,
  ease = 0.001;

var kaleidoskop = {
  offsetScale: 0.8,
  offsetRotation: 0,
  offsetX: 0,
  offsetY: 0,
  radius: 400,
  slices: 16,
  zoom: 4,
};

canvas.width = kaleidoskop.radius * 2;
canvas.height = kaleidoskop.radius * 2;

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
  canvas.style.marginLeft = -kaleidoskop.radius + "px";
  canvas.style.marginTop = -kaleidoskop.radius + "px";
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
        rotation -= 0.001;
      } else {
        rotation += 0.001;
      }
      if (rotation < 0.5) {
        reverse = true;
      } else if (rotation > 4) {
        reverse = false;
      }
      kaleidoskop.offsetX += (movementX - kaleidoskop.offsetX) * ease;
      kaleidoskop.offsetY += (movementY - kaleidoskop.offsetY) * ease;
      kaleidoskop.offsetRotation +=
        (rotation - kaleidoskop.offsetRotation) * ease;

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

  // ! mouse movement function
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let mouseEventOn = false;

  function cutDecimals(number) {
    number = number * 100;
    number = Math.floor(number);
    number = number / 100;
    return number;
  }

  function mousemove(event) {
    console.log("mousemove");
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

  let throttleDelay = 100;
  let iframe = window.parent.document.getElementById("kaleidoskop");
  function mouseEvent(e) {
    let event = e;
    throttleFunction(mousemove(event), throttleDelay);
  }
  // ! Mousemove EventListener
  mouseEventOn = false;
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
      rect.top >= 0 - iframe.offsetHeight
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

  // window.addEventListener("mousemove", test);
  // function test(e) {
  //   console.log(e);
  // }
  // ! remove Mouse Movement EventListener
  function turnOffMouseEventOffScreen(bolean) {
    if (!bolean && mouseEventOn) {
      console.log("remove MousemoveEventListener");
      window.removeEventListener("mousemove", mouseEvent);
      mouseEventOn = false;
    } else if (bolean && !mouseEventOn && animationOn) {
      console.log("add MousemoveEventListener");
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
        console.log("remove MousemoveEventListener");
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
  draw();
};
img.src = "./magic_forest.jpg";
