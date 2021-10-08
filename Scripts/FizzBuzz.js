console.log('FizzBuzz');
function main(){
  let number;
  number = document.getElementById('num-inp').value
  number = Number(number);

  if(number%3 == 0 && number%5 == 0) {
    document.getElementById('output').innerHTML = ('FizzBuzz');
  }else if (number%5 == 0) {
    document.getElementById('output').innerHTML = ('Buzz');
  }else if (number%3 == 0) {
    document.getElementById('output').innerHTML = ('Fizz');
  }else if (number%3 != 0 || number%5 != 0) {
    document.getElementById('output').innerHTML = (number);
  }

}
