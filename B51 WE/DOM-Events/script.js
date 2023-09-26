//logger
const log = (param)=>console.log(param);

//result element
const resultstring=document.getElementById("result");



// Browser inbulid methods
function alertMsg(msg) {
    alert(msg); //returns nothing
    resultstring.innerText = "alert msg triggered"
}
// alertMsg("Hello there !");

function promptmsg(){
const name = prompt("can i get name", "default value");
 // return a string
//  if cancel returns null
log(name);
resultstring.innerText = name;
}

function confirmmsg(){
const result = confirm("have completed degree");
log(result);
// return ture or fales
resultstring.innerText = result;
}
//set time out
// log("started");
//2 args -> 1. function , 2.timer in ms
// const id = setTimeout(()=>{
//     log("timeout called")
//     log("ended")
// }, 3000);
// log(id);
let timeoutcounter =10;
function countDown(){
log(timeoutcounter);
timeoutcounter--;
const id = setTimeout(countDown,1000);
    if (timeoutcounter == 0){
        log("time out");
        clearTimeout(id);    }
}
countDown();