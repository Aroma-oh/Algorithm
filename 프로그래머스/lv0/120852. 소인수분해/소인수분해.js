function solution(n) {
//     const result = [];
//     let num = n;
//     if (n % 2 === 0) result.push(2);
    
//     for (i = 3; i <= n; i += 2) {
//         if (num % i === 0) {
//             num = Math.floor(num / i);
//             result.push(i)
//         }
//     }
//     return result.sort((a,b) => a-b)
      let result = [];
  let divisor = 2;
  
  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor)
      n = n / divisor;
    }
    
     else divisor ++;
    
  }
  
  return [...new Set(result)];
}