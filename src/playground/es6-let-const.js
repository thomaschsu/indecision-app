var nameVar = 'Tom'
nameVar = 'Lmao'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Julia'
console.log('nameLet', nameLet)

const nameConst = 'Lili'
console.log('nameConst', nameConst)

function getPetName() {
    let petName = 'Cocoa'
    return petName
}

const petName = getPetName()
console.log(petName)

const fullName = 'Tom Hsu'
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)