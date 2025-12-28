document.addEventListener("DOMContentLoaded", () => {
    //Input field
    const calInputField = document.getElementById("calculator-input-field");
    // All buttons
    const cancelBtn = document.getElementById("cancel-btn");
    const divisionBtn = document.getElementById("division-btn");
    const multiplicationBtn = document.getElementById("multiplication-btn");
    const substractionBtn = document.getElementById("substraction-btn");
    const additionBtn = document.getElementById("addition-btn");
    const backBtn = document.getElementById("back-btn");
    const dotBtn = document.getElementById("dot-btn");
    const equalsBtn = document.getElementById("equals-btn");
    // All Numbers
    const numbersBtns = document.querySelectorAll("#number-btn");
    
    numbersBtns.forEach(numbersBtn => {
        numbersBtn.addEventListener("click", () => {
            calInputField.value += numbersBtn.textContent;
        });
    });

    cancelBtn.addEventListener("click", () => {
        calInputField.value = "";
    });

    divisionBtn.addEventListener("click", () => {
        calInputField.value += divisionBtn.textContent;
    });

    multiplicationBtn.addEventListener("click", () => {
        calInputField.value += multiplicationBtn.textContent;
    });

    substractionBtn.addEventListener("click", () => {
        calInputField.value += substractionBtn.textContent;
    });

    additionBtn.addEventListener("click", () => {
        calInputField.value += additionBtn.textContent;
    });

    backBtn.addEventListener("click", () => {
        calInputField.value = calInputField.value.slice(0, -1);
    });

    dotBtn.addEventListener("click", () => {
        calInputField.value += dotBtn.textContent;
    });

    equalsBtn.addEventListener("click", () => {
        try {
            calInputField.value = eval(calInputField.value);
        } 
        catch (error) {
            calInputField.value = "Error";
        }
    });
});