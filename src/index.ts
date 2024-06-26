// string, boolean, number

let x: number = 10;
const a: number = 121465;

x = 12;

console.log(a)


// inferencia x annotation
let y = 12; // inferencia

let z: number = 12; // annotation


// Tipos básicos
let firstName: string = 'Matheus'
let age: number = 20
const isAdmin: boolean = true


// String != string
console.log(firstName)
console.log(typeof firstName)

firstName = 'Pedro'

console.log(firstName)


// object 
const myNumber: number[] = [1, 2, 3]

console.log(myNumber)
console.log(myNumber.length)
myNumber.push(6)

console.log(myNumber)

// tuplas
let myTuple: [number, string, string[]]

myTuple = [5, 'teste', ['a', 'b']]

console.log(myTuple)


// obj literals -> {prop: value}
const user: {name: string, age: number} = {
  name: 'Pedro', age: 18,
}

console.log(user)

console.log(user.name)


// any
let f: any = 0
f = 'teste'
f = true
f = []


// union type
let id: string | number = 10

id = 'a'
id = 100


// type alias
type myIdType = number | string

const userId: myIdType = 10
const prodId: myIdType = '10'
const shitId: myIdType = 1045


// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande'
}

const camisa = {
  name: 'Camisa gola V',
  size: Size.G
}

console.log(camisa)