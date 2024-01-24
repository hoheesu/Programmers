function solution(hp) {
    let answer = 0;
    let remain = hp;
    while ( remain > 0 ) {
        if( remain >= 5){
            remain -= 5
        } else if( remain >= 3) {
            remain -= 3
        } else {
            remain -= 1
        }
        answer ++
    }
    
    
    return answer;
}