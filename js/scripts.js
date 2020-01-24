//Business
function beepboop(inputNumber) {
  var arrNumbers = [];
  for(let i = 0; i <= parseInt(inputNumber); i++) {
    arrNumbers.push(i);
  }
  var arrStrings = arrNumbers.map(String);
  replace(arrStrings);
  return arrStrings;
}

function replace(replaceNumbers) {
  replaceNumbers.forEach(function(replaceNumber, index, arr){
    if (replaceNumber.includes("3")){
      arr[index] = "I'm sorry, Dave. I'm afraid I can't do that."
    } else if (replaceNumber.includes("2")){
      arr[index] = "Boop"
    } else if (replaceNumber.includes("1")){
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
      var outputs = beepboop(userInput);
      outputs.forEach(function(output) {
        $("ul").append("<li>"+output+"</li>")
      });
    } else {
      alert("Please keep it to numbers. And be positive.");
    }
  });
});