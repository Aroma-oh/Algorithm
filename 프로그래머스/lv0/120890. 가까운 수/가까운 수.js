function solution(array, n) {
    let arr = []
    array.sort((a,b) => a-b)
    for (let el of array) {
        arr.push(Math.abs(el - n))
    }
    //return `arr : ${arr}, idx : ${arr.indexOf(Math.min(...arr))}, min : ${Math.min(...arr)}` 
    let answer = array[arr.indexOf(Math.min(...arr))];
    return answer
}