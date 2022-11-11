const firstDiv = document.querySelector(".content_box.first");
const thirdDiv = document.querySelector(".content_box.third");
const fifthDiv = document.querySelector(".content_box.fifth");

const firstParagraph = document.querySelector(".content_box.first p");
const thirdParagraph = document.querySelector(".content_box.third p");
const fifthParagraph = document.querySelector(".content_box.fifth p");

function onFirstDivClick(event) {
  if (firstDiv.classList.contains("red")) {
    firstDiv.classList.remove("red");
    firstParagraph.classList.add("hidden");
  } else {
    firstDiv.classList.add("red");
    firstParagraph.classList.remove("hidden");
  }
}
firstDiv.addEventListener("mouseover", onFirstDivClick);
firstDiv.addEventListener("mouseout", onFirstDivClick);

function onthirdDivClick(event) {
  console.log("click");
  if (thirdDiv.classList.contains("yellow")) {
    thirdDiv.classList.remove("yellow");
    thirdParagraph.classList.add("hidden");
  } else {
    thirdDiv.classList.add("yellow");
    thirdParagraph.classList.remove("hidden");
  }
}
thirdDiv.addEventListener("mouseover", onthirdDivClick);
thirdDiv.addEventListener("mouseout", onthirdDivClick);

function onFifthDivClick(event) {
  if (fifthDiv.classList.contains("blue")) {
    fifthDiv.classList.remove("blue");
    fifthParagraph.classList.add("hidden");
  } else {
    fifthDiv.classList.add("blue");
    fifthParagraph.classList.remove("hidden");
  }
}
fifthDiv.addEventListener("mouseover", onFifthDivClick);
fifthDiv.addEventListener("mouseout", onFifthDivClick);
