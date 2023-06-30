var submitBtn = document.getElementById("submitBtn");
var numberSelect = document.getElementById("numberSelect");

submitBtn.addEventListener("click", function() {
  var selectedNumber = numberSelect.value;
  if (selectedNumber === "5") {
    alert("¡Felicidades!");
  }
});
  