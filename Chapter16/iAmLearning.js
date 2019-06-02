const removeItemFromList = (list, positionToRemove) => {
	let newList = []
	let position = 0
	while (position < list.length) {
		// If the position is not the position to remove, put the item in the new list
		if (position !== positionToRemove) {
			newList.push(list[position])
		}
	}
	return newList
}

let div = document.createElement('div')
document.body.appendChild(div)

let list = ['a', 'b', 'c', 'd', 'e']
div.innerHTML = list
div.innerHTML = div.innerHTML + '<br>'

let removedItems = list.splice(1, 2) //removedItems will contain ['b', 'c']
div.innerHTML = div.innerHTML + removedItems
div.innerHTML = div.innerHTML + '<br>'
// list will now have ['a', 'd', 'e']
div.innerHTML = div.innerHTML + list
div.innerHTML = div.innerHTML + '<br>'

list.splice(1, 0, 'f', 'g')
// list will now have ['a', 'f', 'g', 'd', e']
div.innerHTML = div.innerHTML + list
div.innerHTML = div.innerHTML + '<br>'

// Trying to remove items from the list that are >5
// This code does not work and is intentionally broken
let myList = [4, 5, 6, 5, 4, 7, 7, 7, 5, 6]
let position = 0
while (position < myList.length) {
	let item = myList[position]
	if (item > 5) {
		myList.splice(position, 1)
	}
	position = position + 1
}
div.innerHTML = div.innerHTML + myList
div.innerHTML = div.innerHTML + '<br>'

// First method to make the code work (dont increment position)
myList = [4, 5, 6, 5, 4, 7, 7, 7, 5, 6]
position = 0
while (position < myList.length) {
	let item = myList[position]
	if (item > 5) {
		myList.splice(position, 1)
	} else {
		position = position + 1
	}
}
div.innerHTML = div.innerHTML + myList
div.innerHTML = div.innerHTML + '<br>'

// Second method to make the code work (count backwards)
myList = [4, 5, 6, 5, 4, 7, 7, 7, 5, 6]
position = myList.length - 1
while (position > -1) {
	let item = myList[position]
	if (item > 5) {
		myList.splice(position, 1)
	}
	position = position - 1
}
div.innerHTML = div.innerHTML + myList
div.innerHTML = div.innerHTML + '<br>'