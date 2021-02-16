const steps = Array.from(document.querySelectorAll("form .fieldtabs"));
const nextBtn = document.querySelectorAll("form .next-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  }
  steps[index].classList.add("active");
}





$( ".opt1" ).click(function() {
  $("#preview").css("background-color","#FFBB0E");
});
$( ".opt2" ).click(function() {
  $("#preview").css("background-color","#7B61FF");
});
$( ".opt3" ).click(function() {
  $("#preview").css("background-color","#FF0F00");
});
$( ".opt4" ).click(function() {
  $("#preview").css("background-color","#0085FF");
});
$( ".opt5" ).click(function() {
  $("#preview").css("background-color","#33C300");
});
$( ".opt6" ).click(function() {
  $("#preview").css("background-color","#FF7A00");
});
$( ".opt7" ).click(function() {
  $("#preview").css("background-color","#000000");
});
$( ".opt8" ).click(function() {
  $("#preview").css("background-color","#FB33FF");
});
$( ".opt9" ).click(function() {
  $("#preview").css("background-color","#2FFFDA");
});
$( ".opt10" ).click(function() {
  $("#preview").css("background-color","#2EFF29");
});
$( ".opt11" ).click(function() {
  $("#preview").css("background-color","#A63C00");
});
$( ".opt12" ).click(function() {
  $("#preview").css("background-color","#CF004B");
});
$( ".opt13" ).click(function() {
  $("#preview").css("background-color","#367630");
});
$( ".opt14" ).click(function() {
  $("#preview").css("background-color","#313879");
});
$( ".opt15" ).click(function() {
  $("#preview").css("background-color","#C4C4C4");
});