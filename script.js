
"use strict";

/* ==========================================
   АДАЛ АЗАМАТ
   BY DARKHAN
   15 СЛАЙД + 15 ОЙЫН
========================================== */

const app = document.getElementById("app");
const scene = document.getElementById("scene");

const cityPhoto =
  "https://commons.wikimedia.org/wiki/Special:FilePath/Night_at_Esil_District%2C_Astana_%28P1190721%29.jpg?width=1200";

const photos = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85"
];

/* ==========================================
   15 ТҮСІНДІРМЕ СЛАЙДЫ
========================================== */

const slides = [
  {
    type: "speech",
    theme: "gold",
    title: "Адал азамат деген кім?",
    text: `Қайырлы күн, құрметті ұстаздар және студенттер!

Бүгінгі ашық тәрбие сағатымыздың тақырыбы — «Адал азамат».

Адал азамат — сөзіне берік, ісіне жауапты, айналасындағы адамдарға құрметпен қарайтын және қоғамға пайдасын тигізуге ұмтылатын тұлға.

Адалдық тек шындықты айтумен шектелмейді. Ол әділ шешім қабылдаудан, уәдеге берік болудан және өз қатесін мойындаудан көрінеді.

Біз болашақ маман ретінде осы қасиеттерді бүгіннен бастап қалыптастыруымыз қажет.`
  },

  {
    type: "gallery",
    theme: "sky",
    title: "Адалдық күнделікті өмірде",
    images: [
      photos[0],
      photos[1],
      photos[2]
    ]
  },

  {
    type: "video",
    theme: "blue",
    title: "Адамгершілік және кісілік",
    videoId: "VnuB3V_N2-8",
    videoTitle: "Әрекет. Кісілік кішілікпен келеді",
    intro: "Адамгершілік пен сыйластық туралы тәрбиелік бейнероликті тамашалаймыз. Адамдардың әрекеттеріне назар аударайық.",
    outro: "Адамның шынайы болмысы оның жасаған ісінен көрінеді. Жақсылық пен сыйластық қоғамдағы сенімді нығайтады."
  },

  {
    type: "speech",
    theme: "purple",
    title: "Ар-ождан және шыншылдық",
    text: `Ар-ождан — адамның жақсы мен жаманды ажыратып, өз әрекетіне жауапкершілікпен қарауы.

Адамның шынайы мінезі оны ешкім бақыламай тұрған кезде де көрінеді.

Мысалы, студент бақылау жұмысын өз күшімен орындаса, бұл оның академиялық адалдығын көрсетеді.

Шыншыл адам қателігін жасырмай, оны түзетуге әрекет етеді.

Адалдық адамдар арасындағы сенімді қалыптастырады.`
  },

  {
    type: "gallery",
    theme: "green",
    title: "Әділдік және тең мүмкіндік",
    images: [
      photos[2],
      photos[3],
      photos[5]
    ]
  },

  {
    type: "speech",
    theme: "peach",
    title: "Жауапкершілік және тәртіп",
    text: `Жауапкершілік — қабылдаған міндетті уақытында және сапалы орындау.

Мысалы, студент топтық жобада өз міндетін орындауға уәде берсе, оның әрекеті бүкіл команданың нәтижесіне әсер етеді.

Жауапты адам уақытын жоспарлайды, қиындық туындаса, шешімін іздейді және өз қатесін мойындайды.

Тәртіп — тек ережеге бағыну емес, өз мақсатыңа жүйелі түрде ұмтылу.

Бұл қасиеттер болашақ маман үшін өте маңызды.`
  },

  {
    type: "gallery",
    theme: "gold",
    title: "Адал еңбек — жарқын болашақ",
    images: [
      photos[3],
      photos[4],
      photos[6]
    ]
  },

  {
    type: "speech",
    theme: "blue",
    title: "Заң және тәртіп",
    text: `Заң — қоғамдағы адамдардың құқықтары мен қауіпсіздігін қорғауға бағытталған ережелер жүйесі.

Әр азамат өзінің құқықтарын ғана емес, міндеттерін де білуі қажет.

Мысалы, студенттің білім алуға құқығы бар. Сонымен бірге ол басқа студенттердің оқуына кедергі келтірмеуі керек.

Заң мен тәртіпті сақтау — қоғамға және айналамыздағы адамдарға құрмет көрсету.

Адал азамат өзгенің құқығын да сыйлайды.`
  },

  {
    type: "gallery",
    theme: "sky",
    title: "Бірлік және ынтымақ",
    images: [
      photos[5],
      photos[0],
      photos[2]
    ]
  },

  {
    type: "video",
    theme: "purple",
    title: "Академиялық адалдық",
    videoId: "HTial6_WvHA",
    videoTitle: "Академиялық адалдық",
    intro: "Білім алу кезінде адал болудың маңызын қарастырамыз. Бейнероликтегі әрекеттерге назар аударыңыздар.",
    outro: "Білімнің шынайы нәтижесі өз еңбегімізден қалыптасады. Академиялық адалдық — болашақ кәсіби жауапкершіліктің негізі."
  },

  {
    type: "speech",
    theme: "green",
    title: "Цифрлық мәдениет",
    text: `Қазіргі уақытта интернет күнделікті өміріміздің маңызды бөлігіне айналды.

Цифрлық мәдениет — ақпаратты дұрыс пайдалану, жеке деректерді қорғау және интернетте адамдармен сыйластық сақтау.

Мысалы, күмәнді жаңалықты тексермей тарату басқа адамдарды шатастыруы мүмкін.

Сондықтан ақпараттың дұрыстығын тексеру қажет.

Адал азамат интернетте де жауапкершілік пен әдептілікті сақтайды.`
  },

  {
    type: "gallery",
    theme: "peach",
    title: "Мейірімділік пен сыйластық",
    images: [
      photos[0],
      photos[4],
      photos[5]
    ]
  },

  {
    type: "speech",
    theme: "gold",
    title: "Жемқорлыққа қарсы мәдениет",
    text: `Жемқорлық қоғамдағы әділдікке және адамдардың бір-біріне деген сеніміне зиян келтіреді.

Адал азамат жеке пайдасы үшін әділетсіз артықшылық алуды дұрыс деп санамайды.

Мысалы, студенттік байқауда жеңімпаз таныстықпен емес, нақты еңбек нәтижесімен анықталуы керек.

Әділ бағалау және ашық шешім қабылдау — жемқорлыққа қарсы мәдениеттің маңызды бөлігі.

Адал қоғам әр адамның күнделікті дұрыс таңдауынан басталады.`
  },

  {
    type: "gallery",
    theme: "green",
    title: "Таза қоғам — жарқын болашақ",
    images: [
      photos[4],
      photos[1],
      photos[6]
    ]
  },

  {
    type: "video",
    theme: "gold",
    title: "Жақсылық пен адамгершілік",
    videoId: "44faK2PEU_Q",
    videoTitle: "Үмітіңді үзбе!",
    intro: "Түсіндірме бөлімінің соңында адамгершілік пен қолдаудың маңызын көрсететін тәрбиелік бейнероликпен танысамыз.",
    outro: "Бүгінгі сабақтың қорытындысы: адал азамат шыншыл, әділ, еңбекқор және жауапты болуы керек. Енді осы құндылықтарды командалық ойын арқылы тексереміз."
  }
];

