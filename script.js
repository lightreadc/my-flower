const name = document.getElementById("andrea-name");
const popup = document.getElementById("birthday-popup");

name.addEventListener('click', function() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  if (month === 9 && day === 23) {
    popup.style.display = 'flex';
    popup.classList.add('show');
    launchConfetti();
    typeWriter();
  } else {
    const birthday = new Date(today.getFullYear(), 8, 23);
    if (today > birthday) birthday.setFullYear(birthday.getFullYear() + 1);
    const diff = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));
    showCountdown(diff);
  }
});

function showCountdown(days) {
  const countdown = document.getElementById('countdown-popup');
  countdown.style.display = 'flex';
  countdown.classList.add('show');
  document.getElementById('days-count').textContent = days;
}

function closePopup() {
    popup.style.display = "none";
    document.getElementById("confetti-container").innerHTML = "";
}

function launchConfetti() {
  const container = document.getElementById('confetti-container');
  const colors = ['#e8394a', '#c0606a', '#f5e6e6', '#ff9eb5', '#gold'];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.top = '-20px';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 3 + 's';
    piece.style.animationDuration = Math.random() * 2 + 3 + 's';
    container.appendChild(piece);
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

function typeWriter() {
  const message = document.querySelector('.popup-message');
  const text = message.textContent;
  message.textContent = '';
  message.style.opacity = '1';
  
  let i = 0;
  const speed = 30;

  function type() {
    if (i < text.length) {
      message.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, 800);
}