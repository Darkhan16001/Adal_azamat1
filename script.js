
"use strict";

/* =========================================
   АДАЛ АЗАМАТ — BY DARKHAN
   15 СЛАЙД + 15 ОЙЫН
========================================= */

const app = document.getElementById("app");
const scene = document.getElementById("scene");

const cityPhoto =
"https://commons.wikimedia.org/wiki/Special:FilePath/Night_at_Esil_District%2C_Astana_%28P1190721%29.jpg?width=1200";

const photos = [
"https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
"https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=85",
"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=85",
"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=85",
"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85"
];

/* =========================================
   15 СЛАЙД
   6 ТҮСІНДІРМЕ
   6 ФОТО
   3 ВИДЕО
========================================= */

const slides = [
  {
    type:"speech",
    theme:"gold",
    title:"Адал азамат деген кім?",
    words:["Адалдық","Әділдік","Жауапкершілік"],
    text:`Қайырлы күн, құрметті ұстаздар және студенттер!

Бүгінгі ашық тәрбие сағатымыздың тақырыбы — «Адал азамат».

Адал азамат — сөзіне берік, ісіне жауапты, басқа адамдарға құрметпен қарайтын және қоғамға пайдасын тигізуге ұмтылатын тұлға.

Адалдық тек шындықты айтумен шектелмейді. Ол әділ шешім қабылдаудан, уәдеге беріктіктен және өз қатесін мойындай білуден көрінеді.

Біз болашақ маман болғандықтан, осы қасиеттерді бүгіннен бастап қалыптастыруымыз қажет.`
  },
  {
    type:"gallery",
    theme:"sky",
    title:"Адалдық күнделікті өмірде",
    images:[photos[0],photos[1],photos[2]]
  },
  {
    type:"video",
    theme:"blue",
    title:"Адамгершілік және кісілік",
    id:"VnuB3V_N2-8",
    name:"Әрекет. Кісілік кішілікпен келеді",
    intro:"Құрметті студенттер, адамгершілік пен сыйластық туралы тәрбиелік бейнероликті тамашалаймыз. Адамдардың әрекеттеріне назар аударыңыздар.",
    after:"Адал азаматтың шынайы болмысы оның адамдарға жасаған ісінен көрінеді. Жақсылық пен сыйластық қоғамдағы сенімді нығайтады."
  },
  {
    type:"speech",
    theme:"purple",
    title:"Ар-ождан және шыншылдық",
    words:["Ар-ождан","Шындық","Сенім"],
    text:`Ар-ождан — адамның жақсы мен жаманды ажыратып, өз әрекетіне жауапкершілікпен қарауы.

Адамның шынайы мінезі оны ешкім бақыламай тұрған кезде де байқалады.

Мысалы, студент бақылау жұмысын өз күшімен орындаса, бұл оның ар-ожданы мен академиялық адалдығын көрсетеді.

Шыншыл адам қателігін жасырмай, оны түзетуге әрекет етеді.

Адалдық адамдар арасындағы сенімді қалыптастырады.`
  },
  {
    type:"gallery",
    theme:"green",
    title:"Әділдік және тең мүмкіндік",
    images:[photos[2],photos[3],photos[5]]
  },
  {
    type:"speech",
    theme:"peach",
    title:"Жауапкершілік және тәртіп",
    words:["Міндет","Уақыт","Тәртіп"],
    text:`Жауапкершілік — өзің қабылдаған міндетті уақытында және сапалы орындау.

Мысалы, студент топтық жобада өз міндетін орындауға уәде берсе, ол бүкіл команданың нәтижесіне әсер етеді.

Жауапты адам уақытын жоспарлайды, қиындық туындаса, шешімін іздейді және өз қатесін мойындайды.

Тәртіп — тек ережеге бағыну емес, өз мақсатыңа жүйелі түрде ұмтылу.

Бұл қасиеттер болашақ маман үшін өте маңызды.`
  },
  {
    type:"gallery",
    theme:"gold",
    title:"Адал еңбек — жарқын болашақ",
    images:[photos[3],photos[4],photos[6]]
  },
  {
    type:"speech",
    theme:"blue",
    title:"Заң және тәртіп",
    words:["Құқық","Заң","Қоғам"],
    text:`Заң — қоғамдағы адамдардың құқықтары мен қауіпсіздігін қорғауға бағытталған ережелер жүйесі.

Әр азамат өзінің құқықтарын ғана емес, міндеттерін де білуі қажет.

Мысалы, студенттің білім алуға құқығы бар. Сонымен бірге ол басқа студенттердің оқуына кедергі жасамауы керек.

Заң мен тәртіпті сақтау — қоғамға және айналамыздағы адамдарға құрмет көрсету.

Адал азамат өз құқығын пайдалана отырып, өзгенің құқығын да сыйлайды.`
  },
  {
    type:"gallery",
    theme:"sky",
    title:"Бірлік және ынтымақ",
    images:[photos[5],photos[0],photos[2]]
  },
  {
    type:"video",
    theme:"purple",
    title:"Адалдық және әділдік",
    id:"Q9fJuCL1oug",
    name:"Абайдың 21-қара сөзі. Адалдық пен әділдік",
    intro:"Енді адалдық пен әділдік туралы Абайдың ойларына назар аударамыз. Бұл қасиеттердің адам мінезіндегі орнын түсінуге тырысайық.",
    after:"Әділ әрі адал адам өз пайдасын ғана ойламай, ортақ құндылықтарды да құрметтейді. Бұл — саналы азаматтың белгісі."
  },
  {
    type:"speech",
    theme:"green",
    title:"Цифрлық мәдениет",
    words:["Интернет","Ақпарат","Қауіпсіздік"],
    text:`Қазіргі уақытта интернет өміріміздің маңызды бөлігіне айналды.

Цифрлық мәдениет — ақпаратты дұрыс пайдалану, жеке деректерді қорғау және интернетте адамдармен сыйластық сақтау.

Мысалы, күмәнді жаңалықты тексермей тарату басқа адамдарды шатастыруы мүмкін.

Сондықтан ақпараттың дұрыстығын тексеруіміз керек.

Адал азамат интернетте де жауапкершілік пен әдептілікті сақтайды.`
  },
  {
    type:"gallery",
    theme:"peach",
    title:"Мейірімділік пен сыйластық",
    images:[photos[0],photos[4],photos[5]]
  },
  {
    type:"speech",
    theme:"gold",
    title:"Жемқорлыққа қарсы мәдениет",
    words:["Ашықтық","Әділдік","Жауапкершілік"],
    text:`Жемқорлық қоғамдағы әділдікке және адамдардың сеніміне зиян келтіреді.

Адал азамат жеке пайдасы үшін әділетсіз артықшылық алуды дұрыс деп қабылдамайды.

Мысалы, студенттік байқауда жеңімпаз таныстықпен емес, нақты еңбек нәтижесімен анықталуы керек.

Әділ бағалау және ашық шешім қабылдау — жемқорлыққа қарсы мәдениеттің маңызды бөлігі.

Адал қоғам әр адамның күнделікті дұрыс таңдауынан басталады.`
  },
  {
    type:"gallery",
    theme:"green",
    title:"Таза Қазақстан",
    images:[photos[4],cityPhoto,photos[1]]
  },
  {
    type:"video",
    theme:"gold",
    title:"Жақсылық пен адамгершілік",
    id:"44faK2PEU_Q",
    name:"Үмітіңді үзбе! — әлеуметтік бейнеролик",
    intro:"Құрметті студенттер, түсіндірме бөлімінің соңында адамгершілік пен қолдаудың маңызы туралы бейнероликті көреміз.",
    after:"Бүгінгі сабақтың қорытындысы: адал азамат шыншыл, әділ, еңбекқор және жауапты болуы керек. Енді осы құндылықтарды командалық ойын арқылы тексереміз."
  }
];

