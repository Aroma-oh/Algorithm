function solution(n) {
    return n.toString().split("").reduce((a, b) => a*1 + b*1, 0)
}