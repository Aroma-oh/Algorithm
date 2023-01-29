function solution(emergency) {
    const sorted = [...emergency].sort((a,b) => b-a);
    const result = new Array(emergency.length).fill(0);
    for (let i = 0; i < emergency.length; i++) {
        result[i] = sorted.indexOf(emergency[i]) + 1;
    }
    return result;
}