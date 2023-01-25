function solution(slice, n) {
    for (let i = 1; i <= slice*n ; i++) {
        if (i * slice >= n) return i
    }
}