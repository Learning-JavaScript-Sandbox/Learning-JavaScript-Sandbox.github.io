console.log('modulus');
function main() {
  let number1;
  number1 = document.getElementById('num-inp').value

  number1 = Number(number1);

  if (number1%2 == 0) {
    document.getElementById('output').innerHTML = ('Even')
  }else if (number1%2 == 1) {
    document.getElementById('output').innerHTML = ('Odd')
  }else {
    document.getElementById('output').innerHTML = ('Not a Real Number!')
  }

  if(isNaN (number1)){
    document.getElementById('verify').innerHTML = ('Verify Check: Please enter a real number!')
  }else {
    document.getElementById('verify').innerHTML = ('Verify Check: Your number is good!!')
  }
}
