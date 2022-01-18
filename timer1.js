const tail = require('../../../w1/lotide/tail');

const inputs = tail(tail(process.argv));

console.log(inputs)

const setTimer = (input) => {
  setTimeout(() => {
    process.stdout.write('\x07');
    //console.log(input)
  }, input * 1000);

};


for (let i = 0; i < inputs.length; i++) {
  inputs[i] = Number(inputs[i])
  //console.log(inputs[i], inputs[i] !== NaN)
  if (Number.isNaN(inputs[i]) === false || inputs[i] > 0) {
    //console.log(inputs[i])
    setTimer(inputs[i]);
  }
}