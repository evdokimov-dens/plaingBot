const guessTheNumber = (function () {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  return function game() {
    let guessNumber = prompt("Угадай число от 1 до 100");

    if (guessNumber === null) {
      alert("Игра окончена");
      return;
    }
    let numGuessNumber = +guessNumber;

    if (isNaN(numGuessNumber)) {
      alert("Введи число!");
      game();
    } else if (numGuessNumber > randomNumber) {
      alert("Загаданное число меньше");
      game();
    } else if (numGuessNumber < randomNumber) {
      alert("Загаданное число больше");
      game();
    } else if (numGuessNumber === randomNumber) {
      alert("Поздравляю, Вы угадали!!!");
      return;
    }
  };
})();

guessTheNumber();
