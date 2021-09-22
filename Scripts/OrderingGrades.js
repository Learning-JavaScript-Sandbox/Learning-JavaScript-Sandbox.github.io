console.log('orderingGrades');

let stop = false; //boolean for testNaN() validation function, see end of file.

function javascript () {  //where console.log tested file goes

}
// Main function, necessary lines of code
function main() {
  let firstNumber, secondNumber; //variables particular to js assignment, makes it work
  // get the value of the height input field, id="textfield1", assign it to a variable.
  firstNumber = document.getElementByID("textfield1").value;
  second  Number = document.getElementByID("textfield2").value;
  // validate by alert or HTML text in p-tag
  document.getElementByID("validatiyTest1").innerHTML = alert (testNaN (firstNumber));
  document.getElementByID("validatiyTest1").innerHTML = testNaN (firstNumber));
  document.getElementByID("validatiyTest2").innerHTML = alert (testNaN (secondNumber));
  document.getElementByID("validatiyTest2").innerHTML = testNaN (secondNumber));
}
//
function testNaN (number) {
  if ( isNaN (number)) { //NaN are not values of real number system
    stop = true;
    return "Type a Real Number"
  }else {
    return "Input Validated"
  }
}
