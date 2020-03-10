let a:Number;
let b:String;
let c:boolean;
let d:any;


/*  Function declartions in javascript*/
/* Func method 1 */
function addNumber1(a:Number,c:Number)
{
    console.log(this.a+this.c);
}
/* func method2  */
let output=(name)=>{
    console.log("hello");
}



/* using interface ,if we have multiple parametres then we can create a interface and pass the object of it into function */


interface Dimension{
    x:Number;
    y:Number;
    z:Number;
}

function draw1(Dimension:Dimension)
{
    
}
draw({a:10 , b:20,c:30})
