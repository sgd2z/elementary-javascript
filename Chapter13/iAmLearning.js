let myDiv = document.createElement('div')
myDiv.id ='thisIsMyDiv'
myDiv.innerHTML = "Hi! I'm some text in a div."
document.body.appendChild(myDiv)

let bigRed = document.createElement('div')
bigRed.classList.add('bigred')
bigRed.innerHTML = 'This div has the bigred class'
document.body.appendChild(bigRed)

let smallBlue = document.createElement('div')
smallBlue.classList.add('smallblue')
smallBlue.innerHTML = 'This div has the smallblue class'
document.body.appendChild(smallBlue)

let colorList = ['red', 'blue', 'purple']
let position = 0
while (position < colorList.length) {
    let div = document.createElement('div')
    div.innerHTML = 'Some Text'
    div.classList.add("big", colorList[position])
    document.body.appendChild(div)
    position = position + 1
}

position = 0
while (position < colorList.length) {
    let div = document.createElement('div')
    div.innerHTML = 'Some Text'
    div.classList.add("small", colorList[position])
    document.body.appendChild(div)
    position = position + 1
}

let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')
div1.classList.add('fiftypercent')
div2.classList.add('fiftypercent')
div3.classList.add('fiftypercent')
div4.classList.add('fiftypercent')
div1.innerHTML = "div1"
div2.innerHTML = "div2"
div3.innerHTML = "div3"
div4.innerHTML = "div4"
document.body.appendChild(div1)
div1.appendChild(div2)
div2.appendChild(div3)
div3.appendChild(div4)
