function solution(hp) {
    let count = 0; 
    
    while (count <= hp) {
        count = parseInt(hp/5); 
        if (hp%5 !== 0) {
            count += parseInt(hp%5/3);
            if (hp%5/3 !== 0){
                count += parseInt(hp%5%3);
                break; 
            } else break; 
        } else break; 
    }
    return count;
}