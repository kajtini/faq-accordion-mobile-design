"use strict";

const allExpandIcons = document.querySelectorAll(".card__icon");
const allAnswers = document.querySelectorAll(".card__answer");
const listContainer = document.querySelector(".card__list");

const toggleActiveQuestion = (question) => {
  question.classList.toggle("question--active");
};

const showAnswer = (question) => {
  question
    .closest("li")
    .querySelector(".card__answer")
    .classList.toggle("hidden");
};

const addIconRotation = (icon) => {
  icon.classList.toggle("icon--active");
};

const openAnswer = (question) => {
  toggleActiveQuestion(question);
  showAnswer(question);
  addIconRotation(question.closest("div").querySelector(".card__icon"));
};

listContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("card__question")) {
    openAnswer(e.target);
  }
  if (e.target.classList.contains("card__icon")) {
    toggleActiveQuestion(
      e.target.closest("li").querySelector(".card__question")
    );
    showAnswer(e.target.closest("li").querySelector(".card__answer"));
    e.target.classList.toggle("icon--active");
  }
});
