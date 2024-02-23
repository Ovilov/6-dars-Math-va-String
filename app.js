let ism = "Saidakbar Ovilov";

console.log(ism.length);

////////////////////////////////

// let message = "ball bat";

// let result = message.replace('b', 'c');
// console.log(result);

////////////////////////////////

// const message = "ball bat";

// let result = message.replaceAll("b", "c");
// console.log(result);

//////////////////////////////////

// const message = "JavaScript is not Java ";

// const index = message.indexOf("va");

// console.log("index: " + index);

/////////////////////////////////

// var str = "Programming";

// var substr = "g";

// var result = str.lastIndexOf(substr);
// console.log(result);

/////////////////////////////////

// const message = "JavaScript is fun";

// let result = message.startsWith("Java");

// console.log(result);

// result = message.startsWith("k");

// console.log(result);

/////////////////////////////////

// let sentence = "Java is to JavaScript what Car is to Carpet.";

// let check = sentence.endsWith("to Carpet.");

// console.log(check);

/////////////////////////////////////////////////////

// const message = "JavaScript is fun";

// let result = message.includes("Java");
// console.log(result);

////////////////////////////////////////

// const holiday = "Happy holiday!";

// const result = holiday.repeat(8);

// console.log(result);

/////////////////////////////////////////////

// const string = "Hello World!";

// let index1 = string.charAt(0);

// console.log("Character at index 1 is " + index1);

///////////////////////////////////////////////

// const message = "JavaScript is fun.";

// let result = message.substring(6, 10);
// console.log(result);

////////////////////////////////////////////////

let string1 = "CODE";

let paddedString = string1.padEnd(10, "*");

console.log(paddedString);

////////////////////////////////////////////////////////

let myNumber = Number(prompt("Enter you number : "));
let ramdomNumber = Math.trunc(10 * Math.random()) + 1;

if (myNumber == ramdomNumber) {
  console.log("Siz topdingiz !");
} else {
  console.log(
    `Afsus siz  ${myNumber} kiritdingiz. Kompyuter chiqargan son :  ${ramdomNumber}`
  );
}
