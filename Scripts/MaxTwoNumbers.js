// max of two numbers
function main(){
  let numberA, numberB;

  numberA = document.getElementById("numberA").value;
  numberB = document.getElementById("numberB").value;

  numberA = Number(numberA);
  numberB = Number(numberB);

  if (numberA > numberB) {
    document.getElementById('output').innerHTML = (numberA);
  }else if (numberA < numberB) {
    document.getElementById('output').innerHTML = (numberB);
  }else if (numberA == numberB) {
    document.getElementById('output').innerHTML = ('They are Equal');
  }else {
    document.getElementById('output').innerHTML = ('At least one of these is not a number, please fix the error!');
  }

  if(isNaN (numberA)){
    document.getElementById('verify-A').innerHTML = ('Verify Check: Please enter a real number!')
  }else {
    document.getElementById('verify-A').innerHTML = ('Verify Check: Your number is good!!')
  }

  if(isNaN (numberB)){
    document.getElementById('verify-B').innerHTML = ('Verify Check: Please enter a real number!')
  }else {
    document.getElementById('verify-B').innerHTML = ('Verify Check: Your number is good!!')
  }
}
