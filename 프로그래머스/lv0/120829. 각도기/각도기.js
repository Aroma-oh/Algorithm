function solution(angle) {
    return [1, 90, 91, 180].filter(x => angle>=x).length;
}