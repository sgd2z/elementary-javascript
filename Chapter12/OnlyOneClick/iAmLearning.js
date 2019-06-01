let myDiv = document.createElement('div')
myDiv.innerHTML = "Enter Something in this Text Box: "
let myTextBox = document.createElement('input')
myTextBox.type = 'text'
myDiv.appendChild(myTextBox)
let myButton = document.createElement('button')

// create a function that we will call when the button is clicked:
const doSomethingWhenButtonIsClicked = () => {
	// remove the listener when the button is clicked.
	myButton.removeEventListener("click", doSomethingWhenButtonIsClicked)
	alert(myTextBox.value); // show a popup with the text in the textbox
}

// addEventListener is how we listen to when things happen:
myButton.addEventListener("click", doSomethingWhenButtonIsClicked)

myButton.innerHTML = 'Click Me!'
myDiv.appendChild(myButton)
document.body.appendChild(myDiv)
