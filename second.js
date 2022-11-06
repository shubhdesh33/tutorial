
var v = 9;
document.write(v);
document.write('<br>');

console.log(v);

let carname = "volvo";
let person = "shubham";
let price = 250;
document.write(carname);
document.write('<br>');
document.write(price);

var x = 10;
var x = 20;
document.write('<br>');
document.write(x);
document.write('<br>');

let c = 80;
document.write(c);
document.write('<br>');


{
  let c = 7;
  document.write(c);
  document.write("<br>");

}
//  fname = shubham;
// var fname;
// document.write(fname);


let z = 58;  // let is define declaration.
z = 32;              // it's not have any define declaration.
document.write(z);
document.write("<br>");

var s = 50;
var _s = "hello";
document.write(_s);

{
  var fdc = 46;                      // var define inside the scope
  document.write('<br>');           //var call for inside
  console.log(fdc);                  //we get output
  document.write(fdc);

}
console.log(fdc);              //var call for outside ---we get a output

{

  document.write('<br>');
  let mn = 777;                     //inside the scope variable (mn) with let --we get output
  document.write(mn);

}
//document.write(mn);        error found ---mn is not defined because its outside the block and value define in inside scope

// this is  a constant example      

const constant = "constant";
document.write('<br>');

document.write(constant);

{                                      // scope start
  document.write('<br>');
  var sd = 45;
  document.write(sd);
  document.write('<br>');            //var output get in both inside and outside the block but with let not give the answer

}
document.write(sd);                       // output outside the scope
document.write('<br>');


{
  let sd = 54;                    //no effect of same identifier or variable. that is   (sd)
  document.write(sd);           //in this takes the value of inside block let sd=54 
}

document.write('<br>');

document.write(sd);          //in this takes the value of var sd = 45 this is a example of global scope


{
  var md = 33;
  document.write('<br>');
  console.log(md);
}



var x = 44;              //global variable

function a() {            //block scope
  console.log(x);
}
a();                 //function calling we want to get a function answer, call to a()


console.log(x);


function b() {
  let kd = 55;                    //local variable
  document.write(kd);
}

b()
//       [ console.log(kd); ]           output not get because its outside the block.

document.write('<br>');


function ab() {
  //var km =  "this is a window object examle";
  window.km = "this is a window object example";  // dont use a window with declaration var ;; pls use ( . ) after window

}
ab();
document.write(window.km);     //to get a output from outside the block;   which is define  inside a block scope. using window


define();                            //pls dont forget to call
function define() {
  document.write("<br>");
  document.write(window.km);         //to get a output/variable in function which is define in another function by using def

}
document.write("<br>");
document.write(window.s)                   //this output belong to global


/*{
  let st = 20;
}
document.write(st);   */                       //  this output not get because call from outside the block with let . it is possible with var keyword

{
  var mt = 30;

}
document.write(mt);                              //with var to get o/p outside the block


document.write("<br>");

var fg = 89;
document.write(fg);

document.write("<br>");

{
  var fg = 23;
  document.write(fg);
}

document.write("<br>");
let fgh = 58;
document.write(fgh);


document.write("<br>");
{
  let fgh = 63;
  document.write(fgh);

}



document.write("<h3>IF ELSE</h3>");

let gender2 = "male";
let gender1 = "female";                             //text taken in string   ( " ")
let age = 25;
let belowage = 26;                              //no space betwwen variable ==belowage
let aboveage = 27;                              //variable madhe space nhi pahije         IMP==let madhe condition apply hot nhi ( > < ) 

if (age >= 25 && belowage <= 24) {
  document.write("not allowed");                           //if execute nhi zala tr else execute honar

}
else if (age >= 30 || belowage >= 48) {                                         // ya problem madhe <  cha problem solve kara output madhe
  document.write("only female allowed");                                        // answer false aala ki tyacha output ghenar nhi
}
else {                                                        //else madhe condition aply hot nhi
  document.write("only male allowed")                            // if execute nhi zala tr ch else execute honar

}
document.write("<br>");
document.write("<br>");


//if input = 1; "y"; "yes" output=continue....
// if input= 0; "n"; "no"  output = end....

var input;
input = "";                                          // put below all condition

if (input == 1) {
  document.write("continue");
}
else if (input === "y") {
  document.write("continue");
}
else if (input === "yes") {
  document.write("continue");
}
else if (input === 0) {
  document.write("end");
}
else if (input === "n") {
  document.write("end");
}
else if (input === "no") {
  document.write("end");
}
else {
  document.write("This is final");                       //above condition is not satisfy so else condition (default) execute. 
}

document.write("<h3>Switch </h3>");

// switch comparision only works with ===

var input;
input = 0;

switch (input) {                             //switch case woek same like if else
  case 1: // if(input ==1)
    document.write("end");
    break;
  case "y": // (input === "y") 
    document.write("end");
    break;                                    // { } == ha block element ahe condition satisfy zala ki toh direct baher yeto}
  case "yes": // if(input ==="yes")                    
    document.write("end");
    break;
  case 0: // if(input ===0)
    document.write("get output");
    break;
  case "n": // if(input ==="n")
    document.write("end");
    break;
  case "no": // if(input ==="yes")
    document.write("end");
    break;
  default:
    document.write("wrong input");

}

document.write("<h3> Data type </h3>");                                       // data type tell the which type of data type are store in variable i.e-- Array, object

var dmk = 5;
var dmk = "shu";                                            // string are denote in two type  let x= "shubham";      "shubham 'deshmukh'"
//                             let y = 'deshmukh';       "shubham\"deshmukh""     
dmk = "desh"

document.write(dmk);
//alphabet are not in string (" ") then called variable & show in blue color.

//  boolean  data tye : check the condition & give the answer in true or false .

document.write("<br>");
let mk = 2 > 3;
document.write(mk);

// Array data type : we can store multiple vaule in single variable
var ips = ["shubham", 25, "deshmukhh"];
document.write(ips[1]);















function counter() {
  
  // Private counter variable
  let count = 0;
  
  // To increment the value of counter
  function increment() {
    count++;
  }
  
  // To decrement the value of counter
  function decrement() {
    count--;
  }
  
  // Modify function forms closure
  // here which is used outside
  function modify(val) {
  
    // To check increment or decrement
    // button has been clicked
    if (val === "1") increment();
    else if (val === "0") decrement();
  
    // Return the counter
    return count;
  }
  
  // Returning to make it available
  // outside counter function
  return modify;
}
  
// Storing the closure modify
const closure = counter();
  
// This function handles the button
// click, objButton to get value
function counterHandler(objButton) {
  
  // Storing the value return by modify
  let count = closure(objButton.value);
  
  // Getting div by it's id
  // and modifying its inner html
  document.getElementById("counter_div")
    .innerHTML = "<h2>" + count + "</h2>";
}
