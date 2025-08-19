// Boot animation
window.addEventListener("load", () => {
  const boot = document.getElementById("boot");
  const mainUI = document.getElementById("mainUI");

  setTimeout(() => {
    boot.classList.add("opacity-0");
    setTimeout(() => {
      boot.style.display = "none";
      mainUI.classList.remove("hidden");
    }, 1000);
  }, 3000); // Durée du boot
});

// Gamepad support
let controllerStatus = document.getElementById("controllerStatus");

window.addEventListener("gamepadconnected", (e) => {
  controllerStatus.textContent = `Manette connectée : ${e.gamepad.id}`;
  console.log("Gamepad connected:", e.gamepad);
});

window.addEventListener("gamepaddisconnected", () => {
  controllerStatus.textContent = "Manette déconnectée";
});

// Optional: Poll inputs
function pollGamepad() {
  const gamepads = navigator.getGamepads();
  if (gamepads[0]) {
    const gp = gamepads[0];
    if (gp.buttons[0].pressed) {
      alert("Bouton X pressé !");
    }
  }
  requestAnimationFrame(pollGamepad);
}
pollGamepad();
