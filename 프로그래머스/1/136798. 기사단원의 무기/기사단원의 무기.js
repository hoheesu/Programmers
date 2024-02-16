function solution(number, limit, power) {
    let answer = 0;
    for( let i = 2; i <= number; i++) {
        let cnt = 0;
        for ( let j = 1; j <= Math.sqrt(i); j++){ 
            if( !(i % j) )  {
                cnt ++
            }
        }
        cnt *= 2
        if( Number.isInteger(Math.sqrt(i))) cnt -= 1
        cnt > limit ? answer += power : answer += cnt
    }
    
    return ++ answer;
}