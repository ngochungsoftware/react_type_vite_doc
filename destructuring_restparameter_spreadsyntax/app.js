/*
Destructuring
*/

// Destructuring voi object

// const user = {
//     name: 'user',
//     age: 36,
//     sex: 'male',
// }

// const name = user.name
// const age = user.age
// const sex = user.sex

// const { name, age: useAge, sex } = user

// console.log(name, useAge, sex)
 
// Destructuring voi array

// const list =  [
//     1,
//     function (a , b) {
//         return a + b
//     }
// ]

// const [value,sum] = list

// console.log(sum(2+ 3))

// Spread Syntax


// const user = {
//     name: 'duoc',
//     age: 36,
//     ability: ['coding'],
// }

// const cloneUser = user
// shallow copy (copy nông)

// const cloneUser = {...user}
// console.log(cloneUser === user)
// console.log(cloneUser.ability === user.ability)


/*

Rest parameter
*/

const handle = (a,b,...c) => {
        return c
}

const value = handle(1,2,3,4,5,6)
 console.log(value)

 