/* =========================================
   15 ОЙЫН — 3 КОМАНДА
========================================= */

const teams = [
  "Бірлік",
  "Әділдік",
  "Жауапкершілік"
];

const games = [
  {
    title:"Адал шешім",
    q:"Студент жоғалған телефон тауып алды. Не істеуі керек?",
    options:["Өзінде қалдыру","Иесіне қайтару","Досына беру","Елемеу"],
    correct:1,
    why:"Бөтен мүлікті иесіне қайтару — адал әрекет."
  },
  {
    title:"Әділ баға",
    q:"Командалық жобада әр студенттің еңбегі әртүрлі болды. Қалай бағалаймыз?",
    options:["Таныстықпен","Кездейсоқ","Нақты үлесімен","Тек жетекшіні"],
    correct:2,
    why:"Әділ бағалау нақты еңбекке сүйенеді."
  },
  {
    type:"case",
    title:"Досыңа көмектес",
    q:"Досың бақылау жұмысында дайын жауап сұрады. Адал жолмен қалай көмектесесің?",
    criteria:["Адал шешім","Көмек көрсету жолы","Дәлел"],
    why:"Дайын жауаптың орнына тақырыпты түсіндіруге көмектесу."
  },
  {
    title:"Құқық пен міндет",
    q:"Құқық пен міндеттің дұрыс байланысын тап.",
    options:["Міндет жоқ","Тек өз пайдаң","Ережені елемеу","Өзгенің құқығын құрметтеу"],
    correct:3,
    why:"Өз құқығымызбен бірге өзгенің құқығын да сыйлауымыз керек."
  },
  {
    title:"Ақпаратты тексер",
    q:"Күмәнді жаңалықты көрдің. Қандай әрекет дұрыс?",
    options:["Дереккөзден тексеру","Бірден тарату","Тақырыбына сену","Елемеу"],
    correct:0,
    why:"Ақпараттың дұрыстығын тексеру маңызды."
  },
  {
    type:"case",
    title:"Командадағы келіспеушілік",
    q:"Екі студент жанжалдасып, жұмыс тоқтады. Қалай шешесің?",
    criteria:["Екі тарапты тыңдау","Әділ шешім","Ортақ келісім"],
    why:"Әр тараптың пікірін тыңдап, келісімге келу."
  },
  {
    title:"Адал еңбек",
    q:"Жақсы маман болуға не көмектеседі?",
    options:["Көшіру","Қателікті жасыру","Тәжірибе және білім","Еңбектен қашу"],
    correct:2,
    why:"Кәсіби біліктілік білім мен тәжірибеден қалыптасады."
  },
  {
    title:"Ар-ождан",
    q:"Ешкім бақыламаса да, ортақ мүлікке қалай қарау керек?",
    options:["Елемеу","Ұқыпты қарау","Рұқсатсыз алу","Бүлдіру"],
    correct:1,
    why:"Жауапкершілік бақылауға тәуелді емес."
  },
  {
    type:"case",
    title:"Әділетті байқау",
    q:"Бір қатысушы таныстықпен артықшылық алғысы келеді. Қандай шешім ұсынасың?",
    criteria:["Әділетсіздікті анықтау","Ашық бағалау","Тең мүмкіндік"],
    why:"Байқау ортақ бағалау өлшемдеріне негізделуі керек."
  },
  {
    title:"Жауапкершілік",
    q:"Студент жобаны уақытында бітіре алмайтынын білді. Не істейді?",
    options:["Үндемейді","Өзгені кінәлайды","Тастайды","Ескертіп, шешім ұсынады"],
    correct:3,
    why:"Мәселені алдын ала ескерту — жауапты әрекет."
  },
  {
    title:"Цифрлық мәдениет",
    q:"Басқа адамның фотосын жариялау алдында не маңызды?",
    options:["Келісімін алу","Лайк саны","Фильтр","Тақырып"],
    correct:0,
    why:"Жеке өмір мен келісімді құрметтеу маңызды."
  },
  {
    type:"case",
    title:"Таза колледж",
    q:"Колледж тазалығын жақсарту үшін үш нақты ұсыныс айтыңдар.",
    criteria:["Үш ұсыныс","Іске асыру жолы","Нәтижені бағалау"],
    why:"Тазалық әр адамның күнделікті жауапкершілігінен басталады."
  },
  {
    title:"Құрмет",
    q:"Қарсы топ сенің пікіріңмен келіспеді. Не істеген дұрыс?",
    options:["Сөзін бөлу","Кемсіту","Дәлелін тыңдау","Кету"],
    correct:2,
    why:"Сыйластық тыңдаудан басталады."
  },
  {
    title:"Еріктілік",
    q:"Еріктіліктің басты мақсаты қандай?",
    options:["Марапат алу","Қоғамға көмектесу","Атақ жинау","Үстем болу"],
    correct:1,
    why:"Еріктілік — қоғамға өз еркіңмен пайдалы іс жасау."
  },
  {
    type:"case",
    title:"Адал азамат манифесі",
    q:"Команда болып адал азаматтың бес қағидасын құрастырыңдар.",
    criteria:["Бес қағида","Екі мысал","Ортақ қорытынды"],
    why:"Адалдық, әділдік, еңбек, құрмет және жауапкершілік."
  }
];

