/* Variables */

//Strings
const string: string = '';

//Numbers
let number: number = 2;

//Boolean
const boolean: boolean = true;

//Any: can be any value
let any: any = true;
any = 123;
any = '';

//Arrays
const arrayOfString: string[] = ['', '']; //First shape
const arrayOfString2: Array<String> = ['', '']; //Second shape
// * Both are accepted

const arrayOfNumbers: number[] = [1, 2, 3];
//...

//Enum's
enum Theme {
  dark = '',
  light = '',
}

// Unknown: It does not have a defined type,
//but it is not possible to access an attribute
const unknownString: unknown = '';

// unknownString.split(); => Error

//Objects: any object
const obj: object = {};

/* Functions */

function sum(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

//Not have return
function _console(message: string): void {
  console.log(message);
}