/* ==========================================
   3 КОМАНДА
========================================== */

const teams = [
  "Бірлік",
  "Әділдік",
  "Жауапкершілік"
];

/* ==========================================
   15 ОЙЫН
========================================== */

const games = [
  {
    title: "Адал шешім",
    question: "Студент жоғалған телефон тауып алды. Қандай әрекет дұрыс?",
    options: [
      "Өзінде қалдыру",
      "Иесін тауып қайтару",
      "Досына беру",
      "Елемеу"
    ],
    correct: 1,
    explanation: "Бөтен мүлікті иесіне қайтару — адал әрекеттің белгісі."
  },

  {
    title: "Әділ баға",
    question: "Топтық жобада студенттердің еңбегі әртүрлі болды. Нәтиже қалай бағалануы тиіс?",
    options: [
      "Таныстықпен",
      "Кездейсоқ",
      "Нақты еңбегімен",
      "Тек жетекшіге қарап"
    ],
    correct: 2,
    explanation: "Әділ бағалау нақты еңбек пен белгіленген өлшемдерге сүйенеді."
  },

  {
    type: "case",
    title: "Досыңа адал көмектес",
    question: "Досың бақылау жұмысында дайын жауап сұрады. Оған адал жолмен қалай көмектесуге болады?",
    criteria: [
      "Адал шешім ұсыну",
      "Көмектесудің нақты жолын айту",
      "Таңдауды түсіндіру"
    ],
    explanation: "Дайын жауапты көшіртіп берудің орнына тақырыпты түсінуге көмектесу — дұрыс шешім."
  },

  {
    title: "Құқық пен міндет",
    question: "Өз құқығымызды пайдалану кезінде нені ескеру қажет?",
    options: [
      "Өзгенің пікірін елемеу",
      "Тек өз пайдаңды ойлау",
      "Ортақ ережені бұзу",
      "Өзгенің құқығын құрметтеу"
    ],
    correct: 3,
    explanation: "Әр адамның құқығы басқа адамдардың құқығымен қатар құрметтелуі керек."
  },

  {
    title: "Ақпаратты тексер",
    question: "Интернеттен күмәнді жаңалық көрдің. Қандай әрекет дұрыс?",
    options: [
      "Сенімді дереккөзден тексеру",
      "Бірден барлығына жіберу",
      "Тақырыбына қарап сену",
      "Ойдан мәлімет қосу"
    ],
    correct: 0,
    explanation: "Ақпаратты таратпас бұрын оның дұрыстығын тексеру қажет."
  },

  {
    type: "case",
    title: "Командадағы келіспеушілік",
    question: "Екі студенттің арасында келіспеушілік туындап, ортақ жұмыс тоқтады. Жағдайды қалай шешуге болады?",
    criteria: [
      "Екі тарапты тыңдау",
      "Әділ шешім ұсыну",
      "Ортақ келісімге келу"
    ],
    explanation: "Келіспеушілікті өзара құрметпен және ашық сөйлесу арқылы шешуге болады."
  },

  {
    title: "Адал еңбек",
    question: "Жақсы маман болуға ең көп көмектесетін әрекет қандай?",
    options: [
      "Барлығын көшіру",
      "Қатені жасыру",
      "Үнемі білім алу және тәжірибе жинау",
      "Міндеттен қашу"
    ],
    correct: 2,
    explanation: "Білікті маман білім, тәжірибе және жауапты еңбек арқылы қалыптасады."
  },

  {
    title: "Ар-ождан",
    question: "Ешкім бақыламай тұрғанда ортақ мүлікке қалай қарау керек?",
    options: [
      "Елемеу",
      "Ұқыпты пайдалану",
      "Рұқсатсыз алып кету",
      "Бүлдіру"
    ],
    correct: 1,
    explanation: "Шынайы жауапкершілік бақылауға тәуелді емес."
  },

  {
    type: "case",
    title: "Әділетті байқау",
    question: "Бір қатысушы таныстық арқылы басқалардан артықшылық алғысы келеді. Әділ шешім ұсыныңдар.",
    criteria: [
      "Әділетсіз әрекетті анықтау",
      "Ортақ бағалау өлшемін ұсыну",
      "Барлығына тең мүмкіндік беру"
    ],
    explanation: "Байқау нәтижесі ортақ, алдын ала белгіленген бағалау өлшемдеріне негізделуі керек."
  },

  {
    title: "Жауапкершілік",
    question: "Студент жобаны уақытында аяқтай алмайтынын білді. Не істегені дұрыс?",
    options: [
      "Ештеңе айтпау",
      "Басқаларды кінәлау",
      "Жұмысты тастау",
      "Алдын ала ескертіп, шешім ұсыну"
    ],
    correct: 3,
    explanation: "Қиындық туралы уақытында ескерту — жауапкершіліктің белгісі."
  },

  {
    title: "Цифрлық мәдениет",
    question: "Басқа адамның жеке фотосын жариялау алдында қандай әрекет маңызды?",
    options: [
      "Келісімін алу",
      "Лайк санын есептеу",
      "Әдемі фильтр қою",
      "Бірден жариялау"
    ],
    correct: 0,
    explanation: "Басқа адамның жеке өмірін және келісімін құрметтеу қажет."
  },

  {
    type: "case",
    title: "Таза колледж",
    question: "Колледждегі тазалық мәдениетін жақсарту үшін үш нақты ұсыныс айтыңдар.",
    criteria: [
      "Үш пайдалы ұсыныс айту",
      "Оларды жүзеге асыру жолын түсіндіру",
      "Нәтижені бағалау тәсілін ұсыну"
    ],
    explanation: "Тазалықты тұрақты әдетке айналдыру үшін нақты жоспар мен ортақ жауапкершілік маңызды."
  },

  {
    title: "Өзара құрмет",
    question: "Қарсы команда сенің пікіріңмен келіспеді. Қалай әрекет еткен дұрыс?",
    options: [
      "Сөзін бөлу",
      "Кемсіту",
      "Дәлелін тыңдау",
      "Жанжалдасу"
    ],
    correct: 2,
    explanation: "Сыйластық қарсы пікірді тыңдап, сабырлы жауап беруден басталады."
  },

  {
    title: "Еріктілік",
    question: "Еріктілік қызметінің басты мақсаты қандай?",
    options: [
      "Міндетті түрде марапат алу",
      "Қоғамға өз еркімен көмектесу",
      "Басқалардан жоғары болу",
      "Тек танымал болу"
    ],
    correct: 1,
    explanation: "Еріктілік — қоғамға өз еркіңмен пайдалы іс жасау."
  },

  {
    type: "case",
    title: "Адал азамат манифесі",
    question: "Команда болып адал азаматтың бес негізгі қағидасын құрастырып, олардың екеуіне өмірден мысал келтіріңдер.",
    criteria: [
      "Бес қағида құрастыру",
      "Кемінде екі нақты мысал келтіру",
      "Ортақ қорытынды жасау"
    ],
    explanation: "Адалдық, әділдік, еңбекқорлық, құрмет және жауапкершілік — саналы азаматқа тән маңызды қасиеттер."
  }
];

