let myDiv = document.createElement('div')
myDiv.innerHTML = "Enter Something in this Text Box: "
let myTextBox = document.createElement('input')
myTextBox.type = 'text'
myDiv.appendChild(myTextBox)
let myButton = document.createElement('button') // create a button
myButton.innerHTML = 'Click Me!' // put some text on the button
myDiv.appendChild(myButton) // put the button in the div
document.body.appendChild(myDiv)
