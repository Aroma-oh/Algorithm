function solution(s) {
    const stack = [];
    
    s.split(" ").forEach(el => {
        if (el === "Z") stack.pop();
        else stack.push(el*1);
    });
    
    return stack.length ? stack.reduce((a, b) => a+b) : 0;
}