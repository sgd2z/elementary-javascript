let outerDiv = document.createElement('div')
outerDiv.classList.add('outerdiv')
document.body.appendChild(outerDiv)

let innerDiv = document.createElement('div')
innerDiv.classList.add('innerdiv')
outerDiv.appendChild(innerDiv)
innerDiv.innerHTML = "clientWidth: " + innerDiv.clientWidth + "<br> offsetWidth: " + innerDiv.offsetWidth