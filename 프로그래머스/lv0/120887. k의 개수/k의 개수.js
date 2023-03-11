function solution(i, j, k) {
    let result = ''
    // 문자열 만들기 
    for (let s = i; s <= j; s++) {
        result += s
    }
    
    return result.split(k).length-1;
}