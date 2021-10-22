const colors = [
  {
    color: "blue",
    name: "Blue",
  },
  {
    color: "red",
    name: "Red",
  },
  {
    color: "green",
    name: "Green",
  },
  {
    color: "pink",
    name: "Pink",
  },
  {
    color: "goldenrod",
    name: "GoldenRod",
  },
  { color: "#6b5b95", name: " #6b5b95" },
  { color: "#878f99", name: "#878f99" },
  { color: "#ff7b25", name: "#ff7b25" },
  { color: "#b2ad7f", name: "#b2ad7f" },
  { color: "#e3eaa7", name: "#e3eaa7" },
  { color: "#80ced6", name: "#80ced6" },
  { color: "#bc5a45", name: "#bc5a45" },
  { color: "#36486b", name: "#36486b" },
  { color: "#618685", name: "#618685" },
  { color: "#d4ac6e", name: "#d4ac6e" },
];

const colorBtn = document.querySelector("#colorBtn");
const colorsName = document.querySelector("#colors");
const body = document.querySelector("body");

colorBtn.addEventListener("click", displayColor);

function displayColor() {
  const numberOfColor = Math.floor(Math.random() * colors.length);
  colorsName.innerHTML = colors[numberOfColor].name;
  body.style.backgroundColor = colors[numberOfColor].color;
}
