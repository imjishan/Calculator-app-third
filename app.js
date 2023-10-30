const buttonElem = document.querySelectorAll("button")
const inputFieldElem = document.getElementById("result")

// loop for getting texcontent of the buttons
for(let i=0; i< buttonElem.length; i++){
     buttonElem[i].addEventListener("click", ()=>{
          const buttonValue = buttonElem[i].textContent
          if(buttonValue === "C"){
               clearResult()
          } else if(buttonValue === "="){
               calculateResult()
          } else{
               appendvalue(buttonValue)
          }
     })
}

// Function - clearResult to clear all the numbers displayed on the input

function clearResult() {
     inputFieldElem.value = ""
}

// Function - calculateResult to calculate the given numbers, eg. 2+2 =

function calculateResult(){
     inputFieldElem.value = eval(inputFieldElem.value)
}

// function if the buttonValue is a numbers to display to the input box

function appendvalue(buttonValue){
     inputFieldElem.value += buttonValue;
}