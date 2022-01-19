const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');



const setTimer = (input) => {
  input = Number(input)
  if (Number.isNaN(input) === false || input > 0) {
    setTimeout(() => {
      //console.log('BEEP') // Test for when volume is muted
      process.stdout.write('\x07');
    }, input * 1000);
  }
};


stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  setTimer(key)
});

