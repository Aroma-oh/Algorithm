function solution(my_string) {
    return my_string.split(/[A-z]/).reduce((acc, cur) => acc*1 + cur*1, 0)
}