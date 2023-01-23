function solution(numer1, denom1, numer2, denom2) {
    let top = numer1 * denom2 + numer2 * denom1;
    let bottom = denom1 * denom2;
    
    const gcf = (top, bottom) => {
        while (true) {
            let reminder = top % bottom;
            if (reminder === 0) return bottom;
            top = bottom;
            bottom = reminder;
        }
    }
    
    return [top/gcf(top, bottom), bottom/gcf(top, bottom)];
}