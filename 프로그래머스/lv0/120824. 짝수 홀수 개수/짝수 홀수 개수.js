function solution(num_list) {
    const answer = [0, 0];
    for (num of num_list) {
        answer[num % 2]++
    } return answer;
}