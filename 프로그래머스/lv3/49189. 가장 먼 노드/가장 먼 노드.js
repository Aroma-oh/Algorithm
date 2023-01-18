function solution(n, edge) {
    return bfs(1, edge, n);
}

const bfs = (start, arr, end) => {
    const visited = new Array(end + 1).fill(false);
    const level = new Array(end + 1).fill(0);
    const queue = [start];
    
    visited[start] = true;
    
    while (queue.length) {
        // console.log(queue);
        const head = queue.shift();
        const lev = level[head] + 1;
        for(let node of arr) {
            // console.log(node);
            if (node[0] === head && !visited[node[1]]) {
                queue.push(node[1]);
                visited[node[1]] = true;
                level[node[1]] = lev; 
            } else if (node[1] === head && !visited[node[0]]) {
                queue.push(node[0]);
                visited[node[0]] = true;
                level[node[0]] = lev; // 걍 +1 해보기
            }
        }
    }
    const maxLevel = Math.max.apply(null, level); // 걍 level 해보기
    //return level;
    return level.filter((i) => i === maxLevel).length; // 노드가 몇개인지
}