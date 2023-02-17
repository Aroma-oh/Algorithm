function solution(str1, str2) {
    let str = new RegExp(str2)
    return str1.match(str) ? 1 : 2
}