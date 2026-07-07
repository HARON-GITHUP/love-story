// تاريخ بداية العلاقة
const startDate = new Date(2026, 5, 14, 13, 30, 0);

function updateLoveCounter() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const diff = now - startDate;

  const totalSeconds = Math.floor(diff / 1000);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const minutes = Math.floor(totalSeconds / 60) % 60;

  const seconds = totalSeconds % 60;

  document.getElementById("years").innerHTML = years;

  document.getElementById("months").innerHTML = months;

  document.getElementById("days").innerHTML = days;

  document.getElementById("hours").innerHTML = String(hours).padStart(2, "0");

  document.getElementById("minutes").innerHTML = String(minutes).padStart(
    2,
    "0",
  );

  document.getElementById("seconds").innerHTML = String(seconds).padStart(
    2,
    "0",
  );
}

updateLoveCounter();

setInterval(updateLoveCounter, 1000);
function openImage(src) {
  document.getElementById("lightbox").style.display = "flex";

  document.getElementById("lightbox-img").src = src;
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}
const messages = [
  "وجودك في حياتي هو أجمل حاجة حصلتلي ❤️",

  "كل يوم بيعدي بحبك فيه أكتر من اللي قبله 🌹",

  "ربنا يديم ضحكتك اللي بتنور حياتي 😊",

  "أنا ممتن لكل لحظة عشناها سوا 💖",

  "مهما حصل... هفضل أختارك كل يوم ❤️",

  "أنتِ أجمل صدفة حصلتلي 🌸",

  "كل ذكرى معاكي تستاهل تتكتب في كتاب 📖",

  "بحبك أكتر مما الكلمات تقدر توصف ❤️",
];

function newMessage() {
  const random = Math.floor(Math.random() * messages.length);

  document.getElementById("loveMessage").innerHTML = messages[random];
}

newMessage();
function scrollToCounter() {
  document.querySelector(".counter-section").scrollIntoView({
    behavior: "smooth",
  });
}
// ================= Floating Hearts =================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = 15 + Math.random() * 30 + "px";

  heart.style.animationDuration = 4 + Math.random() * 5 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 300);
// تغيير شكل الـ Navbar أثناء النزول

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 1000);
  }, 2500);
});
// ================= Reasons =================

const reasons = [
  "بحب ضحكتك لأنها بتنور يومي ❤️",

  "بحب طيبة قلبك 🌸",

  "بحب إنك بتفهميني من غير كلام 🥹",

  "بحب وجودك جنبي 💖",

  "بحب صوتك 🎧",

  "بحب اهتمامك بيا 🌹",

  "بحب عيونك 👀",

  "بحب إنك أجمل حاجة حصلتلي ❤️",
];

let currentReason = 0;

function nextReason() {
  currentReason++;

  if (currentReason >= reasons.length) {
    currentReason = 0;
  }

  document.getElementById("reasonText").innerHTML = reasons[currentReason];

  document.getElementById("reasonNumber").innerHTML = currentReason + 1;
}
// ================= MUSIC =================

const audio = document.getElementById("audio");

const playBtn = document.getElementById("playBtn");

const progress = document.getElementById("progress");

function playMusic() {
  if (audio.paused) {
    audio.play();

    playBtn.innerHTML = "⏸";
  } else {
    audio.pause();

    playBtn.innerHTML = "▶";
  }
}

audio.addEventListener("timeupdate", () => {
  progress.max = audio.duration;

  progress.value = audio.currentTime;
});

progress.oninput = function () {
  audio.currentTime = progress.value;
};

function nextSong() {
  audio.currentTime = 0;

  audio.play();

  playBtn.innerHTML = "⏸";
}

function prevSong() {
  audio.currentTime = 0;
}
// ================= SURPRISE =================

