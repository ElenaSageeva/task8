function plainNum (n) {
} 
 
let n = 189;

for (let i = 2; i <= n; i++) { // Для всех i

  for (let j = 2; j < i; j++) { // проверить, делится ли число
   
    if (i % j == 0) console.log('Данные не верны')
  }
}