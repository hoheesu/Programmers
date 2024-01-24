function solution(my_string) {
    let answer = 0;
    for( const x of my_string ){
        if( Number(x) ) answer += Number(x)
    }
    return answer;
}