const surprises = [
  {
    type: "message",

    title: "💌 رسالة ليكي",

    text: "كل يوم بيمر وأنا بحبك أكتر من اليوم اللي قبله ❤️",
  },

  {
    type: "image",

    src: "assets/images/surprise1.jpg",
  },

  {
    type: "video",

    src: "assets/videos/surprise1.mp4",
  },

  {
    type: "gift",

    title: "🎁 هدية",

    text: "المفاجأة دي مستنياكي في الحقيقة 😉❤️",
  },

  {
    type: "image",

    src: "assets/images/surprise2.jpg",
  },

  {
    type: "video",

    src: "assets/videos/surprise2.mp4",
  },

  {
    type: "image",

    src: "assets/images/surprise3.jpg",
  },
];

function openGift() {
  document.getElementById("giftBox").classList.add("open");
  setTimeout(() => {
    // الكود الحالي بتاع إظهار الرسالة أو الصورة أو الفيديو
  }, 600);
  const popup = document.getElementById("popup");

  const content = document.getElementById("popupContent");

  popup.style.display = "flex";

  const item = surprises[Math.floor(Math.random() * surprises.length)];

  if (item.type === "message") {
    content.innerHTML = `

<h2>${item.title}</h2>

<p>${item.text}</p>

`;
  }

  if (item.type === "image") {
    content.innerHTML = `

<h2>📸 صورة جميلة</h2>

<img src="${item.src}">

`;
  }

  if (item.type === "video") {
    content.innerHTML = `

<h2>🎥 فيديو</h2>

<video controls autoplay>

<source src="${item.src}" type="video/mp4">

</video>

`;
  }

  if (item.type === "gift") {
    content.innerHTML = `

<h2>${item.title}</h2>

<p>${item.text}</p>

`;
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
// ================= Welcome =================

function enterWebsite() {
  const screen = document.getElementById("welcome");

  screen.style.opacity = "0";

  setTimeout(() => {
    screen.style.display = "none";
  }, 1000);
}
// ================= LOVE GAME =================

const questions = [
  {
    q: "أنا بحب القهوة ولا الشاي؟",
    answers: ["☕ قهوة", "🍵 شاي"],
    correct: 0,
  },

  {
    q: "أنا بحب البحر ولا الجبل؟",
    answers: ["🌊 البحر", "⛰️ الجبل"],
    correct: 0,
  },

  {
    q: "أنا بحب السهر ولا النوم؟",
    answers: ["🌙 السهر", "😴 النوم"],
    correct: 1,
  },

  {
    q: "أنا بحب البيتزا ولا البرجر؟",
    answers: ["🍕 بيتزا", "🍔 برجر"],
    correct: 0,
  },
];

let gameIndex = 0;

function loadQuestion() {
  document.getElementById("question").innerHTML = questions[gameIndex].q;

  const buttons = document.querySelectorAll(".answers button");

  buttons[0].innerHTML = questions[gameIndex].answers[0];

  buttons[1].innerHTML = questions[gameIndex].answers[1];

  document.getElementById("result").innerHTML = "";
}

function checkAnswer(answer) {
  if (answer === questions[gameIndex].correct) {
    document.getElementById("result").innerHTML = "💖 إجابة صحيحة";

    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerHTML = "🥺 لأ، جربي تاني";

    document.getElementById("result").style.color = "red";
  }
}

function nextQuestion() {
  gameIndex++;

  if (gameIndex >= questions.length) {
    gameIndex = 0;
  }

  loadQuestion();
}

loadQuestion();
// ================= END =================

function backToTop() {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
}
// ================= LOVE LETTER =================

const letter = `

يا مريم ❤️

يمكن الكلمات عمرها ما توصف كل اللي جوايا...

بس حبيت أعمل المكان ده مخصوص ليكي.

كل صورة هنا...

كل ذكرى...

كل ثانية في العداد...

بتفكرني قد إيه وجودك غيّر حياتي.

شكراً إنك كنتي أجمل صدفة حصلتلي.

وأتمنى أفضل أشوف ضحكتك طول العمر.

بحبك ❤️

`;

let index = 0;

function typeLetter() {
  const element = document.getElementById("typingText");

  if (index < letter.length) {
    element.innerHTML += letter.charAt(index);

    index++;

    setTimeout(typeLetter, 45);
  }
}

window.addEventListener("load", () => {
  setTimeout(typeLetter, 1500);
});
function explodeHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = "50%";

    heart.style.top = "50%";

    heart.style.fontSize = 20 + Math.random() * 30 + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999999";

    heart.style.transition = "1.5s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.left = Math.random() * 100 + "vw";

      heart.style.top = Math.random() * 100 + "vh";

      heart.style.opacity = 0;

      heart.style.transform = "scale(2)";
    }, 50);

    setTimeout(() => {
      heart.remove();
    }, 1700);
  }
}
// ================= MEMORY BOOK =================

