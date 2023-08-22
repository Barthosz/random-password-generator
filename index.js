const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
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
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const btnEl = document.getElementById("gen-pass-btn");
const firstPass = document.getElementById("first-pass-output");
const secondPass = document.getElementById("second-pass-output");

btnEl.addEventListener("click", () => {
  generatePass();
});

let pass1 = [];
let pass2 = [];
function generatePass() {
  for (let i = 0; i < 14; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    pass1.push(characters[randomIndex1]);
    pass2.push(characters[randomIndex2]);
  }
  let password1 = pass1.join("");
  let password2 = pass2.join("");
  console.log(password1);
  console.log(password2);
  firstPass.textContent = password1;
  secondPass.textContent = password2;
  //   console.log(password);
  pass1 = [];
  pass2 = [];
}

//
