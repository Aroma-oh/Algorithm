function solution(sides) {
    let maxIdx = sides.indexOf(Math.max(...sides));
    let added = 0; 
    for (let i = 0; i < sides.length; i++) {
        if (i !== maxIdx) added += sides[i];
    }
    return Math.max(...sides) < added ? 1 : 2; 
}

// 런타임 에러
// let max = Math.max(...sides);
// let added = sides.filter(el => el !== max).reduce((a, b) => a+b);
// return added > max ? 1 : 2;

    // let maxSide = sides[0]; 
    // let added = 0; 
    // for (let i = 1; i < sides.length; i++) {
    //     if (sides[i] > maxSide) maxSide = sides[i]; 
    //     else added +=
    // }