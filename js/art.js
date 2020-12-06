//Javascript for slideshow

var myIndex = 0;
carousel();

//Function to switch images
function carousel() {
  var i; //For loop variable
  var x = document.getElementsByClassName("slide"); //Getting slide images
  //For loop to hide all images
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  //Displaying image of correct index
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Setting change time to 2 seconds
}
