console.log('Greetinsum1');
function main() {
  let time, amPm;
  time = document.getElementById('time').value;
  amPm = document.getElementById('am-pm').value.toLowerCase();

  time = Number(time);

  if (time <= 700 && amPm == 'am') {
    document.getElementById('output').innerHTML = ('GoodMorning!')
  }else if (time <= 1159 && amPm == 'am') {
    document.getElementById('output').innerHTML = ('How is your morning!')
  }else if (time <= 759 && amPm == 'pm') {
    document.getElementById('output').innerHTML = ('Fine Afternoon isn\'t it?!')
  }else if (time <= 1159 && amPm == 'pm') {
    document.getElementById('output').innerHTML = ('GoodNight!')
  }
}
