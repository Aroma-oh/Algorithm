function solution(s){
    var answer = true;
    let stack = [], count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') { 
            stack.push('(');
            count++;
        } 
        else {
            stack.pop();
            count--;
        }   
    }
    if(stack.length > 0 || count !== 0) answer = false;
    return answer;
}