const textarea = document.querySelector("textarea");

function countChars() {
  var val = document.getElementById("textarea").value;
  var withSpace = val.length;
  var withOutSpace = val.replace(/\s+/g, "").length;
  var wordsCount = val.match(/\S+/g).length;

  document.getElementById("wordCount").innerHTML = wordsCount + " words";
  document.getElementById("charNumWithSpace").innerHTML =
    "With space: " + withSpace + "     characters";
  document.getElementById("charNumWithOutSpace").innerHTML =
    "Without space: " + withOutSpace + "     characters";
}

function clearText() {
  document.getElementById("textarea").value = "";
  document.getElementById("wordCount").innerHTML = "0 Words";
  document.getElementById("charNumWithSpace").innerHTML = "0 characters";
  document.getElementById("charNumWithOutSpace").innerHTML = "0 characters";
}
