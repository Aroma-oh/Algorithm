function solution(array) {
    array.sort((a,b) => a-b); 
    const mode = new Array(Math.max(...array)+1).fill(0);
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i+1]) {mode[array[i]] += 1};
    }
    
    //return mode; 
    
    if (array.length === 1) return array[0]
    
    let count = 0;
    for (let i = 0; i < mode.length; i++) {
        if (mode[i] === Math.max(...mode)) count++;
    }
    if (count > 1) return -1; 
    else return mode.indexOf(Math.max(...mode));
}