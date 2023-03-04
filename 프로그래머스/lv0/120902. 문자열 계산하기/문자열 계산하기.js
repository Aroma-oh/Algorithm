function solution(my_string) {
    const calc = my_string.split(" ");
    let result = calc[0]*1; 
    for (let i = 0; i < calc.length; i++) {
        if (calc[i] === "+") result += calc[i+1]*1;
        if (calc[i] === "-") result -= calc[i+1]*1;
    }
    return result;
}