function log(message)
{
    console.log(message);
}

log("Hello World");

function doSomeThing()
{
    for(let i=0; i<=5; i++)
    {
        console.log(i);
    }
    //console.log("Finally:" + ); // usage of let // 
}

doSomeThing();

let a:number = 10
let b:boolean = false
let c:string = "I am string"
let d:any
let e:number[] =[10,20,30]
let f:any[] = [1,false,"Dhoni"]

enum Color {Red=0, Blue=1, Orage=2, Yellow=4}

let bgColor=Color.Blue
bgColor = Color.Yellow

let dolog = (message: any) => console.log(message);

dolog;

//Interface
interface IPoint
{
    x: Number,
    y: Number
}

let doPoint = (point:IPoint) => {

}

doPoint({
    x:1,
    y:2
})

class Point{
    x: number;
    y: number;

    draw(){
        //...
    }

    getDistance()
    {
        //...
    }
}