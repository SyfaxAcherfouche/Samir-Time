let value1El = document.getElementById("first-value");
let unit1El = document.getElementById("first-unit");
let value2El = document.getElementById("second-value");
let unit2El = document.getElementById("second-unit");
let btnEl = document.getElementById("convert-button");

const convertValue = () => {
    let value1 = value1El.value;
    let unit1 = unit1El.value;
    let unit2 = unit2El.value;

    let value1InLegalUnit;
    let convertedValue;
    
    switch (unit1) {
        case "st":
            value1InLegalUnit = value1 * 13;
            break;    
    }

    switch (unit2) {
        default:
            convertedValue = value1InLegalUnit;
            break;
    }

    value2El.value = convertedValue;
};


btnEl.addEventListener("click", convertValue)
unit2El.addEventListener("change", () => {
    value2El.value = '';
})