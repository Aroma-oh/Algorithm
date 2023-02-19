function solution(my_string) {
    return [...my_string].map((el) => {
        return el.match(/[a-z]/g) ? el.toUpperCase() : el.toLowerCase();
    }).join("");
}