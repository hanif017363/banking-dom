let number = [10, 20, 30, 40, 50, 55, 93, 42];

for (let i = 0; i <= number.length - 1; i++) {
  let value = number[i];
  if (value % 10 !== 0) {
    console.log(value);
  }
}
// ** function
function functionNamed(params) {
  console.log("i am nigger");
}
functionNamed();

function retard() {
  let a = 20;
  let b = 12;
  let sub = a - b;
  console.log(sub);
}
retard();
// another
function lett() {
  let a = 20;
  let b = 10;
  let bub = a - b;
  return bub;
}
let go = lett();
console.log(go);
// perameteres and arguments
// function n(parameters) {
//   let arguments;
// }
// n(arguments);

function p(a, b) {
  let c = a + b;
  console.log(c);
}
p(100, 20);
// default vallue
function sub(x = 10, y = 5) {
  let z = x - y;
  console.log(z);
}
sub();
// projject feet to inch
let feet = 10;
function feetToinch(feet) {
  let inch = feet * 12;
  return inch;
}

let res = feetToinch(feet);
console.log(feet, "feet", "=", res, "inch");
//              project kilo to meter
let kilo = 30;
function kiloTometer(kilo) {
  let meter = kilo * 1000;
  return meter;
}
let les = kiloTometer(kilo);
console.log(kilo, "Kilometer", "=", les, "meter");
//           project kilo to mile
let cilo = 10;
function kiloTomile(cilo) {
  let mile = cilo / 1.63;
  return mile;
}
let pes = kiloTomile(cilo);
console.log(cilo, "kilometer", "=", pes, "mile");

//               body mass index
function bmi(weight, height) {
  let cal = weight / (height * height);
  let roundedVal = Math.round(cal);
  if (roundedVal <= 18 || roundedVal >= 24) {
    return "you need to take care of your body";
  } else {
    return "HEALTH IS WEALTH!!";
  }
}
let resBmi = bmi(70, 1.77);
console.log(resBmi);
//           leap year checking
function leap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year / 400 === 0) {
    return "leap year ";
  } else {
    return "not leap year";
  }
}
let GivenYear = 2100;
let leapRes = leap(GivenYear);
console.log(GivenYear, ":", leapRes);
//               object
let mobile = {
  name: "xiaomi",
  sixe: 8,
  color: "black",
};
console.log(mobile.name);
//            change value
mobile.sixe = 6;
mobile["name"] = "samsung";
let myAr = "color";
mobile[myAr] = "white";
console.log(mobile);
//            break and continue loop

for (let numBer = 0; numBer <= 10; numBer += 1) {
  if (numBer >= 5) {
    break;
  }
  console.log(numBer);
}
for (let Number = 0; Number <= 20; Number++) {
  if (Number === 10) {
    continue;
    //  continue means skip that number
  }
  console.log(Number);
}
//              swapping
let a = 10;
let b = 20;
console.log(a, b);
let temp = a;
a = b;
b = temp;
console.log(a, b);
//                distructering
let f = 10;
let g = 20;
[f, g] = [g, f];
console.log("f", "=", f, "g", "=", g);

//                sum
let key = [100, 200, 300, 400, 500];
let o = 0;
for (let plus = 0; plus <= key.length - 1; plus++) {
  let open = key[plus];
  o += open;
}
console.log(o);
///     sum with function
function sumofArry(key) {
  let o = 0;
  for (let plus = 0; plus <= key.length - 1; plus++) {
    let open = key[plus];
    o += open;
  }
  return o;
}
let tws = sumofArry(key);

console.log(tws);
// comaprison upper to lowwe cas

const tru = "Md Hanif";
const bru = "serach of tri";
console.log(tru.toLowerCase());
console.log(bru.indexOf("tri"));
//        searching with indexof
let hanif = "MD HANIF";
let md = "mD";
if (hanif.toLowerCase().indexOf(md.toLowerCase)) {
  console.log("Data found");
} else {
  console.log("data not found");
}
//            searching with include

if (hanif.includes(md)) {
  console.log("Data Found");
} else {
  console.log("Data Not Found");
}
//        convert string to array by split

const pol = "Dirty DEED Done DIRT Cheap";
const spit = pol.split(" ");
console.log(spit);
//          arry to string by join
const fruit = ["apple", "banana", "orange"];
const r = fruit.join(",");
console.log(r);
//               arry slice
let two = [12, 11, 13, 34, 45, 65, 70];
const one = two.slice(0, 5);
console.log(one);

//           arry splice
const three = two.splice(0, 4);
console.log(three);
console.log(two);
//            sort
const people = [2, 6, 3, 9, 1, 7, 2];
let sort = people.sort().reverse();
console.log(sort);
//       sort for double number
let tel = [11, 43, 67, 3, 45, 99, 45, 89];
let elt = tel.sort(function (a, b) {
  return a - b;
});
console.log(elt);
//          sum of  arguments
let sumy = 0;
function argu() {
  let ar = arguments;
  for (let num of ar) {
    sumy += num;
  }
}
argu(11, 12, 13, 14, 14, 14);
console.log(sumy);
//     ****lesson complete****
