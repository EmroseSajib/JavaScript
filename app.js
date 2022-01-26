// --------Function_example(one dimensional array)----------


// function highestScore(scores) {
//     var max = scores[0];
//     for (var x = 1; x < scores.length; x++) {
//         if (max < scores[x]) {
//             max = scores[x];
//         }
//     }
//     return console.log("Higest score: " + max);
// }

// var numbers = [21, 98, 1, 88, 15];
// highestScore(numbers);


//-----HOW TO CREATE AN OBJECT and print -------/////
// =====adding a constructor =========


// function Student(name, age, cgpa, lang) {
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;

//     //======== adding a function inside a constructor=========

//     this.display = function() {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);

//     }
// }
// var student1 = new Student("sajib", 27, 3.92, ["bangla", "english"]);
// var student2 = new Student("sajib", 27, 3.92, ["bangla", "english"]);
// var student3 = new Student("sajib", 27, 3.92, ["bangla", "english"]);

// student1.display();
// student2.display();
// student3.display();

//========= How to use Date_Object=========

// var date = new Date();
// console.log(date); //date a ki ki thake 
// var year = date.getFullYear();
// console.log(year);
// console.log(date.getMonth());
// console.log(date.getDate());

//======DOM SELECTOR ===============
//=====ID SELECTOR ======

// var name1 = document.getElementById("heading1");
// name1.innerHTML = "Hello Bangladesh";
// //=====TAG SELECTOR ======
// document.getElementsByTagName("h1")[1].innerHTML = "sajibBabu";
// // ======


// const person = { name: 'jack will', age: 22, school: 'satasish' };
// const { name, school } = person;
// console.log(name, school);

///==============JAVASCRIPT  ES6=====================/////


/////======ARROW Function============


// function display1() {
//     console.log('emrosesajib');
// }
// display1();

// const display2 = () => {
//     console.log('tongi gazipur');
// }
// display2();


//========Array Destructure========

//example -01

// let numbers = [10, 20, 30, 40];
// let [num1, num2, num3, num4] = numbers //we can access with this variable
// console.log(num1);
// console.log(num2);

//=========Object destructure

// example-01
// const studentInfo = {
//     id: 101,
//     fullName: 'emrose sajib',
//     gpa: 3.12
// }
// const { id, fullName } = studentInfo //easy way to access object value
// console.log(id);
// console.log(fullName);

// function destructure

// const studentInfo = ({ id, fullName }) => {
//     console.log(`${id},${fullName}`)
// }
// const student = {
//     id: 101,
//     fullName: 'emrose sajib'
// }
// studentInfo(student);

//==========Swap variable==========

//example-01-value swap

// let a = 10,
//     b = 20;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

///==========Find Method====

// let students = [{
//         id: 203,
//         gpa: 2.1
//     },
//     {
//         id: 204,
//         gpa: 4.5
//     }, {
//         id: 205,
//         gpa: 2.9
//     }

// ]

// console.log(students.find((x) => x.gpa > 4)); // all value are auto assign in x

////====Startswith(searchString,position)->check a string starts with another string

// const message = "Today is friday ";
// console.log(message.startsWith('Today')); // case sensitive

//// includes - check if a string contains another string

// const message = "Today is friday ";
// console.log(message.includes('is')); // case sensitive

///=======javascript Class===========

// class student {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
// }

// let s1 = new student(101, "Anisur");
// console.log(s1.name);