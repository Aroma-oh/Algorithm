function solution(clothes) {
  const counts = {};
    
  for (let i = 0; i < clothes.length; i++) {
      
    const item = clothes[i];
    const itemType = item[1];
      
    if (!counts[itemType]) {
      counts[itemType] = 1;
    }
    else {
      counts[itemType]++;
    }
  }
    
  let result = 1;
    
  for (const key in counts) {
    result *= counts[key] + 1;
  }
    
  return result - 1;
}