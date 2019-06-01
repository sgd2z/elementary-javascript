let counter = 5
let tableList = []
while (counter < 51) {
	tableList.push(counter)
	counter = counter + 5
}
document.write(tableList)

let momsBoringShoppingList = ['eggs', 'milk', 'yogurt', 'things on sale']
let position = 0 //computers start counting at 0
while (position < momsBoringShoppingList.length) {
	let item = momsBoringShoppingList[position] //get the item at position
	document.write(item)
	document.write('<br>')
	position = position + 1
}

 
