//simple json method
// const obj1 ={
//     age : 5,
//     name: "person1",
// };
// const obj2 ={
//     name: "person1",
//     age : 5,
// };
//  console.log(obj1===obj2);

//functions
//basic function method
// function funname(){
//     console.log("statement 1");
//     console.log("statement 2");
//     console.log("statement 3");
//      console.log("statement 4");
// }
// funname();


//b();
// function declaration method
//  function b(){
//     console.log(c);
//var c=25
// }
function askmyname(){
    console.log("barathi");
}
askmyname();

function giveyourName(name) {   //name ->parameters
    console.log(`Hi ${name}, nice to know you`);

}
giveyourName("barathi"); //barathi -> arguments


//another method
function giveyourName(name1,name2) {   //name ->parameters
    console.log(`Hi ${name1} and ${name2}, nice to know you`);

}
giveyourName("barathi","sarathi"); 
//barathi , sarathi-> arguments

//first class functions or first order function

//we can use it as a commmon data type

function returnmyname(name) {
    return name;
}

const myname = returnmyname("barathi");
console.log (myname); 

function myage(age) {
    console.log(age);
}

myage(22);

function executefunc(func,age){
    // console.log(func(age));
    console.log(myage(25));
}

executefunc(myage,25);


function greetme(myname1){
    return(`hey ${
         myname1}, welcome to guvi`);
}
function executefunction(fn,arg){
    console.log(fn(arg));
}
executefunction(greetme,"siva");

//pure function
// any functions that return same output for same input
