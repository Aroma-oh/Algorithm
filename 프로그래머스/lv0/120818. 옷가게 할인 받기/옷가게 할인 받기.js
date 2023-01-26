function solution(price) {
    if ( price >= 5e5 ) return parseInt(price * 0.8);
    else if ( price >= 3e5 ) return parseInt(price * 0.9);
    else if ( price >= 1e5 ) return parseInt(price * 0.95);
    return price;
}