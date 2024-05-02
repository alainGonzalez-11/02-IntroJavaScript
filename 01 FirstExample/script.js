console.log('Hola');

// Asking the user for info through a popup window
prompt('Bienvenido');

// Sending a message through a popup window
alert('This is an alert message');


/*
    Variable types include
*/

var nombre = 'Alain';
console.log('Mi nombre es ' + nombre + ' y la variable es de tipo ' + typeof nombre);
var edad = 26;
console.log('Tengo ' + edad + ' años y la variable es de tipo ' + typeof edad);
var pi = 3.14159;
console.log('El valor de pi es ' + pi + ' y la variable es de tipo ' + typeof pi);
var booleano = 10>5;
console.log('Las variables de tipo ' + typeof booleano + ' son el resultado de evaluaciones lógicas, por ejemplo demuestra que 10>5 es ' + booleano);

/* Variable declraration

    Variables can be defined using:
        var -> defining a global variable
        let -> defining a variable enclosed in the block of code wher it was defined
        const -> a constant variable who's value cannot be changed
*/