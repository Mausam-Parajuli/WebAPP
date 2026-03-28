

const bulb = document.getElementById("bulb");
const statusText = document.getElementById("status");
const toggleBtn = document.getElementById("toggleBtn");

let isOn = false;

toggleBtn.addEventListener("click", function () {
  if (isOn) {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    statusText.textContent = "Bulb is currently OFF";
    toggleBtn.textContent = "Turn ON";
    isOn = false;
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    statusText.textContent = "Bulb is currently ON";
    toggleBtn.textContent = "Turn OFF";
    isOn = true;
  }
});

