var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createButtonForElement(li);
	updateEventListeners();
}

function createButtonForElement(li){

	var btn = document.createElement("button");
	var btnText = document.createTextNode("Delete");
	btn.setAttribute("class","deleteBtn");
	btn.appendChild(btnText);
	li.appendChild(btn);  
	btn.onclick = listenerOnDeleteBtn;
}



function createButtonsForElementsInit(){

	for (var i = 0; i < li.length; i++) {
		createButtonForElement(li[i]);
	}

}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


/*1. If you click on the list item, it toggles the .done  class on and off depends on list item current state*/

function listenerOnClick() {

	if (this.classList.contains("done"))
	{
this.classList.remove("done");

}

else 
{ 
  	this.classList.add("done");
}

}


// Callback function for deleting list element when user clicks on Delete button 

function listenerOnDeleteBtn(event) {
	event.target.parentNode.remove();
}

// Update Event Listeners for each list element.  listening for click on each List item

function updateEventListeners() {
	liElements = ul.children;
	for (var i = 0 ; i <= liElements.length-1; i ++) {

		liElements[i].removeEventListener("click", listenerOnClick);
		liElements[i].addEventListener("click", listenerOnClick);
	} 

}

// Create buttons for each List item which present on the page by default
createButtonsForElementsInit();

// Updating Event Listeners for each List item which present on the page by default

updateEventListeners();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);











