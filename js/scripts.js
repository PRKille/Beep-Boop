//Business
function beepboop(inputNumber) {
  var arrNumbers = [];
  for(let i = 0; i <= parseInt(inputNumber); i++) {
    arrNumbers.push(i);
  }
  var arrStrings = arrNumbers.map(String)
  console.log(arrStrings)
  return arrStrings;
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