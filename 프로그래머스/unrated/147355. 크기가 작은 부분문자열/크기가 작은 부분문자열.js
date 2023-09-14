function solution(t, p) {
    let answer = 0;
    for( let i = 0; i <= t.length - p.length; i ++ ){
        t.substr(i, p.length) <= p ? answer ++ : answer
    }
    
    return answer;
}