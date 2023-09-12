function solution(left, right) {
    let answer = 0;
    for( let i = left; i <= right; i ++ ){
        for( let j = 1; j <= i / 2; j ++){
            if( j*j === i) {
                answer -= i * 2
                break;
            }
        }
        i === 1 ? answer -= i : answer += i
    }
    return answer;
}