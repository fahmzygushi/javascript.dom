//selectors
//DOM
//BOM

// let first= document.getElementById("first")
// let second= document.getElementByClassName("second")
// let h1= document.getElementsByTagName("h1")
// let last= document.querySelector("last")
let text = document.getElementById("new")

// Text Modification
// innerText, innerHTML, textContent
text.innerText = "new day"
text.innerHTML ="<li>new day</li>"

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    text.textContent = "This is the day the lord has made.";
})