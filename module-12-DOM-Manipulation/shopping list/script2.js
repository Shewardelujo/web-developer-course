// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function () {
//   console.log("CLICK!!!");
// });

// var button2 = document.getElementsByTagName("button")[1];
// button2.addEventListener("mouseenter", function () {
//   console.log("Entered!!!");
// });

// var button3 = document.getElementsByTagName("button")[2];
// button3.addEventListener("mouseleave", function () {
//   console.log("Left!!!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
// var deleteBtn = document.getElementsByTagName("button");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.innerHTML += " ";
  input.value = "";
  li.addEventListener("click", strikeThrough);

  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Done!"));
  li.appendChild(btn);
  btn.addEventListener("click", deleteItem);
}

function addButtonToList() {
  var list = document.getElementsByTagName("li");
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML += " ";
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Done!"));
    list[i].appendChild(btn);
    btn.onclick = deleteItem; //could also be written like this: btn.addEventListener("click", deleteItem);
    //deleteItem is the function declared on line 73 below
  }
}
addButtonToList();

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterPress);

function strikeThrough() {
  this.classList.toggle("done");
}
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", strikeThrough);
}

function deleteItem() {
  this.parentElement.remove();
  //"event.target" is the same as "this" and can be used interchangeably
}
// for (var i = 0; i < deleteBtn.length; i++) {
//   deleteBtn[i].addEventListener("click", deleteItem);
// }
