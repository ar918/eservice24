const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/20210223_231229.png") {
        myImage.setAttribute("src", "images/logo-with-typography.png");
    } else {
        myImage.setAttribute("src", "images/20210223_231229.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `E-service24 is everywhere, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `E-service24 at everywhere, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};

