let lightBtn = document.querySelector("#light-btn");
let darkBtn = document.querySelector("#dark-btn");

lightBtn.addEventListener("click", (e) => {
    
    // First change the icon colors
    lightBtn["style"] = "filter: invert(18%) sepia(10%) saturate(849%) hue-rotate(182deg) brightness(93%) contrast(82%)"; 
    darkBtn["style"] = "filter: invert(99%) sepia(1%) saturate(1009%) hue-rotate(329deg) brightness(112%) contrast(74%)";

    lightBtn["draggable"] = false;
    darkBtn["draggable"] = false;

    // Change main background color
    let body = document.querySelector("body");
    body["style"] = "background-color : #242323";

    // Change calculator shadow
    let calcContainer = document.querySelector("#calc-container");
    calcContainer["style"] = "box-shadow: rgba(205, 205, 162, 0.25) 0px 2px 5px -1px, rgba(255, 255, 255, 0.3) 0px 1px 3px -1px"

    // Change the color scheme
    let r = document.querySelector(':root'); // Root element
    let rs = getComputedStyle(r); // Computed styles

    r.style.setProperty("--primary-bg-color", rs.getPropertyValue("--primary-bg-color-light"))
    r.style.setProperty("--secondary-bg-color", rs.getPropertyValue("--secondary-bg-color-light"))
    r.style.setProperty("--primary-text-color", rs.getPropertyValue("--primary-text-color-light"))
    r.style.setProperty("--secondary-text-color", rs.getPropertyValue("--secondary-text-color-light"))
    r.style.setProperty("--tertiary-text-color", rs.getPropertyValue("--tertiary-text-color-light"))
    r.style.setProperty("--green-text-color", rs.getPropertyValue("--green-text-color-light"))
    r.style.setProperty("--red-text-coor", rs.getPropertyValue("--red-text-coor-light"))
    r.style.setProperty("--icon-inactive", rs.getPropertyValue("--icon-inactive-light"))
    r.style.setProperty("--icon-active", rs.getPropertyValue("--icon-active-light"))
    r.style.setProperty("--btn-color", rs.getPropertyValue("--btn-color-light"))
    r.style.setProperty("--btn-depth", rs.getPropertyValue("--btn-depth-light"))
});

darkBtn.addEventListener("click", (e) => {
   // First change the icon colors
   lightBtn["style"] = "filter: invert(18%) sepia(10%) saturate(849%) hue-rotate(182deg) brightness(93%) contrast(82%)"; 
   darkBtn["style"] = "filter: invert(99%) sepia(1%) saturate(1009%) hue-rotate(329deg) brightness(112%) contrast(74%)";

   lightBtn["draggable"] = false;
   darkBtn["draggable"] = false;

   // Change main background color
   let body = document.querySelector("body");
   body["style"] = "background-color : #f4f2f2";

   // Change calculator shadow
    let calcContainer = document.querySelector("#calc-container");
    calcContainer["style"] = "box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
   // Change the color scheme
   let r = document.querySelector(':root'); // Root element
   let rs = getComputedStyle(r); // Computed styles

   r.style.setProperty("--primary-bg-color", rs.getPropertyValue("--primary-bg-color-dark"))
   r.style.setProperty("--secondary-bg-color", rs.getPropertyValue("--secondary-bg-color-dark"))
   r.style.setProperty("--primary-text-color", rs.getPropertyValue("--primary-text-color-dark"))
   r.style.setProperty("--secondary-text-color", rs.getPropertyValue("--secondary-text-color-dark"))
   r.style.setProperty("--tertiary-text-color", rs.getPropertyValue("--tertiary-text-color-dark"))
   r.style.setProperty("--green-text-color", rs.getPropertyValue("--green-text-color-dark"))
   r.style.setProperty("--red-text-coor", rs.getPropertyValue("--red-text-coor-dark"))
   r.style.setProperty("--icon-inactive", rs.getPropertyValue("--icon-inactive-light"))
   r.style.setProperty("--icon-active", rs.getPropertyValue("--icon-active-dark"))
   r.style.setProperty("--btn-color", rs.getPropertyValue("--btn-color-dark"))
   r.style.setProperty("--btn-depth", rs.getPropertyValue("--btn-depth-dark"))
});

let numberField = "";
let displayNumberField = "";

function updateDisplayNumberField() {
    
}

numBtns = document.querySelectorAll('.num-btn');
numBtns.forEach((btn) => {
    num-btn
})