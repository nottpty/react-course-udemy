var nameVar = 'Patinya';
var nameVar = 'Mike'
console.log('nameVar', nameVar);

let nameLet = 'Mind';
nameLet = 'Makam';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Patinya Yongyai';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);