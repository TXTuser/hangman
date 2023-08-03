// Импорт {Переменная} Откуда "*.js"
import { ruswords } from "./words.js";

// Строка 2 - Создание переменной для кнопки
let checkButton = document.getElementById("checkbtn");
// Строка 4 - создание переменной для ввода инпута
let playerInput = document.getElementById("input");
// Массив с буквами
// let arrWord = ["banana", "apple", "city", "kiwi", "pineapple"];
let arrWord = ruswords;
// Строка 6 - Переменная word = Массив со словами[Функция с получением рандомного числа(Массив.Длинна)]
let word = arrWord[getRandomIndex(arrWord.length)];
// Строка 8 - создание перменной для тега "p" в которое будет записываться слово
let shifr = document.getElementById("shifr");
// Строка 12 - Функция click вызывается по клику на кнопку проверить и выводит в консоль то, что ввел юзер в input
let img = document.getElementById("img");
// let name = document.getElementsByClassName("name")[0];
let header = document.getElementById("header");
let ul = document.getElementById("ul");
let letters = "";
let imgnum = 0;
let newgame = document.getElementById("newgame");

// То слово которое было загаданно будет автоматически кодом проставляться как - "*"
shifr.innerHTML = "*".repeat(word.length);

// Получение рандомного числа
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function click() {
  // ==false (!)
  // Если letters не включает в себя ввод пользователя то тогда добавлять букву в letters
  if (!letters.includes(playerInput.value)) {
    letters = letters + playerInput.value;
    ul.innerHTML = "Использованные буквы: " + " " + letters;
    if (word.includes(playerInput.value)) {
      shifr.innerHTML = "";
      for (let i = 0; i < word.length; i++) {
        if (letters.includes(word[i])) {
          shifr.innerHTML = shifr.innerHTML + word[i];
        } else {
          shifr.innerHTML = shifr.innerHTML + "*";
        }
      }
    } else {
      imgnum++;
      img.src = "src/hangman" + imgnum + ".png";
      if (imgnum == 6) {
        checkButton.disabled = true;
        header.innerHTML = "Ты проиграл, проверочное слово: " + "" + word;
      }
    }
    if (shifr.innerHTML == word) {
      header.innerHTML = "Победа!";
      checkButton.disabled = true;
    }
  }
  console.log(playerInput.value);
  input.value = "";
}

newgame.onclick = function (event) {
  event.preventDefault();
  header.innerHTML = "Виселица";
  imgnum = 0;
  img.src = "src/hangman" + imgnum + ".png";
  word = arrWord[getRandomIndex(arrWord.length)];
  shifr.innerHTML = "*".repeat(word.length);
  ul.innerHTML = "Вводи букву и нажимай проверить";
  checkButton.disabled = false;
  letters = "";
  input.value = "";
};

// Строка 16 - Переменная кнопки при нажатии читает функцию евента которая автоматически не обновляет страницу и не стирает результат
checkButton.onclick = function (event) {
  event.preventDefault();
  // Строка 12
  click();
  // console.log("Проверка")
};
