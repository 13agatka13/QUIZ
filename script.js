const questions = [
  {
    question: "What is the name of this animal?",
    image: "img/1.jpg",
    answers: [
      { text: "dog", correct: false },
      { text: "cat", correct: false },
      { text: "frog", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/2.jpg",
    answers: [
      { text: "bat", correct: false },
      { text: "turtle", correct: true },
      { text: "duck", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/3.jpg",
    answers: [
      { text: "bee", correct: false },
      { text: "snake", correct: true },
      { text: "camel", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/4.jpg",
    answers: [
      { text: "goat", correct: false },
      { text: "monkey", correct: true },
      { text: "owl", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/5.jpg",
    answers: [
      { text: "fish", correct: false },
      { text: "crab", correct: false },
      { text: "owl", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/6.jpg",
    answers: [
      { text: "bird", correct: false },
      { text: "lion", correct: true },
      { text: "cow", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/7.jpg",
    answers: [
      { text: "sheep", correct: false },
      { text: "zebra", correct: true },
      { text: "pig", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/8.jpg",
    answers: [
      { text: "owl", correct: false },
      { text: "pig", correct: true },
      { text: "cow", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/9.jpg",
    answers: [
      { text: "elephant", correct: false },
      { text: "cow", correct: false },
      { text: "sheep", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/10.jpg",
    answers: [
      { text: "cat", correct: false },
      { text: "fox", correct: true },
      { text: "horse", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/11.jpg",
    answers: [
      { text: "fox", correct: false },
      { text: "rat", correct: true },
      { text: "cat", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/12.jpg",
    answers: [
      { text: "nov", correct: false },
      { text: "bee", correct: true },
      { text: "mouse", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/13.jpg",
    answers: [
      { text: "mouse", correct: false },
      { text: "goat", correct: false },
      { text: "elephant", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/14.jpg",
    answers: [
      { text: "whale", correct: false },
      { text: "shark", correct: true },
      { text: "Parrot", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/15.jpg",
    answers: [
      { text: "whale", correct: false },
      { text: "fish", correct: true },
      { text: "shark", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/16.jpg",
    answers: [
      { text: "whale", correct: false },
      { text: "tiger", correct: true },
      { text: "eagle", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/17.jpg",
    answers: [
      { text: "goat", correct: false },
      { text: "bull", correct: false },
      { text: "cow", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/18.jpg",
    answers: [
      { text: "ant", correct: false },
      { text: "horse", correct: true },
      { text: "hen", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/19.jpg",
    answers: [
      { text: "bird", correct: false },
      { text: "duck", correct: true },
      { text: "chicken", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/20.jpg",
    answers: [
      { text: "owl", correct: false },
      { text: "goose", correct: true },
      { text: "deer", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/21.jpg",
    answers: [
      { text: "cat", correct: false },
      { text: "bear", correct: false },
      { text: "chicken", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/22.jpg",
    answers: [
      { text: "cow", correct: false },
      { text: "goat", correct: true },
      { text: "dog", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/23.jpg",
    answers: [
      { text: "cat", correct: false },
      { text: "dog", correct: true },
      { text: "cow", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/24.jpg",
    answers: [
      { text: "dog", correct: false },
      { text: "cat", correct: true },
      { text: "bird", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/25.jpg",
    answers: [
      { text: "bird", correct: false },
      { text: "squirrel", correct: false },
      { text: "parrot", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/26.jpg",
    answers: [
      { text: "camel", correct: false },
      { text: "hamster", correct: true },
      { text: "lion", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/27.jpg",
    answers: [
      { text: "hamster", correct: false },
      { text: "spider", correct: true },
      { text: "lyns", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/28.jpg",
    answers: [
      { text: "lynx", correct: false },
      { text: "sheep", correct: false },
      { text: "giraffe", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/29.jpg",
    answers: [
      { text: "monkey", correct: false },
      { text: "hipp", correct: true },
      { text: "elephant", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/30.jpg",
    answers: [
      { text: "hippo", correct: false },
      { text: "rhino", correct: true },
      { text: "horse", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/31.jpg",
    answers: [
      { text: "eagle", correct: false },
      { text: "whale", correct: true },
      { text: "tiger", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/32.jpg",
    answers: [
      { text: "bear", correct: false },
      { text: "bison", correct: false },
      { text: "butterfly", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/33.jpg",
    answers: [
      { text: "salmon", correct: false },
      { text: "housefly", correct: true },
      { text: "butterfly", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/34.jpg",
    answers: [
      { text: "bird", correct: false },
      { text: "mosquito", correct: true },
      { text: "salmon", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/35.jpg",
    answers: [
      { text: "bird", correct: false },
      { text: "ladybird", correct: true },
      { text: "butterfly", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/36.jpg",
    answers: [
      { text: "butterfly", correct: false },
      { text: "hen", correct: false },
      { text: "ant", correct: true },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/37.jpg",
    answers: [
      { text: "ant", correct: false },
      { text: "squirrel", correct: true },
      { text: "starling", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/38.jpg",
    answers: [
      { text: "hen", correct: false },
      { text: "hedgehog", correct: true },
      { text: "fox", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/39.jpg",
    answers: [
      { text: "chcik", correct: false },
      { text: "camel", correct: true },
      { text: "horse", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/40.jpg",
    answers: [
      { text: "pig", correct: false },
      { text: "kangaroo", correct: true },
      { text: "puppy", correct: false },
    ],
  },
  {
    question: "What is the name of this animal?",
    image: "img/41.jpg",
    answers: [
      { text: "camel", correct: false },
      { text: "crocodile", correct: true },
      { text: "turtle", correct: false },
    ],
  },
];
//Zegar
let [seconds, minutes] = [0, 0];
let clock = null;
let shownTime = document.getElementById("timer");
function Czas() {
  seconds++;

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (seconds < 10 && minutes < 10) {
    shownTime.innerHTML = "0" + minutes + ":0" + seconds;
  } else if (seconds < 10) {
    shownTime.innerHTML = minutes + ":0" + seconds;
  } else if (seconds >= 10 && minutes < 10) {
    shownTime.innerHTML = "0" + minutes + ":" + seconds;
  } else {
    shownTime.innerHTML = minutes + seconds;
  }
}

function ClockStart() {
  clock = setInterval(Czas, 1000);
}

document
  .getElementById("wynikiPrzycisk")
  .addEventListener("click", function () {
    window.location.href = "wyniki.php";
  });

const questionElementId = document.getElementById("pytanie");
const answer = document.querySelector(".quiz__answers");
const nextButton = document.getElementById("nastepne");
const username = document.querySelector("#nazwa");
const startQuizBtn = document.querySelector(".quiz__input--start");
const quizContainer = document.querySelector(".quiz__question");

let currentQuestionIndex = 0;
let score = 0;

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


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

startQuizBtn.addEventListener("click", () => {
  const user = username.value.trim();
  if (user) {
    document.getElementById("podanie-nazwy").style.display = "none";
    document.getElementById("none").style.display = "none";
    document.getElementById("noneH1").style.display = "none";
    document.getElementById("noneFooter").style.display = "none";
    document.getElementById("obrazek_wynik").style.display = "none";
    document.getElementById("wynikiPrzycisk").style.display = "flex";
    document.getElementById("qsANDas").style.display = "block";
    quizContainer.style.display = "flex";
    StartQuiz();
  } else {
    alert("Podaj nazwę");
  }
});

function StartQuiz() {
  Reset();
  currentQuestionIndex = 0;
  selectedQuestions = getRandomElementsFromArray(questions, 20);
  score = 0;
  nextButton.innerHTML = "NEXT";
  showQuestions();
  ClockStart();
}

function showQuestions() {
  let currentQuestion = selectedQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElementId.innerHTML = questionNo + ". " + currentQuestion.question;
  document.getElementById("zwierzeta").src = currentQuestion.image;

  shuffleArray(currentQuestion.answers);

  while (answer.firstChild) {
    answer.removeChild(answer.firstChild);
  }

  currentQuestion.answers.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("odpowiedzi");
    answer.appendChild(button);
    if (ans.correct) {
      button.dataset.poprawne = ans.correct;
    }
    button.addEventListener("click", ChooseAnswer);
  });
}

function Reset() {
  nextButton.style.display = "none";
  while (answer.firstChild) {
    answer.removeChild(answer.firstChild);
  }
}

document.getElementById("nastepne").style.display = "none";

function ChooseAnswer(e) {
  const chosenButton = e.target;
  const correctButton = chosenButton.dataset.poprawne === "true";
  if (correctButton) {
    chosenButton.classList.add("poprawne");
    score++;
  } else {
    chosenButton.classList.add("niepoprawne");
  }

  Array.from(answer.children).forEach((button) => {
    if (button.dataset.poprawne === "true") {
      button.classList.add("poprawne");
    }
    button.disabled = true;
  });
  nextButton.style.display = "flex";
}

function ShowScore() {
  const studentName = username.value;
  Reset();
  completionTime = shownTime.innerHTML
  clearInterval(clock);
  document.getElementById(
    "pytanie"
  ).innerHTML = `${studentName} zdobyłeś ${score} na 20 punktów!`;
  nextButton.style.display = "none";
  document.getElementById("zwierzeta").style.display = "none";
  document.querySelector(".quiz__answers").style.display = "none";
  document.getElementById("zobacz-wyniki").style.display = "flex";
  document.getElementById("obrazek_wynik").style.display = "flex";
  let p = document.querySelector(".wynik__text");
  let img = document.getElementById("obrazek_wynik");
  1;
  if (score <= 20 && score >= 16) {
    img.setAttribute("src", "happy_face.png");
    p.textContent = "You are doing great";
  } else if (score <= 15 && score >= 10) {
    img.setAttribute("src", "happy_face.png");
    p.textContent = "You are doing fine";
  } else if (score <= 9 && score >= 6) {
    img.setAttribute("src", "sad_face.png");
    p.textContent = "Keep practicing";
  } else if (score <= 5) {
    img.setAttribute("src", "sad_face.png");
    p.textContent = "Not good";
  }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "save_result.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // xhr.onreadystatechange = function () {};
  var data =
    "nazwa=" +
    encodeURIComponent(studentName) +
    "&wynik=" +
    encodeURIComponent(score) +
    "&czas=" +
    encodeURIComponent(completionTime);
  xhr.send(data);
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 20) {
    showQuestions();
    nextButton.style.display = "none";
  } else {
    ShowScore();
  }
}

document.getElementById("zobacz-wyniki").addEventListener("click", function () {
  window.location.href = "wyniki_uczniow.php";
});

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    StartQuiz();
  }
});
