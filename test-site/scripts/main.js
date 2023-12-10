let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sky1.jpeg") {
    myImage.setAttribute("src", "images/sky4.jpeg");
  } else {
    myImage.setAttribute("src", "images/sky1.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please type your name");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla welcome you," + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla welcome you," + storedName;
}

myButton.onclick = function () {
  setUserName();
};
