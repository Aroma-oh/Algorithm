function solution(num, k) {
    let result = num.toString().split("").map(el => el*1).indexOf(k) 
    return result === -1 ? -1 : result + 1;
    
}