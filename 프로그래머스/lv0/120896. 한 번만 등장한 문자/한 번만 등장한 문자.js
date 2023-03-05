function solution(s) {
    let arr = [...s].sort((a, b) => a.localeCompare(b))
    let result =''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) result += arr[i]
    }
    return result;
}