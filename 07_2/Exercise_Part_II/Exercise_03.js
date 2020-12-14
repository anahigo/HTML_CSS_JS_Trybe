/* Crie uma função para mostrar o tamanho de um objeto. */

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const lenghtObject = obj => Object.keys(obj).length;

console.log(lenghtObject(lesson1));
console.log(lenghtObject(lesson2));
console.log(lenghtObject(lesson3));