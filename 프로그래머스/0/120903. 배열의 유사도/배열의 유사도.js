function solution(s1, s2) {
    let answer = 0;
    for( const i of s1 ) {
        if(s2.includes(i)) answer ++
    }
    return answer;
}