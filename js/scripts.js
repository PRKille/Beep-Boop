//Business
function beepboop(inputNumber) {
  var arrNumbers = [];
  for(let i = 0; i <= parseInt(inputNumber); i++) {
    arrNumbers.push(i);
  }
  var arrStrings = arrNumbers.map(String);
  replaceThree(arrStrings);
  replaceTwo(arrStrings);
  replaceOne(arrStrings);
  return arrStrings;
}

function replaceThree(threeNumbers) {
  threeNumbers.forEach(function(threeNumber, index, arr){
    if (threeNumber.includes("3")){
      arr[index] = "I'm sorry, Dave. I'm afraid I can't do that."
    }
  });
}

function replaceTwo(twoNumbers) {
  twoNumbers.forEach(function(twoNumber, index, arr){
    if (twoNumber.includes("2")){
      arr[index] = "Boop"
    }
  });
}

function replaceOne(oneNumbers) {
  oneNumbers.forEach(function(oneNumber, index, arr){
    if (oneNumber.includes("1")){
      arr[index] = "Beep"
    }
  });
}

// User Interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val();
    if (!isNaN(userInput)) {
      var out = beepboop(userInput);
      console.log("OUT:"+out)
    } else {
      alert("Please keep it to numbers. And be positive.");
    }
  });
});