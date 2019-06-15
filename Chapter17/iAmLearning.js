let num = Math.random()
num = Math.floor(Math.random() * 10)
num = Math.floor(Math.random() * 11) + 5

let date = new Date()
let date = new Date ('April 1, 2019 14:30')

alert('go')
let startTime = Date.now()
let counter = 0
while (counter < 1000000) {
	counter = counter + 1
}
let endTime = Date.now()
let timeTaken = endTime - startTime
alert(timeTaken + ' milliseconds')
