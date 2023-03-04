const plusButton = document.getElementById("button_plus");
const minusButton = document.getElementById("button_minus");
const modeChangerButton = document.getElementById("modechanger");
const fontSizeEl = document.getElementById("fontSize");
const mainEl = document.querySelector("main")
const bodyy = document.querySelector("body")
const navv = document.querySelector("nav")

const prof = document.querySelector("#profile")
const over = document.getElementById("overlay")
const drp = document.querySelector(".drp")
const ims = document.querySelectorAll(".rnd")

let fontsz = 11;
let vMode = "🌚";
let isdark = false
let isdrpdn = false

modeChangerButton.textContent = vMode;
fontSizeEl.textContent = fontsz;
mainEl.setAttribute("style", `font-size: ${fontsz}px;`);



const increaser = function () {

    fontsz = fontsz + 1;
    // mainEl.setAttribute("style", `font-size: ${fontsz}px;`);
    mainEl.style.fontSize = `${fontsz}px`
    fontSizeEl.textContent = fontsz;

}

const decreaser = function () {
    fontsz = fontsz - 1;
    // mainEl.setAttribute("style", `font-size: ${fontsz}px;`);//this method seset all value and apply only this property
    mainEl.style.fontSize = `${fontsz}px`

    fontSizeEl.textContent = fontsz;

}

const dark = function () {
    vMode = "☀️";
    // bodyy.setAttribute("style", ` background-color: black;`)
    // mainEl.setAttribute("style", `color: white;`)
    // navv.setAttribute("style", ` background-color: black;`)
    bodyy.style.backgroundColor = "black"
    mainEl.style.color = "white"
    navv.style.backgroundColor = "black"
    navv.style.borderBottom = "2px" + " " + "solid" + " " + "white"
    drp.style.backgroundColor = "white"
    modeChangerButton.textContent = vMode;
    isdark = true



}
const light = function () {
    vMode = "🌚";
    // bodyy.setAttribute("style", ` background-color: white;`)
    // mainEl.setAttribute("style", `color: black;`)
    // navv.setAttribute("style", ` background-color: aquamarine;`)
    bodyy.style.backgroundColor = "white"
    mainEl.style.color = "black";
    navv.style.backgroundColor = "aquamarine";
    navv.style.borderBottom = "none"
    drp.style.backgroundColor = "aquamarine"
    modeChangerButton.textContent = vMode;
    isdark = false


}
const chk = function () {
    if (isdark === true) {
        light()
    } else {
        dark()
    }

}


const drpActive = function () {
    isdrpdn = true
    drp.style.visibility = "visible"
    over.style.visibility = "visible"


}
const drpdeactive = function () {
    isdrpdn = false
    drp.style.visibility = "hidden"
    over.style.visibility = "hidden"
}

const dropdownCaller = function () {

    if (isdrpdn) {
        drpdeactive()

    }
    else {
        drpActive()

    }
}

const randomizer = function () {

    let prr = [];
    let random = Math.floor((Math.random() * 3))
    for (let index = 0; index < 3; index++) {


        while ((prr.includes(random))) {
            random = Math.floor((Math.random() * 3))


        }

        prr.push(random);

        ims[index].src = `mdu${random}.jpg`
        console.log(prr);


    }




}

randomizer()








plusButton.addEventListener("click", increaser)
minusButton.addEventListener("click", decreaser)
modeChangerButton.addEventListener("click", chk)
prof.addEventListener("click", dropdownCaller)
over.addEventListener("click", drpdeactive)







