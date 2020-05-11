/* 5- Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

------Interpretando o enunciado------
- angulo1, angulo2, angulo3
- true angulo1 + angulo2 + angulo3 === 180
- false angulo1 + angulo2 + angulo3 !== 180
*/


function triangle(angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 === 180) {
    return true, 'the sum of the angles represent a triangle'
  } else {
    return false, 'the sum of the angles does not represent a triangle'
  }
}   

console.log(triangle(90, 60, 30))
