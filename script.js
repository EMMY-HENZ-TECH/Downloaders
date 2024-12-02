// Particle Animation Script
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 150;

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
}

for (let i = 0; i < particleCount; i++) {
  const size = Math.random() * 3 + 1;
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const speedX = (Math.random() - 0.5) * 2;
  const speedY = (Math.random() - 0.5) * 2;

  particles.push(new Particle(x, y, size, speedX, speedY));
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.draw();
    particle.update();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Typing SVG Animation
const typingText = "Free Social Media Video Downloading Website";
const typingSVG = document.getElementById("typing-svg");

let i = 0;
function typeAnimation() {
  if (i < typingText.length) {
    typingSVG.innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeAnimation, 100); // Adjust typing speed
  }
}

typeAnimation();
