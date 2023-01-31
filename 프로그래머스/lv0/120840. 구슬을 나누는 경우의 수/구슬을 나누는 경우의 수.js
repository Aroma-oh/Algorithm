function solution(balls, share) {
    let top = 1;
    let bottom = 1;
    
    for (i = 1; i <= share; i++) {
        bottom = bottom * i;
        top = top*(balls-i+1);
    }
    return Math.round(top/bottom);
}