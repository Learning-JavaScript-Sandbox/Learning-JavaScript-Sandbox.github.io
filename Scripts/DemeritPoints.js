console.log('DemeritPoints');
function main(){
  let speed = document.getElementById('speed').value;
  speed = Number(speed);

  let demeritPoints = (speed-70)/5;
  demeritPoints = Math.floor(demeritPoints);

  document.getElementById('output').innerHTML = (demeritPoints)+' ';
}
