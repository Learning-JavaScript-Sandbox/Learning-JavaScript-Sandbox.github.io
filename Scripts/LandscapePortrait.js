console.log('landscapePortrait');
function main() {
  let width, height;

  width = document.getElementById("width").value;
  height = document.getElementById("height").value;

  width = Number(width);
  height = Number(height);

  if (width > height) {
    document.getElementById('output').innerHTML = ("Landscape");
  }else if (height > width) {
    document.getElementById('output').innerHTML = ('Portrait');
  }else if (width == height){
    document.getElementById('output').innerHTML = ('Perfect Square');
  }else {
    document.getElementById('output').innerHTML = ('One of your inputs is not a real number!');
  }

  if(isNaN (width)){
    document.getElementById('verifyW').innerHTML = ('Verify Check: Please enter a real number!')
  }else {
    document.getElementById('verifyW').innerHTML = ('Verify Check: Your number is good!!')
  }

  if(isNaN (height)){
    document.getElementById('verifyH').innerHTML = ('Verify Check: Please enter a real number!')
  }else {
    document.getElementById('verifyH').innerHTML = ('Verify Check: Your number is good!!')
  }
}
