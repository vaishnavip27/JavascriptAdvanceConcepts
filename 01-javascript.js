//Spread operator and Destructuring
arr = [1, 2, 3, 34, 23, 14, 21];

function avg(a, b, c) {
  return (a + b + c) / 3;
}

// let a = avg(...arr);

let a = [4, 7, ...arr, 67];
console.log(a);

//concatenation
let a2 = [5, 7, 9];
let b = [...arr, ...a2];
console.log(b);

//Example-3
let obj1 = {
  name: "Vaishnavi",
  class: "10b",
  favLang: "Javascript",
};

// let obj2 = {};
// obj2.name = obj1.name;
// obj2.class = obj1.class;
// obj2.favLang = "Rust";

// console.log(obj2);
console.log(obj1);

//Another approach
let obj2 = { ...obj1, favLang: "Rust" };
console.log(obj2);
