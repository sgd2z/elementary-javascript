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
