const questions = [
  {
    question: "What clothes is it?",
    image: "img/1.png",
    answers: [
      { text: "t-shirt", correct: false },
      { text: "jeans", correct: false },
      { text: "flip-flops", correct: true },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/2.png",
    answers: [
      { text: "dress", correct: false },
      { text: "shoes", correct: true },
      { text: "skirt", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/3.png",
    answers: [
      { text: "sweater", correct: false },
      { text: "slippers", correct: true },
      { text: "shorts", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/4.png",
    answers: [
      { text: "coat", correct: false },
      { text: "heels", correct: true },
      { text: "hat", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/5.png",
    answers: [
      { text: "hat", correct: false },
      { text: "rubber boots", correct: true },
      { text: "sunglasses", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/6.png",
    answers: [
      { text: "swimsuit", correct: false },
      { text: "winter boots", correct: true },
      { text: "sun hat", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/7.png",
    answers: [
      { text: "goggles", correct: false },
      { text: "sandals", correct: true },
      { text: "jacket", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/8.png",
    answers: [
      { text: "gloves", correct: false },
      { text: "socks", correct: true },
      { text: "beanie", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/9.png",
    answers: [
      { text: "hoodie", correct: false },
      { text: "tights", correct: true },
      { text: "sneakers", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/10.png",
    answers: [
      { text: "gloves", correct: false },
      { text: "scarf", correct: false },
      { text: "shorts", correct: true },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/11.png",
    answers: [
      { text: "sweater", correct: false },
      { text: "jeans", correct: true },
      { text: "hat", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/12.png",
    answers: [
      { text: "raincoat", correct: false },
      { text: "skirt", correct: true },
      { text: "rain boots", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/13.png",
    answers: [
      { text: "t-shirt", correct: false },
      { text: "dress", correct: true },
      { text: "sandals", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/14.png",
    answers: [
      { text: "hat", correct: false },
      { text: "belt", correct: true },
      { text: "shoes", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/15.png",
    answers: [
      { text: "gloves", correct: false },
      { text: "blouse", correct: true },
      { text: "jacket", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/16.png",
    answers: [
      { text: "sweater", correct: false },
      { text: "Shirt", correct: true },
      { text: "hat", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/17.png",
    answers: [
      { text: "hat", correct: false },
      { text: "umbrella", correct: false },
      { text: "t-shirt", correct: true },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/18.png",
    answers: [
      { text: "scarf", correct: false },
      { text: "jumper", correct: true },
      { text: "gloves", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/19.png",
    answers: [
      { text: "sandals", correct: false },
      { text: "hoodie", correct: true },
      { text: "sunglasses", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/20.png",
    answers: [
      { text: "shoes", correct: false },
      { text: "tracksuit", correct: true },
      { text: "hat", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/21.png",
    answers: [
      { text: "t-shirt", correct: false },
      { text: "jacket", correct: true },
      { text: "sunglasses", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/22.png",
    answers: [
      { text: "dress", correct: false },
      { text: "scraf", correct: true },
      { text: "sandals", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/23.png",
    answers: [
      { text: "swimsuit", correct: false },
      { text: "jacket", correct: true },
      { text: "hat", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/24.png",
    answers: [
      { text: "sunglasses", correct: false },
      { text: "gloves", correct: true },
      { text: "umbrella", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/25.png",
    answers: [
      { text: "dress", correct: false },
      { text: "shirt", correct: false },
      { text: "hat", correct: true },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/26.png",
    answers: [
      { text: "hat", correct: false },
      { text: "bag", correct: true },
      { text: "scarf", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/27.png",
    answers: [
      { text: "sweater", correct: false },
      { text: "gloves", correct: true },
      { text: "shirt", correct: false },
    ],
  },
  {
    question: "What clothes is it?",
    image: "img/28.png",
    answers: [
      { text: "shirt", correct: false },
      { text: "pants", correct: false },
      { text: "swimsuit", correct: true },
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

document.getElementById("resultsButton").addEventListener("click", function () {
  window.location.href = "../wyniki.php";
});

const questionElementId = document.getElementById("pytanie");
const answer = document.querySelector(".quiz__answers");
const nextButton = document.getElementById("qsNext");
const username = document.querySelector("#name");
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
    document.getElementById("name-input").style.display = "none";
    document.getElementById("none").style.display = "none";
    document.getElementById("noneH1").style.display = "none";
    document.getElementById("noneFooter").style.display = "none";
    document.getElementById("result-image").style.display = "none";
    document.getElementById("resultsButton").style.display = "flex";
    document.getElementById("qsANDas").style.display = "block";
    document.querySelector(".quiz_icon").style.display = "none";
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
  document.querySelector(".obraz").src = currentQuestion.image;

  shuffleArray(currentQuestion.answers);

  while (answer.firstChild) {
    answer.removeChild(answer.firstChild);
  }

  currentQuestion.answers.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("answers");
    answer.appendChild(button);
    if (ans.correct) {
      button.dataset.correct = ans.correct;
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

document.getElementById("qsNext").style.display = "none";

function ChooseAnswer(e) {
  const chosenButton = e.target;
  const correctButton = chosenButton.dataset.correct === "true";
  if (correctButton) {
    chosenButton.classList.add("correct");
    score++;
  } else {
    chosenButton.classList.add("incorrect");
  }

  Array.from(answer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "flex";
}

function ShowScore() {
  const studentName = username.value;
  Reset();
  completionTime = shownTime.innerHTML;
  clearInterval(clock);
  document.getElementById(
    "pytanie"
  ).innerHTML = `${studentName} zdobyłeś ${score} na 20 punktów!`;
  nextButton.style.display = "none";
  document.querySelector(".obraz").style.display = "none";
  document.querySelector(".quiz__answers").style.display = "none";
  document.getElementById("see-results").style.display = "flex";
  document.getElementById("result-image").style.display = "flex";
  document.querySelector(".quiz_icon").style.display = "none";
  let p = document.querySelector(".result-text");
  let img = document.getElementById("result-image");
  1;
  if (score <= 20 && score >= 16) {
    img.setAttribute("src", "../happy_face.png");
    p.textContent = "You are doing great";
  } else if (score <= 15 && score >= 10) {
    img.setAttribute("src", "../happy_face.png");
    p.textContent = "You are doing fine";
  } else if (score <= 9 && score >= 6) {
    img.setAttribute("src", "../sad_face.png");
    p.textContent = "Keep practicing";
  } else if (score <= 5) {
    img.setAttribute("src", "../sad_face.png");
    p.textContent = "Not good";
  }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../save_result.php", true);
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

document.getElementById("see-results").addEventListener("click", function () {
  window.location.href = "../wyniki_uczniow.php";
});

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    StartQuiz();
  }
});