/* =========================================
   КҮЙ
========================================= */

let view = "home";
let slideIndex = 0;
let gameIndex = 0;
let answers = Array(15).fill(null);

let remaining = 25 * 60;
let timerStarted = false;
let timerRunning = false;

let videoPlaying = false;
let typingFrame = null;
let typingFullText = "";
let typingDone = true;

/* =========================================
   ТАЙМЕР
========================================= */

function updateTimer() {
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;

  document.getElementById("timer").textContent =
    String(m).padStart(2,"0") + ":" +
    String(s).padStart(2,"0");

  document.getElementById("timerBtn").textContent =
    timerRunning ? "Ⅱ" : "▶";
}

setInterval(() => {
  if (!timerRunning || remaining <= 0) return;

  remaining--;

  if (remaining === 0) timerRunning = false;
  updateTimer();
},1000);

function startTimer() {
  if (!timerStarted) {
    timerStarted = true;
    timerRunning = true;
  }
  updateTimer();
}

function toggleTimer() {
  if (!timerStarted) startTimer();
  else {
    timerRunning = !timerRunning && remaining > 0;
    updateTimer();
  }
}

function resetTimer() {
  remaining = 25 * 60;
  timerStarted = false;
  timerRunning = false;
  updateTimer();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen?.()
      .catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
}

