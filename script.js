/* 
   Robin Phelps Independent Project 
   Filename: script.js

   Author:   Robin Phelps
   Date:     11-27-23
   HTML5 and CSS3 Illustrated
 */

/* create variables */
var nameContent = document.querySelector(".request-from");
var feedbackContent = document.querySelector(".request-content");
var nameInput = document.querySelector("#nameinput");
var feedbackInput = document.querySelector("#other-info");
var form = document.querySelector(".contact-form");
var contactPreview = document.querySelector(".contact-preview");
var submitButton = document.querySelector(".submitbutton");

/* add form text to preview section */
function updatePreview() {
    nameContent.textContent = nameInput.value;
    feedbackContent.textContent = feedbackInput.value;
    contactPreview.className = "contact-preview show";
    if (form.checkValidity() === true) {
        submitButton.className = "submitbutton show";
    }
}

/* updatePreview(); */

/* create event listener for changes to the form */
form.addEventListener("change", updatePreview, false);