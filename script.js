document.getElementById("madlibButton").addEventListener("click", addmadlib);

function addmadlib() {
  var pnoun = document.getElementById("pnoun").value;
  var adjective = document.getElementById("adjective").value;
  var ptverb = document.getElementById("ptverb").value;
  var noun = document.getElementById("noun").value;

  var madlib = `There are too many ${pnoun} on this ${adjective} airplane!", I screamed. "Somebody has to ${ptverb} on the ${noun} to solve this problem!`;

  document.getElementById("paragraph").textContent = madlib;
}