/* =========================================
   КӨМЕКШІЛЕР
========================================= */

function stopTyping() {
  if (typingFrame !== null) {
    cancelAnimationFrame(typingFrame);
    typingFrame = null;
  }
}

function setTheme(theme) {
  scene.className = "scene theme-" + theme;
}

function progress(n,total) {
  return `
    <div class="progress">
      <div class="progress-fill"
        style="width:${n / total * 100}%">
      </div>
    </div>
  `;
}

function slideHeader(s) {
  return `
    <div class="section-heading">
      <div>
        <div class="eyebrow">
          01 / АШЫҚ ТӘРБИЕ САҒАТЫ
        </div>
        <h1 class="big-title">${s.title}</h1>
      </div>
      <span class="chip">${slideIndex + 1} / 15</span>
    </div>
    ${progress(slideIndex + 1,15)}
  `;
}

function slideButtons() {
  return `
    <div class="controls">
      <button class="btn" onclick="previousSlide()">
        ← Артқа
      </button>
      <button class="btn primary" onclick="nextSlide()">
        ${slideIndex === 14
          ? "Ойынға өту →"
          : "Келесі бет →"}
      </button>
    </div>
  `;
}

/* =========================================
   МӘТІНДІ ТЕРІП ЖАЗУ АНИМАЦИЯСЫ
========================================= */

function startTyping(text) {
  stopTyping();

  const element = document.getElementById("typedText");
  if (!element) return;

  typingFullText = text.trim();
  typingDone = false;

  element.textContent = "";
  element.classList.add("typing-cursor");

  const start = performance.now();
  const speed = 85; // Бір секундта 85 таңба

  function animate(now) {
    const elapsed = (now - start) / 1000;
    const count = Math.min(
      typingFullText.length,
      Math.floor(elapsed * speed)
    );

    element.textContent = typingFullText.slice(0,count);

    if (count < typingFullText.length) {
      typingFrame = requestAnimationFrame(animate);
    } else {
      typingDone = true;
      typingFrame = null;
      element.classList.remove("typing-cursor");

      const btn = document.getElementById("skipTyping");
      if (btn) btn.style.display = "none";
    }
  }

  typingFrame = requestAnimationFrame(animate);
}

function finishTyping() {
  stopTyping();

  const element = document.getElementById("typedText");

  if (element) {
    element.textContent = typingFullText;
    element.classList.remove("typing-cursor");
  }

  typingDone = true;

  const btn = document.getElementById("skipTyping");
  if (btn) btn.style.display = "none";
}

/* =========================================
   БЕТ АУЫСТЫРУ
========================================= */

