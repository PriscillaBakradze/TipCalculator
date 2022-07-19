"use strict";
let calculate = document.getElementById("calculate");

calculate.addEventListener("click", () => {
    let bill = document.getElementById("bill").value;
    let tip = document.getElementById("tip").value;
    let split = document.getElementById("split").value;

    //Validation
    if (bill === "" || tip === "" || split === "") {
        document.getElementById("invalid").innerHTML = "Please fill out all the fields.";
        return;
    }
    //Calculation
    let tipAsPercent = tip / 100;
    let totalTipAmount = bill * tipAsPercent;
    let totalBill = bill * 1 + totalTipAmount;
    let billPerPerson = totalBill / split;
    let theTotal = billPerPerson.toFixed(2);
    //Display
    document.getElementById("totalPerPerson").innerHTML = theTotal;
    document.getElementById("invalid").innerHTML = "";
});
