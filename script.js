const startBtn = document.getElementById("start-btn");
const balls = [
  document.getElementById("ball1"),
  document.getElementById("ball2"),
  document.getElementById("ball3"),
  document.getElementById("ball4"),
  document.getElementById("ball5"),
  document.getElementById("powerball"),
];

startBtn.addEventListener("click", () => {
  let numbers = generatePowerballNumbers();
  displayNumbersWithAnimation(numbers);
});

function generatePowerballNumbers() {
  let numbers = [];
  while (numbers.length < 5) {
    let randomNum = Math.floor(Math.random() * 69) + 1;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  let powerball = Math.floor(Math.random() * 26) + 1;
  numbers.push(powerball); // Powerball number at the end
  return numbers;
}

function displayNumbersWithAnimation(numbers) {
  let index = 0;

  const interval = setInterval(() => {
    if (index < balls.length) {
      let currentBall = balls[index];
      let count = 0;
      const spinInterval = setInterval(() => {
        if (count < 10) {
          currentBall.innerHTML =
            Math.floor(Math.random() * (index === 5 ? 26 : 69)) + 1;
          count++;
        } else {
          clearInterval(spinInterval);
          currentBall.innerHTML = numbers[index]; // Set final number
          index++;
        }
      }, 100); // Spins numbers every 100ms
    } else {
      clearInterval(interval);
    }
  }, 1500); // 1.5 seconds delay between each ball reveal
}
