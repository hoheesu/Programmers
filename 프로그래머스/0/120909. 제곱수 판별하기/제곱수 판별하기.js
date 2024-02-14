function solution(n) {
    let answer = 2;
    for( let i = 1; i <= Math.sqrt(n); i ++ ) {
        if( i ** 2 === n) {
            answer = 1;
            break;
        }
    }
    return answer;
}