function solution(order) {
    order = order || ""
    let matchs = order.toString().match(/[369]/gm);
    return matchs ? matchs.length : 0;
}