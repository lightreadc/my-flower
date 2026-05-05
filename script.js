const name = document.getElementById("andrea-name");
const popup = document.getElementById("birthday-popup");

name.addEventListener("click", function() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    if (month === 9 && day === 25) {
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
