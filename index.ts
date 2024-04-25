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





const game:[string,number,boolean]=["abbas",56,false]

console.log(game)

//------------------------------------------------------------ENUMS

enum weeks {
    sunday,
    monday,
    tuesday,
    wednesday,
    thrusday,
    friday,
}

const currentWeek = weeks.friday
console.log(currentWeek)

// CLASS PROPERTIES ANNOTATIONs

class broType{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }

}

const bro1type = new broType("ajay",23)

console.log(bro1type)

// access Modifiers

class Girl {
    public firstName:string;
    private lastName:string;
    protected age : number
    constructor(firstName:string,lastName:string,age:number){
        this.firstName=firstName;
        this.lastName=lastName
        this.age=age
    }

    getName():string{
        return `${this.firstName} ,${this.lastName}`

        
    }
}

const meena = new Girl("meena kumari","kandasamy",90)

console.log(meena.firstName)
console.log(meena.getName())
// console.log(meena.lastName) , give an error  

class Adult  extends Girl{
    constructor(firstName:string,lastName:string,age:number){
        super(firstName,lastName,age)
        
    }

    getName(): string {
        return `${this.firstName}  ${this.age}`
    }
}

const a1 = new Adult("arumugam","pandian",20)

console.log(a1.getName())

// get set er

class demoClass {
    private _proprety :number=0;

    get proprety():number{
        return this._proprety
    }
    set proprety(value:number){
        this._proprety=value
    }
}

const testClass = new demoClass()

testClass.proprety=90

console.log(testClass.proprety)

// INTERFACE

interface computer{
    name:string;
    ram:number;
    hdd:number;
}

const computerExample : computer ={
    name:"hp-7",
    ram:8,
    hdd:599,
}

console.log(computerExample)

interface Movie {
    readonly name:string;
    ratings:number;
    gener?:string;
}

const movie1: Movie ={
    name:"captain america",
    ratings:5.6,
    gener:"action"
}

const movie2: Movie ={
    name:"Tokyo Night",
    ratings:5.6,
}

// movie2.name="op" ,give an error 
// interface function
interface mathOperation{
    (x:number,y:number):number;
}

const add:mathOperation = (a,b)=> a+b;
const sub:mathOperation = (a,b)=> a-b;

console.log(add(9,3))
console.log(sub(9,4))

// interface object
interface Song {
    name:string;
    gener:string;
    rate:number;
    play():void;
    stop():void;
}

const song : Song ={
    name:"badass",
    gener:"tamil song",
    rate:4.2,
    comments:"nothing to say",
    play(){
        console.log("The song is playing")
    },
    stop() {
        console.log("The song stop")
    },
}

console.log(song)
// declaratin merging

interface Song {
    comments:string;
}

const song1 : Song = {
    name:"dippam dappam",
    gener:"tamil song",
    rate:4.5,
    comments:"good to go",
    play(){
        console.log(`The song ${this.name} is playing...`)
    },
    stop() {

      console.log(`The song ${this.name} is stopped playing...`)  
    },
}

console.log(song1)
song1.play()
song1.stop()

// interface inheritance

interface MovieDetails{
    readonly name:string;
    rateings:number;
    printMovieInfo(name:string,price:number,ratings:number):string | number;
}

interface MovieGenra extends MovieDetails {
    genra:string;
}

const movie23 : MovieGenra ={
    name:"star wars",
    genra:"Action",
    rateings:8.9,
    printMovieInfo(name:string,price:number,ratings:number):string | number {
        return `Movie Name: ${name} Price:${price} Ratings:${ratings}`
    }
}

console.log( movie23.printMovieInfo("jhon wick",200,8.7))

// interface class 

interface Vechical {
    start():void
    stop():void
}

class Car implements Vechical{
    start(): void {
        console.log('car is starting....')
    }
    stop(): void {
        console.log('car is stopping.')
    }
}

const newCar = new Car()
newCar.start()
newCar.stop()


//------------------------------------GENERICS


// regular func

function printInfo<T>(x:T):T{
    
    return x;
}

const str = printInfo<string>("name: ")
const num = printInfo<number>(90)
const booll = printInfo<boolean>(false)

console.log(str,num,booll)



