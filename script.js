const name = document.getElementById("andrea-name");
const popup = document.getElementById("birthday-popup");

name.addEventListener("click", function() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    if (month === 9 && day === 23) {
        popup.style.display = "flex";
        launchConfetti();
    }
});

function closePopup() {
    popup.style.display = "none";
    document.getElementById("confetti-container").innerHTML = "";
}

function launchConfetti() {
    const confettiContainer = document.getElementById("confetti-container");
    const colors = ['#e8394a', '#c0606a', '#f5e6e6', '#2a0d0d'];

    for (let i = 0; i < 80; i++) {
        const peice = document.createElement("div");
        peice.classList.add("confetti-piece");
        peice.style.left = Math.random() * 100 + "%";
        peice.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        peice.style.animationDelay = (Math.random() * 2) + "s";
        peice.style.animationDuration = (Math.random() * 2 + 2) + "s";
        confettiContainer.appendChild(peice);
    }
}

const tulip = document.getElementById("tulip-cursor");

document.addEventListener("mousemove", function(e) {
    tulip.style.left = e.clientX + "px";
    tulip.style.top = e.clientY + "px";
});

function createpetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.innerHTML = "";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 3 + 4 + "s";
    petal.style.fontSize = (Math.random() * 12 + 10) + "px";
    petal.style.opacity = Math.random()* 0.5 + 0.3;
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 7000);
}

setInterval(createpetal, 800);

const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
