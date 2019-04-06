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