/* ==========================================
   САЙТ КҮЙІ
========================================== */

let view = "home";
let slideIndex = 0;
let gameIndex = 0;

let answers = Array(15).fill(null);

let secondsLeft = 25 * 60;
let timerRunning = false;

let videoPlaying = false;

let typingFrame = null;
let fullText = "";

const SAVE_KEY = "adal-azamat-darkhan-v3";

/* ==========================================
   ҰПАЙЛАРДЫ САҚТАУ
========================================== */

function saveAnswers() {
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify(answers)
    );
  } catch (error) {
    // Сақтау қолжетімсіз болса,
    // ойын жұмысын жалғастырады.
  }
}

function loadAnswers() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(SAVE_KEY)
    );

    if (!Array.isArray(saved)) return;
    if (saved.length !== 15) return;

    answers = saved.map((answer, i) => {
      if (
        answer === null ||
        typeof answer !== "object"
      ) {
        return null;
      }

      if (
        ![0,5,10].includes(answer.points)
      ) {
        return null;
      }

      if (games[i].type === "case") {
        return {
          choice: null,
          points: answer.points
        };
      }

      if (
        !Number.isInteger(answer.choice) ||
        answer.choice < 0 ||
        answer.choice >= games[i].options.length
      ) {
        return null;
      }

      return {
        choice: answer.choice,
        points:
          answer.choice === games[i].correct
            ? 10
            : 0
      };
    });

  } catch (error) {
    answers = Array(15).fill(null);
  }
}

