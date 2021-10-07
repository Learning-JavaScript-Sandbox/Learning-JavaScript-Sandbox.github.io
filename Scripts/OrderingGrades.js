console.log('orderingGrades');
function main() {
  let grade1, grade2, grade3, grade4, grade5;
  let finalNumber = 0;
  let divisor = 0

  grade1 = document.getElementById('grade1').value;
  grade2 = document.getElementById('grade2').value;
  grade3 = document.getElementById('grade3').value;
  grade4 = document.getElementById('grade4').value;
  grade5 = document.getElementById('grade5').value;

  grade1 = Number(grade1);
  grade2 = Number(grade2);
  grade3 = Number(grade3);
  grade4 = Number(grade4);
  grade5 = Number(grade5);


  if (grade1 > 0) {
    finalNumber += grade1
    divisor++
  }

  if (grade2 > 0) {
    finalNumber += grade2
    divisor++
  }

  if (grade3 > 0) {
    finalNumber += grade3
    divisor++
  }
  if (grade4 > 0){
    finalNumber += grade4
    divisor++
  }
  if (grade5 > 0){
    finalNumber += grade5
    divisor++
  }

  let grade = finalNumber/divisor

  if (grade <= 59) {
    document.getElementById('output').innerHTML = ('F')
  }else if (grade <= 69) {
    document.getElementById('output').innerHTML = ('D')
  }else if (grade <= 79) {
    document.getElementById('output').innerHTML = ('C')
  }else if (grade <= 89) {
    document.getElementById('output').innerHTML = ('B')
  }else if (grade <= 100) {
    document.getElementById('output').innerHTML = ('A')
  }else {
    document.getElementById('output').innerHTML = ('please make sure your 5 numbers are between 1 and 100!')
  }
}
