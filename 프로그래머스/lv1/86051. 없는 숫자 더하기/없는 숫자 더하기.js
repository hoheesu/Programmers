function solution(numbers) {
    let answer = 0;
    const set = new Set(numbers)
    for(let i = 0; i <= 9; i++){
        set.has(i) ? answer : answer += i 
    }
    
    return answer;
}