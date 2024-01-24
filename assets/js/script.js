const links = document.querySelectorAll("a[href^='#']");
const cursorRing = document.getElementById("cursor-ring");

// Handle smooth scrolling for anchor links
function preventDefaultAndScrollTo(target) {
  return function (event) {
    event.preventDefault();
    const targetElement = document.getElementById(target);
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
    }
  };
}

links.forEach((link) => {
  link.addEventListener(
    "click",
    preventDefaultAndScrollTo(link.getAttribute("href").substring(1))
  );
});

// Disable context menu and developer tools
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
  if (
    event.keyCode === 123 ||
    (event.ctrlKey &&
      event.shiftKey &&
      (event.keyCode === "I".charCodeAt(0) ||
        event.keyCode === "J".charCodeAt(0))) ||
    (event.ctrlKey && event.keyCode === "U".charCodeAt(0))
  ) {
    event.preventDefault();
  }
});

// Display current date
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const formattedDate = `${day}. ${month}. ${year}.`;

document.getElementById("tahun").innerText = year;
document.getElementById("tanggal").innerText = formattedDate;

// Handle cursor animation
let targetX = 50;
let targetY = 50;
const easingFactor = 0.1;

document.addEventListener("mousemove", (event) => {
  targetX = event.clientX;
  targetY = event.clientY;
});

function updateCursor() {
  const currentX = parseFloat(cursorRing.style.left) || 0;
  const currentY = parseFloat(cursorRing.style.top) || 0;
  const deltaX = (targetX - currentX) * easingFactor;
  const deltaY = (targetY - currentY) * easingFactor;
  cursorRing.style.left = `${currentX + deltaX}px`;
  cursorRing.style.top = `${currentY + deltaY}px`;
  requestAnimationFrame(updateCursor);
}

updateCursor();

const toggleCursor = () => {
  cursorRing.classList.toggle("active");
};

document.addEventListener("mousedown", toggleCursor);
document.addEventListener("mouseup", toggleCursor);
