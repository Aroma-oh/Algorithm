function solution(n, times) {
    
    // 1. min, max 구하기
    times.sort((a,b) => a - b); 
    
    let minTime = times[0]; // min time
    let maxTime = times[times.length - 1] * n; // max time
    let answer = 0;
    
    // 2. 루프: min, max가 수렴할때까지
    while( minTime <= maxTime) {
    
        let midTime = Math.floor((minTime + maxTime) / 2);
        
        let count = 0;
        
        for (let time of times) {
            count += Math.floor(midTime / time);
        }
        
        if (count >= n ) { // 현재 값이 기준을 충족하는 경우
            answer = midTime;
            maxTime = midTime - 1; // 다운
        } else { // 충족하지 못한 경우
            minTime = midTime + 1; // 업
        }
    }

    return answer; 
}