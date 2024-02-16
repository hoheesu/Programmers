function solution(k, m, score) {
    let answer = 0;
    score.sort((a,b) => b - a);
    
    // while(score.length >= m) {
    //     answer += score.splice(score,m)[m - 1] * m
    // }
    for( let box = m-1; box < score.length; box += m){
        answer += score[box] * m
    }
    
    return answer;
}
