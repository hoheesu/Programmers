function solution(n) {
    let answer = 0
    for ( let i = 1; i <= n; i ++){
        answer++
        while(1) {
            const isThree = answer.toString().includes('3')
            if( isThree ) answer++;
            else if( !(answer % 3) ) answer++
            else break;
        }
    }
    return answer;
}