function showHome() {
  stopTyping();
  view = "home";
  videoPlaying = false;
  render();
}

function showSlide(n) {
  stopTyping();
  startTimer();

  slideIndex = Math.max(0,Math.min(14,n));
  view = "slide";
  videoPlaying = false;

  render();
}

function showGame(n) {
  stopTyping();
  startTimer();

  gameIndex = Math.max(0,Math.min(14,n));
  view = "game";
  videoPlaying = false;

  render();
}

function nextSlide() {
  if (slideIndex === 14) showGame(0);
  else showSlide(slideIndex + 1);
}

function previousSlide() {
  if (slideIndex === 0) showHome();
  else showSlide(slideIndex - 1);
}

function render() {
  if (view === "home") renderHome();
  if (view === "slide") renderSlide();
  if (view === "game") renderGame();
  if (view === "final") renderFinal();

  window.scrollTo(0,0);
}

/* =========================================
   БАСТЫ БЕТ
========================================= */

function renderHome() {
  setTheme("gold");

  app.innerHTML = `
    <section class="hero page-enter">
      <div>
        <div class="eyebrow">
          ҚҰНДЫЛЫҚ · ПАРАСАТ · ЖАУАПКЕРШІЛІК
        </div>

        <h1>
          АДАЛ<br>
          <span>АЗАМАТ</span>
        </h1>

        <p>
          Адал қоғам — саналы ұрпақтан басталады.
          Бірінші курс студенттеріне арналған
          заманауи интерактивті ашық тәрбие сағаты.
        </p>

        <div class="actions">
          <button class="btn primary"
                  onclick="showSlide(0)">
            Сабақты бастау →
          </button>

          <button class="btn"
                  onclick="showGame(0)">
            Командалық ойын
          </button>
        </div>

        <div class="stats">
          <div><b>15</b><small>Слайд</small></div>
          <div><b>3</b><small>Видео</small></div>
          <div><b>15</b><small>Ойын</small></div>
          <div><b>3</b><small>Команда</small></div>
        </div>
      </div>

      <div class="hero-art">
        <img src="${cityPhoto}" alt="Астана қаласы">
        <div class="hero-quote">
          Адалдық —<br>
          адамзаттың асыл қасиеті.
        </div>
      </div>
    </section>
  `;
}

/* =========================================
   ТҮСІНДІРМЕ
========================================= */

function renderSlide() {
  const s = slides[slideIndex];

  setTheme(s.theme);

  if (s.type === "speech") renderSpeech(s);
  if (s.type === "gallery") renderGallery(s);
  if (s.type === "video") renderVideo(s);
}

function renderSpeech(s) {
  app.innerHTML = `
    <div class="page-enter">
      ${slideHeader(s)}

      <section class="card speech-card">
        <span class="teacher-label">
          ✦ АПАЙДЫҢ ДАЙЫН ТҮСІНДІРМЕСІ
        </span>

        <h2>${s.title}</h2>

        <div class="teacher-text"
             id="typedText"></div>

        <div class="keywords">
          ${s.words.map(word => `
            <span class="keyword">${word}</span>
          `).join("")}
        </div>

        <div class="actions">
          <button class="btn"
                  id="skipTyping"
                  onclick="finishTyping()">
            Мәтінді толық ашу
          </button>
        </div>
      </section>

      ${slideButtons()}
    </div>
  `;

  startTyping(s.text);
}

/* =========================================
   ФОТОЛАРДЫҢ ЖАНДЫ АНИМАЦИЯСЫ
   ЕШҚАНДАЙ ЖАЗУ ЖОҚ
========================================= */

function renderGallery(s) {
  app.innerHTML = `
    <div class="page-enter">

      <div class="photo-grid">
        ${s.images.map((src,i) => `
          <div class="photo-box" style="--i:${i}">
            <img
              src="${src}"
              alt="Сурет ${i + 1}"
              loading="eager"
              data-attempt="0">
          </div>
        `).join("")}
      </div>

      ${slideButtons()}

    </div>
  `;

  const fallbackImages = [
    photos[5],
    photos[6],
    cityPhoto
  ];

  document.querySelectorAll(".photo-box img")
    .forEach((img,i) => {

      img.addEventListener("error", () => {
        const attempt = Number(img.dataset.attempt);

        if (attempt < fallbackImages.length) {
          img.dataset.attempt = String(attempt + 1);
          img.src = fallbackImages[
            (i + attempt) % fallbackImages.length
          ];
        }
      });

    });
}

