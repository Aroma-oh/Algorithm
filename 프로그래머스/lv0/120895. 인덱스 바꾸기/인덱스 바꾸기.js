function solution(my_string, num1, num2) {
    let a = [...my_string].map((el, idx) => {
        if (idx === num1) return my_string[num2];
        if (idx === num2) return my_string[num1];
        else return el ;
    })
    return a.join("");
}