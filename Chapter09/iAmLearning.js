let boy = {}
boy.name = 'Sidd'
boy.nerd = true

let boy2 = {
	name: 'Sidd',
	nerd: true
}

let properties = Object.keys(boy)
let position = 0
while (position < properties.length) {
	let propertyName = properties[position]
	let propertyValue = boy[propertyName]
	position = position + 1
}
