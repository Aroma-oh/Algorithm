function solution(dots) {
    let x;
    let y;
    dots.forEach(el => {
        dots[0][1] === el[1] ? x = Math.abs(el[0] - dots[0][0]) : null;
        dots[0][0] === el[0] ? y = Math.abs(el[1] - dots[0][1]) : null;
    });
    return (x*y)
}