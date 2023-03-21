function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).reduce((acc, cur) => acc*1 + cur*1, 0)
}