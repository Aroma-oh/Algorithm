function solution(my_str, n) {
    const answer = [];
    let startIdx = 0; 
    for (let i = 0; i < Math.ceil(my_str.length/n); i ++) {
        //return n*(i+1)
        answer[i] = my_str.slice(startIdx, (n*(i+1)));
        startIdx += n;
    }
    return answer;
}