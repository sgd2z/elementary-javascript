let boy = {}
boy.name = 'Sidd'
boy.nerd = true

let boy2 = {
	name: 'Sidd',
	nerd: true
}

let name = boy.name
let name2 = boy['name']

let properties = Object.keys(boy)

let position = 0
while (position < properties.length) {
	let propertyName = properties[position]
	let propertyValue = boy[propertyName]
	position = position + 1
}
