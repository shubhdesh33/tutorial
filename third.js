// (alert("shubham" ,"deshmukh"));
// let x = 66;
// document.write(x);

// // let language = "marathi"
// // console.log ("language")                       not take declaration name in string format

// let language = "marathi"
// console.log (language)

// document.write("<br>")
// let name = "shubham"
// let surname = "deshmukh"

// document.write(name)
// document.write("<br>")

//  name = surname
//  document.write(name)
//  document.write("<br>")

//  document.write(surname)
//  document.write("<br>")

//  const password = 444720
//  document.write(password)

// //  password = 444870
// //  document.write(password)                         assign again to const variable

// document.write("<br>")
// let name1 = 'shubham';
// document.write(name1);

// document.write("<br>")
// name1 = undefined;
// document.write(name1);

// document.write("<br>")

// document.write(name);

// document.write("<br>")
// let cityy = "amravati";
// document.write("city :"+ cityy);
// document.write("<br>")

// document.write(`city : ${cityy}`);
// document.write("<br>")
 

// let city = "newyork";
// kfc = '10';

// document.write('city:'+ city+'  '+ '  ' +'kfclocation:'+kfc);





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
