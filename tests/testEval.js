//'use strict';
// POR PROGRAMACION PROCEDIMENTAL -> si soporta
/*eval("var uno = 1")
eval("var dos = 2")
eval("function suma(a, b) {return a + b;}");
console.log(suma(uno, dos));*/

// POR PROGRAMACION ORIENTADA A OBJETOS -> no soporta

/*class Test {
    main () {
        eval("var uno = 1")
        eval("var dos = 2")
        eval("function suma(a, b) {return a + b;}");
        console.log(suma(uno, dos));
    }
}
let x = new Test();
x.main();*/

// POR PROGRAMACION POR PROTOTYPE -> si soporta

/*function Test (nombre) {
    this.nombre = nombre;
}
Test.algo = 'algo';
Test.prototype.empezar = () => {
    eval("var uno = 1")
    eval("var dos = 2")
    eval("function suma(a, b) {return a + b;}");
    console.log(suma(uno, dos));
}
Test.dime = () => {
    console.log(Test.algo);
}
var x = new Test('franco');
x.empezar();

Test.dime();*/
var x = `
    x = 0;
    console.log('empieza');
    while (x < 5) {
        console.log('hola')
        x++;
    }
`;
eval(x);