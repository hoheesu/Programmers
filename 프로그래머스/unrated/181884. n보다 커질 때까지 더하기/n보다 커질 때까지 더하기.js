function solution(numbers, n) {
    let answer = 0;
    for(const x of numbers){
        answer += x;
        if(answer > n) break;
    }
    return answer;
}