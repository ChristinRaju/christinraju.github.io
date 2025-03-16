// Particles.js Initialization
particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 2 }
    }
});

// Dynamic Background Color Change on Mouse Move
document.body.addEventListener('mousemove', (e) => {
    if (document.body.classList.contains("dark-mode")) return;
    const x = e.clientX / window.innerWidth * 255;
    const y = e.clientY / window.innerHeight * 255;
    document.body.style.background = `rgb(${x}, ${y}, 150)`;
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.style.background = document.body.classList.contains("dark-mode") 
        ? "#121212" 
        : "linear-gradient(45deg, #ff6b6b, #f1c40f, #2ecc71, #3498db)";
});
