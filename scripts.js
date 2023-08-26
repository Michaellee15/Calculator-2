const form = document.querySelector("#calc-form");

const display = document.querySelector("#answer");

form.addEventListener("submit", function (event) {
    event.preventDefault();


    

    const num1 = Number(document.querySelector("#num1").value)
    const num2 = Number(document.querySelector("#num2").value)
    const operator = document.querySelector("#operator").value

    if(operator == "+") {
        document.querySelector("#answer").textContent = num1 + num2
    }
    if(operator == "-") {
        document.querySelector("#answer").textContent = num1 - num2
    }

    if(operator == "x") {
        document.querySelector("#answer").textContent = num1*num2
    }
    if(operator == "/") {
        document.querySelector("#answer").textContent = num1/num2
    }
    if(operator == "%") {
        document.querySelector("#answer").textContent = num1%num2
    }
    
});

document.querySelector(".clear").addEventListener("click", () => {
    document.querySelector("#answer").textContent = "";
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
});