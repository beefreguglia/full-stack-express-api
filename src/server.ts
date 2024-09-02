import expores from "express"

function sum(a: number, b: number): number {
  return a + b 
}

const result = sum(5, 7)
console.log('Resultado da soma:', result)