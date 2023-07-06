let lightBtn = document.querySelector("#light-btn");
let darkBtn = document.querySelector("#dark-btn");

lightBtn.addEventListener("click", (e) => {
    // First change the icon colors
    lightBtn["style"] =
        "filter: invert(18%) sepia(10%) saturate(849%) hue-rotate(182deg) brightness(93%) contrast(82%)";
    darkBtn["style"] =
        "filter: invert(99%) sepia(1%) saturate(1009%) hue-rotate(329deg) brightness(112%) contrast(74%)";

    lightBtn["draggable"] = false;
    darkBtn["draggable"] = false;

    // Change main background color
    let body = document.querySelector("body");
    body["style"] = "background-color : #242323";

    // Change calculator shadow
    let calcContainer = document.querySelector("#calc-container");
    calcContainer["style"] =
        "box-shadow: rgba(205, 205, 162, 0.25) 0px 2px 5px -1px, rgba(255, 255, 255, 0.3) 0px 1px 3px -1px";

    // Change the color scheme
    let r = document.querySelector(":root"); // Root element
    let rs = getComputedStyle(r); // Computed styles

    r.style.setProperty(
        "--primary-bg-color",
        rs.getPropertyValue("--primary-bg-color-light")
    );
    r.style.setProperty(
        "--secondary-bg-color",
        rs.getPropertyValue("--secondary-bg-color-light")
    );
    r.style.setProperty(
        "--primary-text-color",
        rs.getPropertyValue("--primary-text-color-light")
    );
    r.style.setProperty(
        "--secondary-text-color",
        rs.getPropertyValue("--secondary-text-color-light")
    );
    r.style.setProperty(
        "--tertiary-text-color",
        rs.getPropertyValue("--tertiary-text-color-light")
    );
    r.style.setProperty(
        "--green-text-color",
        rs.getPropertyValue("--green-text-color-light")
    );
    r.style.setProperty(
        "--red-text-coor",
        rs.getPropertyValue("--red-text-coor-light")
    );
    r.style.setProperty(
        "--icon-inactive",
        rs.getPropertyValue("--icon-inactive-light")
    );
    r.style.setProperty(
        "--icon-active",
        rs.getPropertyValue("--icon-active-light")
    );
    r.style.setProperty(
        "--btn-color",
        rs.getPropertyValue("--btn-color-light")
    );
    r.style.setProperty(
        "--btn-depth",
        rs.getPropertyValue("--btn-depth-light")
    );
});

darkBtn.addEventListener("click", (e) => {
    // First change the icon colors
    lightBtn["style"] =
        "filter: invert(18%) sepia(10%) saturate(849%) hue-rotate(182deg) brightness(93%) contrast(82%)";
    darkBtn["style"] =
        "filter: invert(99%) sepia(1%) saturate(1009%) hue-rotate(329deg) brightness(112%) contrast(74%)";

    lightBtn["draggable"] = false;
    darkBtn["draggable"] = false;

    // Change main background color
    let body = document.querySelector("body");
    body["style"] = "background-color : #f4f2f2";

    // Change calculator shadow
    let calcContainer = document.querySelector("#calc-container");
    calcContainer["style"] =
        "box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";
    // Change the color scheme
    let r = document.querySelector(":root"); // Root element
    let rs = getComputedStyle(r); // Computed styles

    r.style.setProperty(
        "--primary-bg-color",
        rs.getPropertyValue("--primary-bg-color-dark")
    );
    r.style.setProperty(
        "--secondary-bg-color",
        rs.getPropertyValue("--secondary-bg-color-dark")
    );
    r.style.setProperty(
        "--primary-text-color",
        rs.getPropertyValue("--primary-text-color-dark")
    );
    r.style.setProperty(
        "--secondary-text-color",
        rs.getPropertyValue("--secondary-text-color-dark")
    );
    r.style.setProperty(
        "--tertiary-text-color",
        rs.getPropertyValue("--tertiary-text-color-dark")
    );
    r.style.setProperty(
        "--green-text-color",
        rs.getPropertyValue("--green-text-color-dark")
    );
    r.style.setProperty(
        "--red-text-coor",
        rs.getPropertyValue("--red-text-coor-dark")
    );
    r.style.setProperty(
        "--icon-inactive",
        rs.getPropertyValue("--icon-inactive-light")
    );
    r.style.setProperty(
        "--icon-active",
        rs.getPropertyValue("--icon-active-dark")
    );
    r.style.setProperty("--btn-color", rs.getPropertyValue("--btn-color-dark"));
    r.style.setProperty("--btn-depth", rs.getPropertyValue("--btn-depth-dark"));
});

let numberField = "";
let secondaryNumberField = "";
let activeOperator = undefined;

let history = [];

