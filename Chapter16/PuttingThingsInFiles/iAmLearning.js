import Child from './child.js'

let boy1 = new Child('Jack', true)
let girl1 = new Child('Mary', false)
boy1.play('hide and seek')
girl1.play('with ' + boy1.name)
