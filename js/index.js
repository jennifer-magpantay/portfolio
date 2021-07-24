// sticky nav
window.addEventListener("scroll", (event) => {
  // add the class 'display' with a sticky nav bar set to and existing div once the element achieve a position on scrolling
  let element = document.querySelector("header");

  // figured out the target position
  let scroll = document.querySelector(".scroll");
  let offsetTarget = scroll.offsetTop;
  // console.log(offsetTarget);

  // then, get the current scrolling position through window.scrollY
  let position = window.scrollY;
  position >= offsetTarget
    ? element.classList.add("sticky")
    : element.classList.remove("sticky");
  // console.log(position);
});

// add varuables for the function typing
// if declared inside the function it won't work - ??
let counter = 0;
let index = 0;
let currentText = "";
let letter = "";

// typing effect
(function typing() {
  // define an array with the dinamic text
  const textList = [
    "Front End Developer",
    "vegan",
    "crazy-cat-woman",
    "nerd",
    "ketchup lover",
    "feminist",
    "foodie",
  ];

  // add conditions: once the index hits the same number of the array length, reset it to 0
  if (counter === textList.length) {
    counter = 0;
  }
  // set te text to the same value of text index
  currentText = textList[counter];

  // set value for letter
  letter = currentText.slice(0, ++index);

  // set letter as value for the HTML component
  document.querySelector("#js-typing").textContent = letter;
  // once the letter hits the same lenght of the list item, then move to the next one

  if (letter.length === currentText.length) {
    counter++;
    index = 0;
  }
  // nw, set a timeout to run the function every 4s
  setTimeout(typing, 150);
})();
