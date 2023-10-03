document.addEventListener("DOMContentLoaded", function () {
  const animatedElement = document.getElementById("animatedElement");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  let animationInterval;
  let currentPosition = 0;

  function moveElement() {
    animationInterval = setInterval(function () {
      currentPosition += 5;
      animatedElement.style.left = currentPosition + "px";

      if (currentPosition >= window.innerWidth - 50) {
        clearInterval(animationInterval);
      }
    }, 50);
  }

  function stopAnimation() {
    clearInterval(animationInterval);
  }

  startBtn.addEventListener("click", moveElement);
  stopBtn.addEventListener("click", function () {
    stopAnimation();
    currentPosition =
      parseInt(window.getComputedStyle(animatedElement).left) || 0;
  });
});
