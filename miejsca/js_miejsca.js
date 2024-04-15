const questions = [
  {
    question: "What place is it?",
    image: "img/1.png",
    answers: [
      { text: "park", correct: false },
      { text: "gym", correct: false },
      { text: "store", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/2.png",
    answers: [
      { text: "city", correct: false },
      { text: "village", correct: true },
      { text: "bridge", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/3.png",
    answers: [
      { text: "police", correct: false },
      { text: "city", correct: true },
      { text: "pool", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/4.png",
    answers: [
      { text: "beach", correct: false },
      { text: "road", correct: true },
      { text: "church", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/5.png",
    answers: [
      { text: "gas station", correct: false },
      { text: "museum", correct: false },
      { text: "roundabout", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/6.png",
    answers: [
      { text: "gym", correct: false },
      { text: "sign", correct: true },
      { text: "playground", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/7.png",
    answers: [
      { text: "playground", correct: false },
      { text: "police", correct: true },
      { text: "hospital", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/8.png",
    answers: [
      { text: "gym", correct: false },
      { text: "library", correct: true },
      { text: "beach", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/9.png",
    answers: [
      { text: "pharmacy", correct: false },
      { text: "museum", correct: true },
      { text: "train station", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/10.png",
    answers: [
      { text: "airport", correct: false },
      { text: "greengrocer's", correct: true },
      { text: "gym", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/11.png",
    answers: [
      { text: "pharmacy", correct: false },
      { text: "airport", correct: false },
      { text: "gas station", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/12.png",
    answers: [
      { text: "village", correct: false },
      { text: "bridge", correct: true },
      { text: "city", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/13.png",
    answers: [
      { text: "shoe shop", correct: false },
      { text: "pitch", correct: false },
      { text: "pedestrian", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/14.png",
    answers: [
      { text: "village", correct: false },
      { text: "bus stop", correct: true },
      { text: "pool", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/15.png",
    answers: [
      { text: "church", correct: false },
      { text: "bus station", correct: true },
      { text: "cemetery", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/16.png",
    answers: [
      { text: "pitch", correct: false },
      { text: "train stop", correct: true },
      { text: "pharmacy", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/17.png",
    answers: [
      { text: "playground", correct: false },
      { text: "fire brigade", correct: false },
      { text: "church", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/18.png",
    answers: [
      { text: "playground", correct: false },
      { text: "cemetery", correct: true },
      { text: "gym", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/19.png",
    answers: [
      { text: "florist's", correct: false },
      { text: "airport", correct: true },
      { text: "playground", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/20.png",
    answers: [
      { text: "gym", correct: false },
      { text: "pool", correct: true },
      { text: "pitch", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/21.png",
    answers: [
      { text: "airport", correct: false },
      { text: "butcher shop", correct: false },
      { text: "football pitch", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/22.png",
    answers: [
      { text: "airport", correct: false },
      { text: "playground", correct: true },
      { text: "beach", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/23.png",
    answers: [
      { text: "football pitch", correct: false },
      { text: "clothing store", correct: true },
      { text: "bridge", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/24.png",
    answers: [
      { text: "city", correct: false },
      { text: "shoe shop", correct: true },
      { text: "sign", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/25.png",
    answers: [
      { text: "chruch", correct: false },
      { text: "gas station", correct: false },
      { text: "bookstore", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/26.png",
    answers: [
      { text: "bridge", correct: false },
      { text: "vegetable shop", correct: true },
      { text: "pool", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/27.png",
    answers: [
      { text: "airport", correct: false },
      { text: "supermarket", correct: true },
      { text: "playground", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/28.png",
    answers: [
      { text: "clothing store", correct: false },
      { text: "gym", correct: false },
      { text: "bakery", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/29.png",
    answers: [
      { text: "bridge", correct: false },
      { text: "butcher shop", correct: true },
      { text: "bus stop", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/30.png",
    answers: [
      { text: "airport", correct: false },
      { text: "pharmacy", correct: true },
      { text: "beach", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/31.png",
    answers: [
      { text: "chruch", correct: false },
      { text: "hospital", correct: true },
      { text: "pharmacy", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/32.png",
    answers: [
      { text: "hospital", correct: false },
      { text: "school", correct: false },
      { text: "fire brigade", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/33.png",
    answers: [
      { text: "hospital", correct: false },
      { text: "apartment building", correct: true },
      { text: "pharmacy", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/34.png",
    answers: [
      { text: "village", correct: false },
      { text: "skyscrapers", correct: true },
      { text: "bridge", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/35.png",
    answers: [
      { text: "birdge", correct: false },
      { text: "stationer's", correct: true },
      { text: "gym", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/36.png",
    answers: [
      { text: "playground", correct: false },
      { text: "skyscrapers", correct: false },
      { text: "gym", correct: true },
    ],
  },
  {
    question: "What place is it?",
    image: "img/37.png",
    answers: [
      { text: "stationer's", correct: false },
      { text: "school", correct: true },
      { text: "gym", correct: false },
    ],
  },
  {
    question: "What place is it?",
    image: "img/38.png",
    answers: [
      { text: "playground", correct: false },
      { text: "florist's", correct: true },
      { text: "pool", correct: false },
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
  document.querySelector(".quiz_icon").style.display = "none";
  document.querySelector(".obraz").style.display = "none";
  document.querySelector(".quiz__answers").style.display = "none";
  document.getElementById("see-results").style.display = "flex";
  document.getElementById("result-image").style.display = "flex";
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
