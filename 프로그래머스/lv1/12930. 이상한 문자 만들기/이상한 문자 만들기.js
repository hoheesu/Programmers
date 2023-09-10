function solution(s) {
    let answer = ''
    let count = 0 
    for( const x of s.split('')){
        if( x === ' '){
            answer += x;
            count = 0;
            continue;
        }
        else if( count % 2 ) answer += x.toLowerCase();
        else answer += x.toUpperCase();
        count ++;
    }
    
    return answer
}