/* =========================================
   3 ҚАЗАҚША БЕЙНЕМАТЕРИАЛ БЕТІ
========================================= */

function renderVideo(s) {
  const embed =
    `https://www.youtube-nocookie.com/embed/${s.id}?autoplay=1&rel=0`;

  const watch =
    `https://www.youtube.com/watch?v=${s.id}`;

  app.innerHTML = `
    <div class="page-enter">
      ${slideHeader(s)}

      <section class="card video-card">

        <div class="teacher-video">
          <strong>✦ АПАЙДЫҢ КІРІСПЕ СӨЗІ</strong>
          <p>${s.intro}</p>
        </div>

        <h2 class="big-title"
            style="font-size:clamp(25px,2.8vw,40px)">
          ${s.name}
        </h2>

        <div class="video-player">
          ${videoPlaying ? `
            <iframe
              src="${embed}"
              title="${s.name}"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen>
            </iframe>
          ` : `
            <div class="video-poster">
              <span>▶</span>
              <h2>${s.name}</h2>
              <p>Толық видеоны бастау</p>
            </div>
          `}
        </div>

        <div class="actions">
          <button class="btn primary"
                  onclick="toggleVideo()">
            ${videoPlaying
              ? "■ Тоқтату"
              : "▶ Видеоны бастау"}
          </button>

          <a class="btn" href="${watch}"
             target="_blank"
             rel="noopener noreferrer">
            YouTube-та ашу
          </a>
        </div>

        <div class="teacher-video">
          <strong>✦ ВИДЕОДАН КЕЙІНГІ ҚОРЫТЫНДЫ</strong>
          <p>${s.after}</p>
        </div>

      </section>

      ${slideButtons()}
    </div>
  `;
}

function toggleVideo() {
  videoPlaying = !videoPlaying;
  renderVideo(slides[slideIndex]);
}

/* =========================================
   3 КОМАНДАНЫҢ ҰПАЙЫ
========================================= */

function getScore(team) {
  return answers.reduce((total,a,i) => {
    if (a !== null && i % 3 === team) {
      return total + a.points;
    }
    return total;
  },0);
}