/* ==========================================
   ТАЙМЕР
========================================== */

function updateTimer() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  document.getElementById("timer").textContent =
    String(minutes).padStart(2,"0") + ":" +
    String(seconds).padStart(2,"0");

  document.getElementById("timerBtn").textContent =
    timerRunning ? "Ⅱ" : "▶";
}

setInterval(() => {
  if (!timerRunning || secondsLeft <= 0) return;

  secondsLeft--;

  if (secondsLeft === 0) {
    timerRunning = false;
  }

  updateTimer();
},1000);

function startTimer() {
  if (secondsLeft > 0) {
    timerRunning = true;
    updateTimer();
  }
}

function toggleTimer() {
  if (timerRunning) {
    timerRunning = false;
  } else {
    startTimer();
  }

  updateTimer();
}

function resetTimer() {
  timerRunning = false;
  secondsLeft = 25 * 60;
  updateTimer();
}

function fullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen?.()
      .catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
}

/* ==========================================
   КӨМЕКШІЛЕР
========================================== */

function setTheme(name) {
  scene.className = "scene theme-" + name;
}

function progress(current,total) {
  return `
    <div class="progress">
      <div class="progress-fill"
           style="width:${current/total*100}%">
      </div>
    </div>
  `;
}

function stopTyping() {
  if (typingFrame !== null) {
    cancelAnimationFrame(typingFrame);
    typingFrame = null;
  }
}

