function solution(array, height) {
    return array.sort((a,b) => b-a).filter(num => num > height).length
    
}