const bookPages = [
  {
    image: "assets/images/book1.jpg",

    title: "أول صورة ❤️",

    text: "أول مرة اتصورنا فيها مع بعض.",

    date: "14 / 06 / 2024",
  },

  {
    image: "assets/images/book2.jpg",

    title: "أول خروجة ☕",

    text: "اليوم اللي فضل في ذاكرتي.",

    date: "20 / 06 / 2024",
  },

  {
    image: "assets/images/book3.jpg",

    title: "أول هدية 🎁",

    text: "أول هدية بينا ولسه محتفظ بيها.",

    date: "05 / 07 / 2024",
  },

  {
    image: "assets/images/book4.jpg",

    title: "أول عيد ميلاد 🎂",

    text: "أحلى عيد ميلاد مع أجمل إنسانة.",

    date: "18 / 08 / 2024",
  },
];

let currentPage = 0;

function showBook() {
  document.getElementById("bookImage").src = bookPages[currentPage].image;

  document.getElementById("bookTitle").innerHTML = bookPages[currentPage].title;

  document.getElementById("bookText").innerHTML = bookPages[currentPage].text;

  document.getElementById("bookDate").innerHTML = bookPages[currentPage].date;
}

function nextPageBook() {
  currentPage++;

  if (currentPage >= bookPages.length) {
    currentPage = 0;
  }

  showBook();
}

function prevPage() {
  currentPage--;

  if (currentPage < 0) {
    currentPage = bookPages.length - 1;
  }

  showBook();
}

showBook();
const loveReasons = [
  "بحب ضحكتك ❤️",

  "بحب عيونك 👀",

  "بحب طيبة قلبك 🌸",

  "بحب اهتمامك بيا 🥹",

  "بحب صوتك 🎧",

  "بحب هزارك 😂",

  "بحب إنك بتفهميني ❤️",

  "بحب إنك أول شخص بفكر فيه كل يوم ☀️",

  "بحب وجودك في حياتي 💖",

  "بحب كل حاجة فيكي ❤️",
];

let reasonCounter = 0;

function nextLoveReason() {
  reasonCounter++;

  if (reasonCounter >= loveReasons.length) {
    reasonCounter = 0;
  }

  document.getElementById("reasonIndex").innerHTML = reasonCounter + 1;

  document.getElementById("reasonContent").innerHTML =
    loveReasons[reasonCounter];
}
// ================= 3D CARDS =================

const cards = document.querySelectorAll(
  ".card,.memory-card,.reason-card,.player-card,.book,.game-card",
);

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 18;

    const rotateX = -(y - rect.height / 2) / 18;

    card.style.transform = `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });
});
//================ THEME =================

function toggleTheme() {
  document.body.classList.toggle("light-mode");

  const btn = document.getElementById("themeBtn");

  if (document.body.classList.contains("light-mode")) {
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }
}
//================ SPECIAL DAYS =================

window.addEventListener("load", () => {
  const today = new Date();

  const day = today.getDate();

  const month = today.getMonth() + 1;

  if (day === 14 && month === 6) {
    setTimeout(() => {
      alert("🎉 النهارده ذكرى بداية أجمل قصة حب ❤️");
    }, 3000);
  }
});
