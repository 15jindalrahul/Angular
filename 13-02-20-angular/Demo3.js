var a;
var b;
var c;
var d;
/*  Function declartions in javascript*/
/* Func method 1 */
function addNumber(a, c) {
    console.log(this.a + this.c);
}
/* func method2  */
var output = function (name) {
    console.log("hello");
};
function draw(Dimension) {
    console.log(draw);
}
draw({ a: 10, b: 20, c: 30 });
