function hello() {
    for (var i = 0; i <= 5; i++) { /* Example showing var variable */
        console.log(i);
    }
    console.log("outside:" + i);
}
hello();
function hello1() {
    for (var a = 0; a <= 5; a++) {
        console.log(a);
    }
    console.log("outside:" + a); /* here  in let there is an error showing when we compile but when we run we are getting
                                   output. Error is b/c let doesn't have scope outside for loop wheras var has scope in entire fuction
                                   hello() */
}
hello1();
