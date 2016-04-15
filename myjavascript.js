// JavaScript Counter     
function myCounter() {
  return ++count;
};

// Javascript for loop using an Array 
function myMusic() {
  var index;
  var text = "";

  for (index = 0; index < music.length; index++) {
    text += music[index] + "<br />";
  }
  document.getElementById("demo").innerHTML = text;
};

// Javascript for random number generator 
function myFunction() {
  document.getElementById("demo1").innerHTML = Math.random();
};
