function solution(A, B) {
    let newArr = [...A];
    for ( i = 0; i < A.length; i ++) {
        if (newArr.join("") === B) return i;
        else {
            newArr.unshift(newArr.pop());
        }
    }
    return -1;
}