function renderTeams(active) {
  return `
    <div class="team-board">
      ${teams.map((name,i) => `
        <div class="card team
          ${i === active ? "active" : ""}">
          <div>
            <small>${i + 1}-ТОП</small>
            <strong>${name}</strong>
          </div>
          <span class="team-score">${getScore(i)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

/* =========================================
   15 ОЙЫН
========================================= */

function renderGame() {
  const g = games[gameIndex];
  const answer = answers[gameIndex];
  const team = gameIndex % 3;

  const themes = [
    "blue","gold","green","purple","peach"
  ];

  setTheme(themes[gameIndex % themes.length]);

  let content = "";

  if (g.type === "case") {
    content = `
      <ol class="criteria">
        ${g.criteria.map(c => `<li>${c}</li>`).join("")}
      </ol>

      ${answer === null ? `
        <div class="award-row">
          <button class="btn" onclick="award(0)">0 ұпай</button>
          <button class="btn" onclick="award(5)">5 ұпай</button>
          <button class="btn primary" onclick="award(10)">
            10 ұпай
          </button>
        </div>
      ` : ""}
    `;
  } else {
    content = `
      <div class="options">
        ${g.options.map((option,i) => {
          let cls = "";

          if (answer !== null) {
            if (i === g.correct) cls = "correct";
            else if (i === answer.choice) cls = "wrong";
          }

          return `
            <button class="option ${cls}"
              ${answer !== null ? "disabled" : ""}
              onclick="choose(${i})">
              ${String.fromCharCode(65+i)}. ${option}
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  app.innerHTML = `
    <div class="page-enter">

      <div class="section-heading">
        <div>
          <div class="eyebrow">КОМАНДАЛЫҚ САЙЫС</div>
          <h1 class="big-title">Адалдық алаңы</h1>
        </div>

        <span class="chip">
          Ойын ${gameIndex + 1} / 15
        </span>
      </div>

      ${renderTeams(team)}
      ${progress(gameIndex + 1,15)}

      <div class="game-grid">

        <section class="card game-card">
          <span class="chip">
            ${g.type === "case" ? "ЖАҒДАЯТ" : "ТЕСТ"}
          </span>

          <h2>${g.title}</h2>
          <p class="question">${g.q}</p>

          ${content}

          ${answer !== null ? `
            <div class="feedback">
              <strong>+${answer.points} ұпай</strong>
              <p>${g.why}</p>
            </div>
          ` : ""}
        </section>

        <aside class="card game-side">
          <div class="eyebrow">КЕЗЕКТЕГІ КОМАНДА</div>
          <h2>${team + 1}-ТОП</h2>
          <h3>${teams[team]}</h3>

          <p>
            Топ мүшелері бірге ойланып,
            ортақ жауап береді.
          </p>

          <p>
            Әр дұрыс жауап — 10 ұпай.
            Жағдаят — 0, 5 немесе 10 ұпай.
          </p>

          <h3>Ұпай: ${getScore(team)}</h3>

          ${answer !== null ? `
            <button class="btn" onclick="redo()">
              ↶ Жауапты өзгерту
            </button>
          ` : ""}
        </aside>
      </div>

      <div class="controls">
        <button class="btn" onclick="previousGame()">
          ← Артқа
        </button>

        <button class="btn primary" onclick="nextGame()">
          ${gameIndex === 14
            ? "Нәтижені көру →"
            : "Келесі ойын →"}
        </button>
      </div>

    </div>
  `;
}

function choose(i) {
  if (answers[gameIndex] !== null) return;

  answers[gameIndex] = {
    choice:i,
    points:i === games[gameIndex].correct ? 10 : 0
  };

  renderGame();
}

function award(points) {
  if (answers[gameIndex] !== null) return;

  answers[gameIndex] = {
    choice:null,
    points
  };

  renderGame();
}

function redo() {
  answers[gameIndex] = null;
  renderGame();
}

function previousGame() {
  if (gameIndex === 0) showSlide(14);
  else showGame(gameIndex - 1);
}

function nextGame() {
  if (gameIndex === 14) showFinal();
  else showGame(gameIndex + 1);
}

/* =========================================
   ҚОРЫТЫНДЫ
========================================= */

function showFinal() {
  view = "final";
  render();
}

function renderFinal() {
  setTheme("gold");

  const max = Math.max(
    ...teams.map((_,i) => getScore(i))
  );

  const winners = teams.filter(
    (_,i) => getScore(i) === max
  );

  app.innerHTML = `
    <section class="final page-enter">
      <div class="eyebrow">
        АШЫҚ ТӘРБИЕ САҒАТЫНЫҢ ҚОРЫТЫНДЫСЫ
      </div>

      <h1>
        АДАЛДЫҚ —<br>
        <span>БІЗДІҢ ТАҢДАУЫМЫЗ!</span>
      </h1>

      <h2>Үздік нәтиже: ${winners.join(", ")}</h2>

      <div class="results">
        ${teams.map((name,i) => `
          <div class="card">
            <span class="chip">${i + 1}-ТОП</span>
            <h3>${name}</h3>
            <b>${getScore(i)}</b>
            <p>ұпай</p>
          </div>
        `).join("")}
      </div>

      <div class="actions"
           style="justify-content:center">
        <button class="btn primary" onclick="showHome()">
          Басты бет
        </button>

        <button class="btn" onclick="restart()">
          Қайта ойнау
        </button>
      </div>

      <h3 style="margin-top:40px;color:#a57121">
        BY DARKHAN
      </h3>
    </section>
  `;
}

function restart() {
  if (!confirm("Ойындарды қайта бастаймыз ба?")) return;

  answers = Array(15).fill(null);
  resetTimer();
  showGame(0);
}

/* ПЕРНЕТАҚТА */

document.addEventListener("keydown",e => {
  if (["INPUT","TEXTAREA"].includes(
    document.activeElement.tagName
  )) return;

  if (e.key === "ArrowRight") {
    if (view === "slide") nextSlide();
    else if (view === "game") nextGame();
  }

  if (e.key === "ArrowLeft") {
    if (view === "slide") previousSlide();
    else if (view === "game") previousGame();
  }
});

/* ІСКЕ ҚОСУ */

updateTimer();
showHome();
