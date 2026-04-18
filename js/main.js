const guessTheNumber = (function () {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  let counter = 10;
  return function game() {
    let guessNumber = prompt("Угадай число от 1 до 100");

    if (guessNumber === null) {
      alert("Игра окончена");
      return;
    }
    let numGuessNumber = +guessNumber;

    if (isNaN(numGuessNumber)) {
      counter--;
      alert("Введи число!");

      if (counter === 0) {
        let attemptsAreOver = confirm("Попытки закончились, хотите сыграть еще?");
        if (attemptsAreOver) {
          randomNumber = Math.floor(Math.random() * 100 + 1);
          counter = 10;
          game();
        } else {
          return;
        }
      } else {
        game();
      }
    } else if (numGuessNumber > randomNumber) {
      counter--;
      alert("Загаданное число меньше, осталось попыток " + counter);

      if (counter === 0) {
        attemptsAreOver = confirm("Попытки закончились, хотите сыграть еще?");
        if (attemptsAreOver) {
          randomNumber = Math.floor(Math.random() * 100 + 1);
          counter = 10;
          game();
        } else {
          return;
        }
      } else {
        game();
      }
    } else if (numGuessNumber < randomNumber) {
      counter--;
      alert("Загаданное число больше, осталось попыток " + counter);
      if (counter === 0) {
        attemptsAreOver = confirm("Попытки закончились, хотите сыграть еще?");
        if (attemptsAreOver) {
          randomNumber = Math.floor(Math.random() * 100 + 1);
          counter = 10;
          game();
        } else {
          return;
        }
      } else {
        game();
      }
    } else if (numGuessNumber === randomNumber) {
      alert("Поздравляю, Вы угадали!!!");

      let playAgain = confirm("Хотите сыграть еще?");

      if (playAgain) {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        counter = 10;
        game();
      } else {
        return;
      }
    }
  };
})();

guessTheNumber();
