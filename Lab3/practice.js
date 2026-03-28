// 1
const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumArray([1, 2, 3, 4, 5]));


// 2
function factorialFor(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function factorialWhile(n) {
    let fact = 1;
    let i = 1;
    while (i <= n) {
        fact *= i;
        i++;
    }
    return fact;
}

console.log(factorialFor(5));
console.log(factorialWhile(5));


// 3
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam"));


// 4
console.log("var:");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

console.log("let:");
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}


// 5
const person = (name, age) => ({ name, age });
const user = person("Mausam", 22);
console.log(`Hello, my name is ${user.name} and I am ${user.age} years old.`);


// 6
const htmlTemplate = `
<div>
  <h1>Welcome</h1>
  <p>This is a multi-line template.</p>
</div>
`;

document.body.innerHTML += htmlTemplate;


// 7
function product(...nums) {
    return nums.reduce((acc, num) => acc * num, 1);
}

console.log(product(2, 3, 4));


// 8
const original = { name: "Mausam", age: 21 };
const copy = { ...original, age: 22 };

console.log(original);
console.log(copy);


// 9
const words = ["hello", "world"];
const upperWords = words.map(word => word.toUpperCase());

console.log(upperWords);


// 10
const nums = [1, 2, 2, 3, 4, 4];
const uniqueNums = [...new Set(nums)];

console.log(uniqueNums);


// 11
const students = [
    { name: "A", age: 22, marks: 80 },
    { name: "B", age: 20, marks: 90 },
    { name: "C", age: 21, marks: 70 }
];

students.sort((a, b) => a.age - b.age);
console.log(students);

students.sort((a, b) => b.marks - a.marks);
console.log(students);


// 12
const obj = { name: "Mausam", age: 22, city: "Janakpur" };

for (let key in obj) {
    console.log(key, obj[key]);
}