let list = ['a', 'b', 'c', 'd', 'e']
document.write(list)
document.write('<br>')

let removedItems = list.splice(1, 2) //removedItems will contain ['b', 'c']
document.write(removedItems)
document.write('<br>')
// list will now have ['a', 'd', 'e']
document.write(list)
document.write('<br>')

list.splice(1, 0, 'f', 'g')
// list will now have ['a', 'f', 'g', 'd', e']
document.write(list)
document.write('<br>')

// Trying to remove items from the list that are >5
// This code does not work and is intentionally broken
let myList = [4, 5, 6, 5, 4, 7, 7, 7, 5, 6]
let position = 0
while (position < myList.length) {
	let item = myList[position]
	if(item > 5) {
		myList.splice(position, 1)
	}
	position = position + 1
}
document.write(myList)
document.write('<br>')

// First method to make the code work (dont increment position)
myList = [4, 5, 6, 5, 4, 7, 7, 7, 5, 6]
position = 0
while (position < myList.length) {
	let item = myList[position]
	if(item > 5) {
		myList.splice(position, 1)
	} else {
		position = position + 1
	}
}
document.write(myList)
document.write('<br>')

// Second method to make the code work (count backwards)
myList = [4, 5, 6, 5, 4, 7, 7, 7, 5, 6]
position = myList.length - 1
while (position > -1) {
	let item = myList[position]
	if(item > 5) {
		myList.splice(position, 1)
	}
	position = position - 1
}
document.write(myList)
document.write('<br>')