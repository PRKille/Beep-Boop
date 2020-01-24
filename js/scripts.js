// User Interface
$(document).ready(function(){
  $("form").submit(function(event){
    var userInput = $("input#number").val();
    if (!isNaN(userInput) && userInput >= 0){
      alert("good job")
      // beepboop(userInput);
    } else {
      alert("Please keep it to numbers. And be positive.")
    }
  });
});