function typeText(text) {
  stopTyping();

  const el = document.getElementById("typedText");
  if (!el) return;

  fullText = text.trim();

  if (
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
  ) {
    el.textContent = fullText;

    const btn =
      document.getElementById("revealText");

    if (btn) btn.hidden = true;

    return;
  }

  el.textContent = "";
  el.classList.add("typing");

  const start = performance.now();
  const speed = 120;

  function animate(now) {
    if (!el.isConnected) return;

    const count = Math.min(
      fullText.length,
      Math.floor((now - start) / 1000 * speed)
    );

    el.textContent = fullText.slice(0,count);

    if (count < fullText.length) {
      typingFrame = requestAnimationFrame(animate);
    } else {
      typingFrame = null;
      el.classList.remove("typing");

      const btn =
        document.getElementById("revealText");

      if (btn) btn.hidden = true;
    }
  }

  typingFrame = requestAnimationFrame(animate);
}

function revealText() {
  stopTyping();

  const el = document.getElementById("typedText");

  if (el) {
    el.textContent = fullText;
    el.classList.remove("typing");
  }

  const btn = document.getElementById("revealText");
  if (btn) btn.hidden = true;
}

/* ФОТО АШЫЛМАСА */

function imageFallback(img) {
  const attempt =
    Number(img.dataset.attempt || 0);

  const backups = [
    photos[5],
    photos[6],
    photos[1]
  ];

  if (attempt < backups.length) {
    img.dataset.attempt = String(attempt + 1);
    img.src = backups[attempt];
  } else {
    img.onerror = null;
    img.style.background = "#d5e6f4";
  }
}

/* ==========================================
   НАВИГАЦИЯ
========================================== */

function showHome() {
  stopTyping();
  videoPlaying = false;
  view = "home";
  render();
}

function showSlide(index) {
  stopTyping();

  slideIndex = Math.max(0,Math.min(14,index));
  videoPlaying = false;
  view = "slide";

  startTimer();
  render();
}

function showGame(index) {
  stopTyping();

  gameIndex = Math.max(0,Math.min(14,index));
  videoPlaying = false;
  view = "game";

  startTimer();
  render();
}

function nextSlide() {
  if (slideIndex === 14) {
    showGame(0);
  } else {
    showSlide(slideIndex + 1);
  }
}

function previousSlide() {
  if (slideIndex === 0) {
    showHome();
  } else {
    showSlide(slideIndex - 1);
  }
}

function nextGame() {
  if (gameIndex === 14) {
    showFinal();
  } else {
    showGame(gameIndex + 1);
  }
}

function previousGame() {
  if (gameIndex === 0) {
    showSlide(14);
  } else {
    showGame(gameIndex - 1);
  }
}

function render() {
  if (view === "home") renderHome();
  if (view === "slide") renderSlide();
  if (view === "game") renderGame();
  if (view === "final") renderFinal();

  window.scrollTo(0,0);
}

