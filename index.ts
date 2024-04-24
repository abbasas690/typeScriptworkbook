// ------------------------------------------------------ANNOTATIONS:

// example let variableName: type = "value";
// type = "number | sting | boolean | ..."

// stings

let myName: string = "your name";
myName="new name"
// myName=23 , give an error
console.log(myName)


// number

let favNumber : number = 27;

console.log(favNumber)

// boolean

let isboolean : boolean = true;

console.log(isboolean)

//--------------------------------------------------- TYPE INFERENCE:

let yourName = "good to go";
let yourFavNumber = 19;
let isNotHard = false;
//yourName=12 , give an error :
console.log(yourName)

// ---------------------------------------------------ANY TYPE:

let color : any = 'blue';
color=90
color=true
console.log(color)

// ---------------------------------------------------FUNCTION PARAMETERS ANNOTATIONS:


// regular func

function addOne(num:number){
    return num+1;
}
console.log(addOne(5))

// arrow func

const triple = (x:number,y:number,z:number) => x + y +z;

console.log(triple(1,2,3))

// default params value

function greet(name="anonymous"){
    console.log(`hello, ${name}`)
}

function greet1(name: string="anonymous"){
    console.log(`hello, ${name}`)
}
greet()
greet1("bro")

// reutrn annotations (regular)

function doubleNumber(x:number):number{
    return x*2;
}

console.log(doubleNumber(2))

// reutrn annotations (arrow)

const tripleNUmber = (x:number,y:number,z:number):number => x+y+z;


console.log(tripleNUmber(2,3,5))

// ---------------------------------------------------VOID TYPE ABSENCE OF VALUE

function printMessage(message:string):void{
    console.log("this is my message "+message)
}

printMessage("hello typescript")

// ---------------------------------------------------NEVER TYPE:

// function thorowError(mes:string):never{
//    throw new Error(mes);
// }

// function inifiniteLoop():never{
//     while(true){

//     }
// }

// let x:never

// function neverReturns():never{
//     while(true){

//     }
// }
// x=neverReturns()

// ---------------------------------------------------ARRAY TYPES:
const numbers: number[] = [1,2,3,4,5]
const nameOfPeople: Array<string> = [
    "arun",
    "ajay"
]
nameOfPeople.push("dk-jd")
// nameOfPeople.push(120) , give an error 
console.log(numbers)
console.log(nameOfPeople)

// multi dimensional array

const matrix: number[][] = [
    [1,2],
    [3,4]
]

console.log(matrix)  

// ---------------------------------------------------OBJECTS

const person1 : {firstname:string,lastName:string,age? :number}={

    firstname:"aba",
    lastName:"ff",
    age:23

}

console.log(person1)

// function 

function printUser():{fistName:string;lastName:string}{
    return{
        fistName:"name",
        lastName:"last"
    }
}


// ---------------------------------------------------Type Aliases

type box ={
    x:number
    y:number
   readonly z?:number
}

const printBox = (b:box) => console.log(`box x:${b.x} box y:${b.y}`)

const box1 :box= {x:20,y:23}

printBox(box1)

// --------------------------------------------------- INTERSECTION TYPES
 
type boy ={
    height:number
    weight?:number
}

type emp ={
    name:string
    id:number
}


type boyemp = boy & emp


const employee :boyemp ={
    name:"aurn",
    id:56,
    height:45

}

console.log(employee)

//-------------------------------------------------------- UNIONS

let size : number | string = 25
 size ="large"

type boyOremp = boy | emp

const boy1:boyOremp ={
    height:23,
    name:"auxrn"
}
  
console.log(boy1)

const items:(number|string)[]=[13,342,424,"hello","bye"]
console.log(items)

//---------------------------------------------------------- LISTERAL TYPES 

let colors : "red" | "green" |"black";
colors="red"

// color="blue" , error
console.log(colors)


//-----------------------------------------------------------TUPLES
