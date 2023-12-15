function solution(n) {
    let answer = 2;
    for( let i = 1; i <= n/2; i ++ ) {
        if( i ** 2 === n) {
            answer = 1;
            break;
        }
    }
    return answer;
}