/*
Basic ts
*/

// String 
let car = "Toyota"
let bike: String 
bike = 'winner'
// bike = 100  thong bao loi ngay

// number
let num: number = 10

// boolean
let isLoading: boolean = false

// undefined
let body:undefined = undefined

// null
let footer : null

// any
let person: any
// kieu nao cung dc

/*
Object
*/

// let house = {}

let house : {
    address: string,
    color?: string

} = {
    address: '',
}

house.address= 'Da Nang'

/*
Array
*/
// function handleError() {
//     throw new Error('loi roi')
// }

// let products: any[] = []

// products.push()

// // string[]
// let names = ['alex','Ben']

// let address: string[] = []
// address.push('da nang')

// // number tuong tu
// let numbers: number[] = []
// numbers = [1,2,3]

// // object array
// let people: {
//     name: string
//     age: number
// }[] = []

// people.push({
//     name: 'hung',
//     age: 10
// })

// const sum = (num1: number, num2: number):number => {
//     return num1 + num2 
// }

// sum(1,2)

// const sub: (num1: number, num2: number) => number =
// (num1: number, num2: number) => num1 + num2


// const handler = () => {
//     console.log(123)
// }

// /*
// Union : ket hop nhieu cai
// */
// let price : number | string 
// price = 10
// price = '23'


// /*
// Enum
// */

// enum Sizes {
//     S = 'S',
//     M = 'M',
//     L = 'L',
// }

// let size = Sizes.S

// /*
// Interface 
// co the merge 2 cai cungf interface
// */

// interface State {
//     name: string,
//     isLoading: boolean
// }

// let state = State = {
//     name: 'dang',
//     isLoading: false
// }

// /*
// type
// */

// type Name = {
//     name: string
// }
// type Age = {
//     age: number
// }

// type Person = Name | Age

const handleClick = <Type>(value: Type) => value

/*
Class 
*/

class Person {
     public name:string 
    age: number

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }
}

class Person2 {
    constructor(private name:string, private age:number) {
        
    }
}