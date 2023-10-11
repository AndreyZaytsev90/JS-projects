const button = document.getElementById("btn"); // ищем кнопку по Id
const color = document.querySelector(".color"); // ищем span по класс .color

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function generateHex() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
}

button.addEventListener("click", () => {
  // вешаем на кнопку прослушиватель по клику
  let hexColor = generateHex();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
