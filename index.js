const questions = [
  {
    id: 1,
    question: "1. Java Script це та сама мова програмування що і Java?",
    correct: "ні",
  },
  {
    id: 2,
    question: "2. HTML це каскадна таблиця стилів?",
    correct: "ні",
  },
  {
    id: 3,
    question:
      "3. Alert це функція, яка показує повідомлення та чекає, поки користувач натисне кнопку «ОК»?",
    correct: "так",
  },
  {
    id: 4,
    question:
      "4. Confirm це функція, в якій користувач може надрукувати щось у полі введення та натиснути OK?",
    correct: "ні",
  },
  {
    id: 5,
    question:
      "5. Confirm це функція, яка відображає модальне вікно з текстом question та двома кнопками: 'OK' та 'Скасувати'?",
    correct: "так",
  },
  {
    id: 6,
    question:
      "6. Конструкція switch має один чи більше блоків case та необов'язковий блок default?",
    correct: "так",
  },
  {
    id: 7,
    question:
      "7. Function declaration виглядає наступним чином: 'let func = (arg1, arg2, ...argN) => expression;'?",
    correct: "ні",
  },
  {
    id: 8,
    question:
      "8. Код з тіла циклу while виконується, поки умова condition істинна?",
    correct: "так",
  },
  {
    id: 9,
    question:
      "9. Ми можемо вийти з циклу будь-якої миті за допомогою спеціальної директиви break?",
    correct: "так",
  },
  {
    id: 10,
    question: "10. Директива 'use strict' повинна знаходитися в кінці скрипту?",
    correct: "ні",
  },
];

const submitBtn = document.getElementById("button");
const btnClick2 = submitBtn.addEventListener("click", checkAnswer);

function checkAnswer() {
  let score = 0;
  questions.forEach(({ question, correct }) => {
    const quiz = prompt(question, ["Так чи ні"]);
    if (quiz.trim().toLowerCase() === correct.toLowerCase()) {
      score += 1;
    }
    if (quiz.trim().toLowerCase() !== correct.toLowerCase()) {
      score += 0;
    }
  });

  if (score > 5) {
    alert(`Вітаємо, ви добре пройшли вікторину, у вас ${score} балів.`);
  }
  if (score < 5) {
    alert(`Не сумуйте, іншим разом буде краще, у вас ${score} балів.`);
  }
  return questions;
}

/* 
7. Создайте игру "Викторина". Опираясь на ваши знания по JS, 
создайте игру, которая поочередно задаст пользователю 10 вопросов.
За каждый правильный ответ начисляйте пользователю 1 балл. 
После ответа на все вопросы выведите сколько баллов заработал пользователь. 
*/