function displayNumberField(num) {
    if (num == "") {
        return 0;
    }

    if (num.charAt(num.length - 1) == ".") {
        return `${num}0`;
    }

    if (num.length > 8) {
        num = Number(num).toExponential();
    }

    if (num.length > 8) {
        return "" + Number(num).toPrecision(8);
    }

    return num;
}

function unselectOperators(op = undefined) {
    let calcBtns = document.querySelectorAll(".calc-btn");
    activeOperator = undefined;
    calcBtns.forEach((btn) => {
        if (btn != op) {
            btn.classList.remove("active-operator");
        }
    });
}

// Function (Green) Buttons
let acbtn = document.querySelector("#ac-btn");
acbtn.addEventListener("click", (e) => {
    unselectOperators();
    numberField = "";
    secondaryNumberField = "";
    numberDisplay.textContent = displayNumberField(numberField);
});

let pmBtn = document.querySelector("#pm-btn");
pmBtn.addEventListener("click", (e) => {
    numberField = numberField * -1;
    numberField += "";
    numberDisplay.textContent = displayNumberField(numberField);
});

// Operator buttons
let operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((op) => {
    numberField;
    op.addEventListener("click", (e) => {
        unselectOperators(op);
        op.classList.toggle("active-operator");

        if (op.classList.contains("active-operator")) {
            activeOperator = op.textContent;
        } else {
            activeOperator = undefined;
            secondaryNumberField = "";
        }
    });
});

// Dot button (decimal)
let dotBtn = document.querySelector("#dot-btn");
dotBtn.addEventListener("click", (e) => {
    if (!activeOperator) {
        if (numberField.length > 0 && numberField.indexOf(".") == -1) {
            numberField = `${numberField}.`;
            numberDisplay.textContent = displayNumberField(numberField);
        }
    } else {
        if (
            secondaryNumberField.length > 0 &&
            secondaryNumberField.indexOf(".") == -1
        ) {
            secondaryNumberField = `${secondaryNumberField}.`;
            numberDisplay.textContent =
                displayNumberField(secondaryNumberField);
        }
    }
});

// Undo button (remove a char)
let redoBtn = document.querySelector("#redo-btn");
redoBtn.addEventListener("click", (e) => {
    if (!activeOperator) {
        if (numberField.length > 0) {
            numberField = numberField.substring(0, numberField.length - 1);
        }

        numberDisplay.textContent = displayNumberField(numberField);
    } else {
        if (secondaryNumberField.length > 0) {
            secondaryNumberField = secondaryNumberField.substring(
                0,
                secondaryNumberField.length - 1
            );
        }

        numberDisplay.textContent = displayNumberField(secondaryNumberField);
    }
});

// Number buttons
let numBtns = document.querySelectorAll(".num-btn");
let numberDisplay = document.querySelector("#number-display");
numBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (numberField.length < 12 && !activeOperator) {
            if (numberField.length == 0 && btn.textContent == 0) {
                return;
            }

            numberField = `${numberField}${btn.textContent}`;
            numberDisplay.textContent = displayNumberField(numberField);
        } else if (secondaryNumberField.length < 12 && activeOperator) {
            if (secondaryNumberField.length == 0 && btn.textContent == 0) {
                return;
            }

            secondaryNumberField = `${secondaryNumberField}${btn.textContent}`;
            numberDisplay.textContent =
                displayNumberField(secondaryNumberField);
        }
    });
});

function computeEquation() {
    switch (activeOperator) {
        case "%":
            return numberField % secondaryNumberField;
        case "÷":
            return numberField / secondaryNumberField;
        case "×":
            return numberField * secondaryNumberField;
        case "-":
            return numberField - secondaryNumberField;
        case "+":
            return (-numberField - secondaryNumberField) * -1;
    }
}

function updateHistory() {
    const opacityModifier = 15;
    const numHistory = document.querySelector("#number-history");

    const allHistory = document.querySelectorAll(".prev-calculation");
    allHistory.forEach((c) => {
        c.remove();
    });

    for (let i = 0; i < Math.min(5, history.length); i++) {
        const nextItem = document.createElement("div");
        nextItem.setAttribute("class", "prev-calculation");
        nextItem.style["opacity"] = `${100 - opacityModifier * i}%`;
        nextItem.innerHTML = `${history[i]["a"]} <span class="operator-text">${history[i]["operator"]}</span> ${history[i]["b"]}`;

        numHistory.appendChild(nextItem);
    }
}

// Equals (compute)
eqBtn = document.querySelector("#eq-btn");
eqBtn.addEventListener("click", (e) => {
    if (activeOperator != undefined) {
        let output = computeEquation();
        history.unshift({
            a: numberField,
            operator: activeOperator,
            b: secondaryNumberField,
        });

        updateHistory();
        unselectOperators();

        numberField = "" + Math.round((output + Number.EPSILON) * 100) / 100;
        secondaryNumberField = "";

        numberDisplay.textContent = displayNumberField(numberField);
    }
});
