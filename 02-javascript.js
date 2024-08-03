//Destructuring
let obj1 = {
  name1: "Vaishnavi",
  class1: "10b",
  favLang: "Javascript",
};

// let name = obj1.name;
// let class1 = obj1.class1;
// let favLang = obj1.favLang;

//the alternate of the above
let { name1, class1, favLang } = obj1;
console.log(name1, class1, favLang);
