let momsBoringShoppingList = ["eggs", "milk", "yogurt", "things on sale"]
let position = 0 //computers start counting at 0
while (position < momsBoringShoppingList.length) {
	let item = momsBoringShoppingList[position] //get the item at position
	if (item.length < 5) {
		document.write('I buy ' + item)
	} else {
		document.write('Dad buys ' + item)
	}
	document.write('<br>')
	position = position + 1
}

momsBoringShoppingList = ["eggs",
	"milk", 
	"yogurt", 
	"things on sale",
	"bread",
	"butter",
	"pizza",
	"corn"
]

while (position < momsBoringShoppingList.length) {
	let item = momsBoringShoppingList[position] //get the item at position
	if (item.length < 5 || item.startsWith("b")) {
		document.write('I buy ' + item)
	} else {
		document.write('Dad buys ' + item)
	}
	document.write('<br>')
	position = position + 1
}

let aNumber = 4
let anotherNumber = 9
if (aNumber > 5 && anotherNumber < 10) {
	document.write("Yesss!!")
}