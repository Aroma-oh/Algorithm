function solution(age) {
    let str = 'abcdefghij'
    return [...age.toString()].map(el => str[el]).join(""); 
} 