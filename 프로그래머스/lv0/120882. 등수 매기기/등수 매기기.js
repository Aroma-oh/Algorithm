// 내림차순 정렬배열을 indexOf로 map &
// 앞의 값과 같다면 등수 -1해주기 

function solution(score) {
    let arr = score.map(el => el = (el[0] + el[1])/2)
    let sortedArr = [...arr].sort((a,b) => b-a);
    return arr.map((el) => sortedArr.indexOf(el) +1)
}