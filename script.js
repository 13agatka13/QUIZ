const pytania = [
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/1.jpg",
    odpowiedzii: [
      { tekst: "dog", poprawna: false },
      { tekst: "cat", poprawna: false },
      { tekst: "frog", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/2.jpg",
    odpowiedzii: [
      { tekst: "bat", poprawna: false },
      { tekst: "turtle", poprawna: true },
      { tekst: "duck", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/3.jpg",
    odpowiedzii: [
      { tekst: "bee", poprawna: false },
      { tekst: "snake", poprawna: true },
      { tekst: "camel", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/4.jpg",
    odpowiedzii: [
      { tekst: "goat", poprawna: false },
      { tekst: "monkey", poprawna: true },
      { tekst: "owl", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/5.jpg",
    odpowiedzii: [
      { tekst: "fish", poprawna: false },
      { tekst: "crab", poprawna: false },
      { tekst: "owl", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/6.jpg",
    odpowiedzii: [
      { tekst: "bird", poprawna: false },
      { tekst: "lion", poprawna: true },
      { tekst: "cow", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/7.jpg",
    odpowiedzii: [
      { tekst: "sheep", poprawna: false },
      { tekst: "zebra", poprawna: true },
      { tekst: "pig", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/8.jpg",
    odpowiedzii: [
      { tekst: "owl", poprawna: false },
      { tekst: "pig", poprawna: true },
      { tekst: "cow", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/9.jpg",
    odpowiedzii: [
      { tekst: "elephant", poprawna: false },
      { tekst: "cow", poprawna: false },
      { tekst: "sheep", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/10.jpg",
    odpowiedzii: [
      { tekst: "cat", poprawna: false },
      { tekst: "fox", poprawna: true },
      { tekst: "horse", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/11.jpg",
    odpowiedzii: [
      { tekst: "fox", poprawna: false },
      { tekst: "rat", poprawna: true },
      { tekst: "cat", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/12.jpg",
    odpowiedzii: [
      { tekst: "nov", poprawna: false },
      { tekst: "bee", poprawna: true },
      { tekst: "mouse", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/13.jpg",
    odpowiedzii: [
      { tekst: "mouse", poprawna: false },
      { tekst: "goat", poprawna: false },
      { tekst: "elephant", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/14.jpg",
    odpowiedzii: [
      { tekst: "whale", poprawna: false },
      { tekst: "shark", poprawna: true },
      { tekst: "Parrot", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/15.jpg",
    odpowiedzii: [
      { tekst: "whale", poprawna: false },
      { tekst: "fish", poprawna: true },
      { tekst: "shark", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/16.jpg",
    odpowiedzii: [
      { tekst: "whale", poprawna: false },
      { tekst: "tiger", poprawna: true },
      { tekst: "eagle", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/17.jpg",
    odpowiedzii: [
      { tekst: "goat", poprawna: false },
      { tekst: "bull", poprawna: false },
      { tekst: "cow", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/18.jpg",
    odpowiedzii: [
      { tekst: "ant", poprawna: false },
      { tekst: "horse", poprawna: true },
      { tekst: "hen", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/19.jpg",
    odpowiedzii: [
      { tekst: "bird", poprawna: false },
      { tekst: "duck", poprawna: true },
      { tekst: "chicken", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/20.jpg",
    odpowiedzii: [
      { tekst: "owl", poprawna: false },
      { tekst: "goose", poprawna: true },
      { tekst: "deer", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/21.jpg",
    odpowiedzii: [
      { tekst: "cat", poprawna: false },
      { tekst: "bear", poprawna: false },
      { tekst: "chicken", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/22.jpg",
    odpowiedzii: [
      { tekst: "cow", poprawna: false },
      { tekst: "goat", poprawna: true },
      { tekst: "dog", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/23.jpg",
    odpowiedzii: [
      { tekst: "cat", poprawna: false },
      { tekst: "dog", poprawna: true },
      { tekst: "cow", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/24.jpg",
    odpowiedzii: [
      { tekst: "dog", poprawna: false },
      { tekst: "cat", poprawna: true },
      { tekst: "bird", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/25.jpg",
    odpowiedzii: [
      { tekst: "bird", poprawna: false },
      { tekst: "squirrel", poprawna: false },
      { tekst: "parrot", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/26.jpg",
    odpowiedzii: [
      { tekst: "camel", poprawna: false },
      { tekst: "hamster", poprawna: true },
      { tekst: "lion", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/27.jpg",
    odpowiedzii: [
      { tekst: "hamster", poprawna: false },
      { tekst: "spider", poprawna: true },
      { tekst: "lyns", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/28.jpg",
    odpowiedzii: [
      { tekst: "lynx", poprawna: false },
      { tekst: "sheep", poprawna: false },
      { tekst: "giraffe", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/29.jpg",
    odpowiedzii: [
      { tekst: "monkey", poprawna: false },
      { tekst: "hipp", poprawna: true },
      { tekst: "elephant", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/30.jpg",
    odpowiedzii: [
      { tekst: "hippo", poprawna: false },
      { tekst: "rhino", poprawna: true },
      { tekst: "horse", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/31.jpg",
    odpowiedzii: [
      { tekst: "eagle", poprawna: false },
      { tekst: "whale", poprawna: true },
      { tekst: "tiger", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/32.jpg",
    odpowiedzii: [
      { tekst: "bear", poprawna: false },
      { tekst: "bison", poprawna: false },
      { tekst: "butterfly", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/33.jpg",
    odpowiedzii: [
      { tekst: "salmon", poprawna: false },
      { tekst: "housefly", poprawna: true },
      { tekst: "butterfly", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/34.jpg",
    odpowiedzii: [
      { tekst: "bird", poprawna: false },
      { tekst: "mosquito", poprawna: true },
      { tekst: "salmon", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/35.jpg",
    odpowiedzii: [
      { tekst: "bird", poprawna: false },
      { tekst: "ladybird", poprawna: true },
      { tekst: "butterfly", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/36.jpg",
    odpowiedzii: [
      { tekst: "butterfly", poprawna: false },
      { tekst: "hen", poprawna: false },
      { tekst: "ant", poprawna: true },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/37.jpg",
    odpowiedzii: [
      { tekst: "ant", poprawna: false },
      { tekst: "squirrel", poprawna: true },
      { tekst: "starling", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/38.jpg",
    odpowiedzii: [
      { tekst: "hen", poprawna: false },
      { tekst: "hedgehog", poprawna: true },
      { tekst: "fox", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/39.jpg",
    odpowiedzii: [
      { tekst: "chcik", poprawna: false },
      { tekst: "camel", poprawna: true },
      { tekst: "horse", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/40.jpg",
    odpowiedzii: [
      { tekst: "pig", poprawna: false },
      { tekst: "kangaroo", poprawna: true },
      { tekst: "puppy", poprawna: false },
    ],
  },
  {
    pytanie: "What is the name of this animal?",
    obraz: "img/41.jpg",
    odpowiedzii: [
      { tekst: "camel", poprawna: false },
      { tekst: "crocodile", poprawna: true },
      { tekst: "turtle", poprawna: false },
    ],
  },
];
//Zegar
let [sekundy, minuty] = [0, 0];
let zegar = null;
let pokazanyCzas = document.getElementById("timer");
function Czas() {
  sekundy++;

  if (sekundy == 60) {
    minuty++;
    sekundy = 0;
  }
  if (sekundy < 10 && minuty < 10) {
    pokazanyCzas.innerHTML = "0" + minuty + ":0" + sekundy;
  } else if (sekundy < 10) {
    pokazanyCzas.innerHTML = minuty + ":0" + sekundy;
  } else if (sekundy >= 10 && minuty < 10) {
    pokazanyCzas.innerHTML = "0" + minuty + ":" + sekundy;
  } else {
    pokazanyCzas.innerHTML = minuty + sekundy;
  }
}

function StartZegara() {
  zegar = setInterval(Czas, 1000);
}

document
  .getElementById("wynikiPrzycisk")
  .addEventListener("click", function () {
    window.location.href = "wyniki.php";
  });

const pytanieElementId = document.getElementById("pytanie");
const odpowiedz = document.querySelector(".quiz__answers");
const przyciskNastepne = document.getElementById("nastepne");
const nazwa = document.querySelector("#nazwa");
const startQuizBtn = document.querySelector(".quiz__input--start");
const quizContainer = document.querySelector(".quiz__question");

let aktualnePytanieIndex = 0;
let wynik = 0;
let czasUkonczenia = "";

function getRandomElementsFromArray(
  array,
  numberOfRandomElementsToExtract = 1
) {
  const elements = [];

  function getRandomElement(arr) {
    if (elements.length < numberOfRandomElementsToExtract) {
      const index = Math.floor(Math.random() * arr.length);
      const element = arr.splice(index, 1)[0];

      elements.push(element);

      return getRandomElement(arr);
    } else {
      return elements;
    }
  }

  return getRandomElement([...array]);
}

//Losowa kolejnosc pytań
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

startQuizBtn.addEventListener("click", () => {
  const nazwauzytkownika = nazwa.value.trim();
  if (nazwauzytkownika) {
    document.getElementById("podanie-nazwy").style.display = "none";
    document.getElementById("none").style.display = "none";
    document.getElementById("noneH1").style.display = "none";
    document.getElementById("noneFooter").style.display = "none";
    document.getElementById("obrazek_wynik").style.display = "none";
    document.getElementById("wynikiPrzycisk").style.display = "flex";
    document.getElementById("qsANDas").style.display = "block";
    quizContainer.style.display = "flex";
    RozpoczecieQuizu();
  } else {
    alert("Podaj nazwę");
  }
});

function RozpoczecieQuizu() {
  Reset();
  aktualnePytanieIndex = 0;
  selectedQuestions = getRandomElementsFromArray(pytania, 20);
  wynik = 0;
  przyciskNastepne.innerHTML = "NEXT";
  pokazPytania();
  StartZegara();
}

function pokazPytania() {
  let aktualnePytanie = selectedQuestions[aktualnePytanieIndex];
  let questionNo = aktualnePytanieIndex + 1;
  pytanieElementId.innerHTML = questionNo + ". " + aktualnePytanie.pytanie;
  document.getElementById("zwierzeta").src = aktualnePytanie.obraz;

  shuffleArray(aktualnePytanie.odpowiedzii);

  while (odpowiedz.firstChild) {
    odpowiedz.removeChild(odpowiedz.firstChild);
  }

  aktualnePytanie.odpowiedzii.forEach((odp) => {
    const przycisk = document.createElement("button");
    przycisk.innerHTML = odp.tekst;
    przycisk.classList.add("odpowiedzi");
    odpowiedz.appendChild(przycisk);
    if (odp.poprawna) {
      przycisk.dataset.poprawne = odp.poprawna;
    }
    przycisk.addEventListener("click", WybierzPytanie);
  });
}

function Reset() {
  przyciskNastepne.style.display = "none";
  while (odpowiedz.firstChild) {
    odpowiedz.removeChild(odpowiedz.firstChild);
  }
}
// ??
document.getElementById("nastepne").style.display = "none";

function WybierzPytanie(e) {
  const wybranyPrzycisk = e.target;
  const poprawny = wybranyPrzycisk.dataset.poprawne === "true";
  if (poprawny) {
    wybranyPrzycisk.classList.add("poprawne");
    wynik++;
  } else {
    wybranyPrzycisk.classList.add("niepoprawne");
  }

  Array.from(odpowiedz.children).forEach((button) => {
    if (button.dataset.poprawne === "true") {
      button.classList.add("poprawne");
    }
    button.disabled = true;
  });
  przyciskNastepne.style.display = "flex";
}

function PokazWynik() {
  const nazwagracza = nazwa.value;
  Reset();
  completionTime = pokazanyCzas.innerHTML
  clearInterval(zegar);
  document.getElementById(
    "pytanie"
  ).innerHTML = `${nazwagracza} zdobyłeś ${wynik} na 20 punktów!`;
  przyciskNastepne.style.display = "none";
  document.getElementById("zwierzeta").style.display = "none";
  document.querySelector(".quiz__answers").style.display = "none";
  document.getElementById("zobacz-wyniki").style.display = "flex";
  document.getElementById("obrazek_wynik").style.display = "flex";
  let p = document.querySelector(".wynik__text");
  let img = document.getElementById("obrazek_wynik");
  1;
  if (wynik <= 20 && wynik >= 16) {
    img.setAttribute("src", "happy_face.png");
    p.textContent = "You are doing great";
  } else if (wynik <= 15 && wynik >= 10) {
    img.setAttribute("src", "happy_face.png");
    p.textContent = "You are doing fine";
  } else if (wynik <= 9 && wynik >= 6) {
    img.setAttribute("src", "sad_face.png");
    p.textContent = "Keep practicing";
  } else if (wynik <= 5) {
    img.setAttribute("src", "sad_face.png");
    p.textContent = "Not good";
  }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "save_result.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // xhr.onreadystatechange = function () {};
  var data =
    "nazwa=" +
    encodeURIComponent(nazwagracza) +
    "&wynik=" +
    encodeURIComponent(wynik) +
    "&czas=" +
    encodeURIComponent(completionTime);
  xhr.send(data);
}
function handleNextButton() {
  aktualnePytanieIndex++;
  if (aktualnePytanieIndex < 20) {
    pokazPytania();
    przyciskNastepne.style.display = "none";
  } else {
    PokazWynik();
  }
}

document.getElementById("zobacz-wyniki").addEventListener("click", function () {
  window.location.href = "wyniki_uczniow.php";
});

przyciskNastepne.addEventListener("click", () => {
  if (aktualnePytanieIndex < pytania.length) {
    handleNextButton();
  } else {
    RozpoczecieQuizu();
  }
});
