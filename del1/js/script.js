let yearsLeft = prompt("How many years do you have left in school?");
if (isNaN(yearsLeft)) {
    alert("Please type a correct number");
}
else if (yearsLeft === 0) {
    alert("Congratulations! You have finished school!");
}
else if (yearsLeft === 1) {
    alert("Nearly there!");
}
else if (yearsLeft === 2) {
    alert("Still learning!");
}
else if (yearsLeft === 3) {
    alert("Sucks to be you :)");
}
else if (yearsLeft >= 4) {
    alert("I hope you are kidding..");

}