function solution(n) {
    let result = [];
    for (let i = 4; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0 && result.indexOf(i) === -1) result.push(i);
        }
        
    }
    return result.length;
}