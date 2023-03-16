function solution(chicken) {
    let coupon = chicken; 
    let free = 0;
    while (coupon >= 10) {
        free += coupon/10 << 0; 
        coupon =  coupon%10 + coupon/10 << 0;
    }
    return free; 
}