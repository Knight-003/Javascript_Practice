'use strict';
const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const ButtonCloseModel = document.querySelector(".close-modal");
const ButtonOpenModel = document.querySelectorAll(".show-modal");
const closeButton = document.querySelector(".close-modal");
// all can select all element of that class//this create array like data structue called node list //if we use without all then the first element in dom of that class is got selected 

const OpenModel = function () {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const CloseModel = function () {
    model.classList.add("hidden");
    overlay.classList.add("hidden");
}
for (let index = 0; index < ButtonOpenModel.length; index++) {
    ButtonOpenModel[index].addEventListener('click', OpenModel);


}
closeButton.addEventListener("click", CloseModel);
overlay.addEventListener("click", CloseModel);


document.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "Escape" && !model.classList.contains("hidden")) {


        CloseModel();
    }

})
//keydown fires whenever we press key//keyup when we relese the key //presskey fires continously whenever we continously press a key//whenever a keydown event happen javascript call the function with an event object 









