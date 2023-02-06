function solution(my_string) {
    const num = my_string.match(/[0-9]/g);
    return num.map(el => Number(el)).sort((a,b) => a-b);
}