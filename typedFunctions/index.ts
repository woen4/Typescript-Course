/* TypeFunctions */
// How type a function

//First shape

function printer(callback: (string: string) => void) {
  console.log('print');
  const result = callback('Hey!');
}

function callback(string: string) {
  console.log(string);
}

printer(callback);

//Second shape

type Callback = (string: string) => void;

function printer2(callback: Callback) {
  console.log('print');
  const result = callback('Hey!');
}

function callback2(string: string) {
  console.log(string);
}

printer2(callback2);
