class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  comer(comida) {
    return `${this.nombre} está comiendo ${comida}`;
  }
}

const Alain = new Persona("Alain", "26");
console.log(Alain);

class Alumnos {
  constructor(nombre, apellido, califFinal, inscrito) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.califFinal = califFinal;
    this.inscrito = inscrito;
  }
  estudiar(materia){
    console.log(`${this.nombre} ${this.apellido} estudia ${materia}`);
  }
  obtenerIniciales(){
    return this.nombre[0]+this.apellido[0];
  }
  obtenerNombreCompleto(){
    return this.nombre + ' ' + this.apellido;
  }
}

let Juan = new Alumnos('Juan', 'Perez', 8, true);
let Pablo = new Alumnos('Pablo', 'Juarez', 10, false);
Juan.estudiar('Aleman');
Pablo.estudiar('Fisica cuantica');
console.log(Juan.obtenerIniciales());
console.log(Juan.obtenerNombreCompleto());

