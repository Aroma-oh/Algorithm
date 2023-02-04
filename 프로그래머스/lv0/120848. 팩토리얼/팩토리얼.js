function solution(n) {
    let factorial = 1; 
    for (i = 1; i <= n; i++) {
        factorial *= i; 
        if (factorial === n) return i;
        if (factorial > n) return i-1;
    }
}