function solution(n) {
    return n ** 0.5 % 1 ? -1 : (n ** 0.5 + 1) ** 2 
}