/* ==========================================
   БАСТЫ БЕТ
========================================== */

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
          Адал қоғам — саналы ұрпақтан
          басталады.

          Бірінші курс студенттеріне арналған
          интерактивті ашық тәрбие сағаты.
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

          <div>
            <b>15</b>
            <small>Түсіндірме слайды</small>
          </div>

          <div>
            <b>3</b>
            <small>Видео</small>
          </div>

          <div>
            <b>15</b>
            <small>Ойын</small>
          </div>

          <div>
            <b>3</b>
            <small>Команда</small>
          </div>

        </div>
      </div>

      <div class="hero-image">

        <img
          src="${cityPhoto}"
          alt="Астана қаласы"
          onerror="this.onerror=null;this.src='${photos[4]}'">

        <div class="hero-quote">
          Адалдық —<br>
          адамзаттың асыл қасиеті.
        </div>

      </div>

    </section>
  `;
}

/* ==========================================
   СЛАЙДТАР
========================================== */

function slideHeader(slide) {
  return `
    <div class="heading-row">
      <div>

        <div class="eyebrow">
          АДАЛ АЗАМАТ · ТҮСІНДІРМЕ
        </div>

        <h1 class="page-title">
          ${slide.title}
        </h1>

      </div>

      <span class="chip">
        ${slideIndex + 1} / 15
      </span>
    </div>

    ${progress(slideIndex+1,15)}
  `;
}

function slideControls() {
  return `
    <div class="controls">

      <button class="btn"
              onclick="previousSlide()">
        ← Артқа
      </button>

      <button class="btn primary"
              onclick="nextSlide()">

        ${slideIndex === 14
          ? "Ойынға өту →"
          : "Келесі бет →"}

      </button>

    </div>
  `;
}

function renderSlide() {
  const slide = slides[slideIndex];

  setTheme(slide.theme);

  if (slide.type === "speech") {
    renderSpeech(slide);
  }

  if (slide.type === "gallery") {
    renderGallery(slide);
  }

  if (slide.type === "video") {
    renderVideo(slide);
  }
}

/* ТҮСІНДІРМЕ МӘТІНІ */

function renderSpeech(slide) {
  app.innerHTML = `
    <div class="page-enter">

      ${slideHeader(slide)}

      <section class="card speech-card">

        <span class="presenter-label">
          ✦ ТАҚЫРЫПТЫ ТҮСІНДІРУ
        </span>

        <h2>${slide.title}</h2>

        <div id="typedText"
             class="presenter-text"></div>

        <div class="actions">

          <button id="revealText"
                  class="btn"
                  onclick="revealText()">
            Мәтінді толық ашу
          </button>

        </div>

      </section>

      ${slideControls()}

    </div>
  `;

  typeText(slide.text);
}

/* ФОТО: ЕШҚАНДАЙ ЖАЗУ ЖОҚ */

function renderGallery(slide) {
  app.innerHTML = `
    <div class="page-enter">

      <div class="photo-grid">

        ${slide.images.map((src,i) => `
          <div class="photo-box"
               style="--i:${i}">

            <img
              src="${src}"
              alt="Сурет ${i+1}"
              loading="eager"
              data-attempt="0"
              onerror="imageFallback(this)">

          </div>
        `).join("")}

      </div>

      ${slideControls()}

    </div>
  `;
}

/* ВИДЕО */

function renderVideo(slide) {
  const id = slide.videoId;

  const embed =
    "https://www.youtube-nocookie.com/embed/" +
    id + "?autoplay=1&rel=0";

  const watch =
    "https://www.youtube.com/watch?v=" + id;

  app.innerHTML = `
    <div class="page-enter">

      ${slideHeader(slide)}

      <section class="card video-card">

        <div class="video-note">
          <strong>БЕЙНЕРОЛИККЕ КІРІСПЕ</strong>
          <p>${slide.intro}</p>
        </div>

        <div class="video-screen">

          ${videoPlaying ? `

            <iframe
              src="${embed}"
              title="${slide.videoTitle}"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen>
            </iframe>

          ` : `

            <div class="video-poster">
              <span>▶</span>

              <h2>
                ${slide.videoTitle}
              </h2>

              <p>
                Бейнематериалды бастау
              </p>
            </div>

          `}

        </div>

        <div class="actions">

          <button class="btn primary"
                  onclick="toggleVideo()">

            ${videoPlaying
              ? "■ Видеоны тоқтату"
              : "▶ Видеоны бастау"}

          </button>

          <a class="btn"
             href="${watch}"
             target="_blank"
             rel="noopener noreferrer">

            YouTube-та ашу

          </a>

        </div>

        <div class="video-note">
          <strong>БЕЙНЕРОЛИКТІҢ ҚОРЫТЫНДЫСЫ</strong>
          <p>${slide.outro}</p>
        </div>

      </section>

      ${slideControls()}

    </div>
  `;
}

function toggleVideo() {
  videoPlaying = !videoPlaying;
  renderVideo(slides[slideIndex]);
}

/* ==========================================
   КОМАНДАЛАРДЫҢ ҰПАЙЫ
========================================== */

function getScore(team) {
  return answers.reduce((sum,answer,index) => {

    if (
      answer !== null &&
      index % 3 === team
    ) {
      return sum + answer.points;
    }

    return sum;

  },0);
}

function getAnswered(team) {
  return answers.filter((answer,index) =>
    index % 3 === team &&
    answer !== null
  ).length;
}

function renderTeams(activeTeam) {
  return `
    <div class="team-board">

      ${teams.map((name,i) => `

        <div class="card team
          ${activeTeam === i ? "active" : ""}">

          <div>
            <small>
              ${i+1}-ТОП · ${getAnswered(i)}/5
            </small>

            <strong>${name}</strong>
          </div>

          <span class="team-score">
            ${getScore(i)}
          </span>

        </div>

      `).join("")}

    </div>
  `;
}

/* ==========================================
   ОЙЫНДАР
========================================== */

function renderGame() {
  const game = games[gameIndex];
  const team = gameIndex % 3;
  const answer = answers[gameIndex];

  const themes = [
    "gold",
    "blue",
    "green",
    "purple",
    "peach"
  ];

  setTheme(themes[gameIndex % themes.length]);

  let gameContent = "";

  if (game.type === "case") {
    gameContent = `
      <ol class="criteria">
        ${game.criteria.map(item => `
          <li>${item}</li>
        `).join("")}
      </ol>

      ${answer === null ? `

        <p>
          Жауап ауызша талқыланады.
          Бағалау үшін төменнен ұпай таңдаңыз.
        </p>

        <div class="awards">

          <button class="btn"
                  onclick="award(0)">
            0 ұпай
          </button>

          <button class="btn"
                  onclick="award(5)">
            5 ұпай
          </button>

          <button class="btn primary"
                  onclick="award(10)">
            10 ұпай
          </button>

        </div>

      ` : ""}
    `;
  } else {
    gameContent = `
      <div class="options">

        ${game.options.map((option,i) => {
          let cls = "";

          if (answer !== null) {
            if (i === game.correct) {
              cls = "correct";
            } else if (i === answer.choice) {
              cls = "wrong";
            }
          }

          return `
            <button
              class="option ${cls}"
              ${answer !== null ? "disabled" : ""}
              onclick="choose(${i})">

              ${String.fromCharCode(65+i)}.
              ${option}

            </button>
          `;
        }).join("")}

      </div>
    `;
  }

  app.innerHTML = `
    <div class="page-enter">

      <div class="heading-row">
        <div>

          <div class="eyebrow">
            КОМАНДАЛЫҚ САЙЫС
          </div>

          <h1 class="page-title">
            Адалдық алаңы
          </h1>

        </div>

        <span class="chip">
          Ойын ${gameIndex+1} / 15
        </span>
      </div>

      ${renderTeams(team)}
      ${progress(gameIndex+1,15)}

      <div class="game-layout">

        <section class="card question-card">

          <span class="chip">
            ${game.type === "case"
              ? "ЖАҒДАЯТТЫҚ ТАПСЫРМА"
              : "ТЕСТ ТАПСЫРМАСЫ"}
          </span>

          <h2>${game.title}</h2>

          <p class="question">
            ${game.question}
          </p>

          ${gameContent}

          ${answer !== null ? `

            <div class="feedback">

              <strong>
                +${answer.points} ұпай
              </strong>

              <p>${game.explanation}</p>

            </div>

          ` : ""}

        </section>

        <aside class="card game-side">

          <div class="eyebrow">
            КЕЗЕКТЕГІ КОМАНДА
          </div>

          <h2>${team+1}-ТОП</h2>

          <h3>${teams[team]}</h3>

          <p>
            Топ мүшелері бірлесіп ойланып,
            ортақ жауап береді.
          </p>

          <p>
            Тест тапсырмасы — 10 ұпай.
            Жағдаяттық тапсырма —
            0, 5 немесе 10 ұпай.
          </p>

          <h3>
            Жалпы ұпай: ${getScore(team)}
          </h3>

          ${answer !== null ? `

            <button class="btn"
                    onclick="redoAnswer()">
              ↶ Жауапты өзгерту
            </button>

          ` : ""}

        </aside>

      </div>

      <div class="controls">

        <button class="btn"
                onclick="previousGame()">
          ← Артқа
        </button>

        <button class="btn primary"
                onclick="nextGame()">

          ${gameIndex === 14
            ? "Нәтижені көру →"
            : "Келесі ойын →"}

        </button>

      </div>

    </div>
  `;
}

/* ТЕСТКЕ ЖАУАП БЕРУ */

function choose(index) {
  const game = games[gameIndex];

  if (game.type === "case") return;
  if (answers[gameIndex] !== null) return;

  const points = index === game.correct ? 10 : 0;

  answers[gameIndex] = {
    choice: index,
    points
  };

  saveAnswers();
  renderGame();
}

/* ЖАҒДАЯТТЫ БАҒАЛАУ */

function award(points) {
  const game = games[gameIndex];

  if (game.type !== "case") return;
  if (![0,5,10].includes(points)) return;
  if (answers[gameIndex] !== null) return;

  answers[gameIndex] = {
    choice: null,
    points
  };

  saveAnswers();
  renderGame();
}

/* ЖАУАПТЫ ҚАЙТА БЕРУ */

function redoAnswer() {
  answers[gameIndex] = null;
  saveAnswers();
  renderGame();
}

/* ==========================================
   ҚОРЫТЫНДЫ
========================================== */

function showFinal() {
  stopTyping();

  view = "final";
  videoPlaying = false;

  render();
}

function renderFinal() {
  setTheme("gold");

  const scores = teams.map(
    (_,index) => getScore(index)
  );

  const totalAnswered = answers.filter(
    answer => answer !== null
  ).length;

  const maxScore = Math.max(...scores);

  const winners = teams.filter(
    (_,index) => scores[index] === maxScore
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

      <h2>
        ${totalAnswered === 0
          ? "Әзірге нәтиже жоқ"
          : "Үздік нәтиже: " + winners.join(", ")}
      </h2>

      <div class="results">

        ${teams.map((name,index) => `
          <div class="card">

            <span class="chip">
              ${index+1}-ТОП
            </span>

            <h3>${name}</h3>

            <b>${getScore(index)}</b>

            <p>
              ${getAnswered(index)}/5
              тапсырма бағаланды
            </p>

          </div>
        `).join("")}

      </div>

      <p class="question">
        Адалдықты сақтайық,
        әділдікті құрметтейік!
      </p>

      <h2>
        Назарларыңызға рақмет!
      </h2>

      <h1>
        Сау болыңыздар!
      </h1>

      <div class="actions"
           style="justify-content:center">

        <button class="btn primary"
                onclick="showHome()">
          Басты бет
        </button>

        <button class="btn"
                onclick="restartGame()">
          Ойынды қайта бастау
        </button>

      </div>

      <h3 style="color:#aa792c;margin-top:40px">
        BY DARKHAN
      </h3>

    </section>
  `;
}

/* ОЙЫНДЫ ҚАЙТА БАСТАУ */

function restartGame() {
  const approved = confirm(
    "Барлық ұпайды өшіріп, ойынды қайта бастаймыз ба?"
  );

  if (!approved) return;

  answers = Array(15).fill(null);

  saveAnswers();
  resetTimer();

  showGame(0);
}

/* ==========================================
   ПЕРНЕТАҚТА
========================================== */

document.addEventListener("keydown",event => {
  const tag = document.activeElement.tagName;

  if (tag === "INPUT" || tag === "TEXTAREA") {
    return;
  }

  if (event.key === "ArrowRight") {
    if (view === "slide") {
      nextSlide();
    } else if (view === "game") {
      nextGame();
    }
  }

  if (event.key === "ArrowLeft") {
    if (view === "slide") {
      previousSlide();
    } else if (view === "game") {
      previousGame();
    }
  }
});

/* ==========================================
   ІСКЕ ҚОСУ
========================================== */

loadAnswers();
updateTimer();
showHome();

