// 제곱근 내에서 나누어 떨어지는 값 개수 

function solution(n) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) count++;
    }
    if (Number.isInteger(Math.sqrt(n))) return count*2-1;
    else return count*2;
}