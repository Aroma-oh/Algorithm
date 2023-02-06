function solution(my_string) {
    return my_string.match(/\d/g)
        .map((el) => Number(el))
        .reduce((acc, cur) => acc + cur); 
}