function a(){ // a is the lexical scope of its local memory along with its parent gloabl. hence it can access gloabl vairable.
    console.log(g)
    var b = 10;
    c();
    function c(){  // C is the lexical scpe of its local memory as well as its parent a. hence b is accessible in c.
        console.log(b)
    }
}

var g = "i am global"
console.log(a())