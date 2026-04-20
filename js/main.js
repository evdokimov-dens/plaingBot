const guessTheNumber = (function () {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  let counter = 10;

  return function game() {
    let guessNumber = prompt("Угадай число от 1 до 100");

    if (guessNumber === null) {
      alert("Спасибо за игру! Пока!");
      return;
    }

    if (counter === 0) {
      let playAgain = confirm("Попытки закончились, хотите сыграть еще?");

      if (playAgain) {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        counter = 10;
        game();
      } else {
        return;
      }
    }

    if (isNaN(guessNumber)) {
      counter--;
      alert("Введи число!");

      if (counter === 0) {
        let playAgain = confirm("Попытки закончились, хотите сыграть еще?");

        if (playAgain) {
          randomNumber = Math.floor(Math.random() * 100 + 1);
          counter = 10;
          game();
        } else {
          return;
        }
      } else {
        game();
      }
      return;
    }

    let numGuessNumber = +guessNumber;

    if (numGuessNumber > randomNumber) {
      counter--;
      alert("Загаданное число меньше, осталось попыток " + counter);

      if (counter === 0) {
        let playAgain = confirm("Попытки закончились, хотите сыграть еще?");

        if (playAgain) {
          randomNumber = Math.floor(Math.random() * 100 + 1);
          counter = 10;
          game();
        } else {
          return;
        }
      } else {
        game();
        return;
      }
    } else if (numGuessNumber < randomNumber) {
      counter--;
      alert("Загаданное число больше, осталось попыток " + counter);

      if (counter === 0) {
        let playAgain = confirm("Попытки закончились, хотите сыграть еще?");

        if (playAgain) {
          randomNumber = Math.floor(Math.random() * 100 + 1);
          counter = 10;
          game();
        } else {
          return;
        }
      } else {
        game();
        return;
      }
    } else if (numGuessNumber === randomNumber) {
      let playAgain = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");

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
