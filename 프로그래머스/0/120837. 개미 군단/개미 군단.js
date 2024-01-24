function solution(hp) {
    let answer = 0;
    let remain = hp;
    while ( remain > 0 ) {
        if( remain >= 5){
            answer += Math.floor(remain / 5);
            remain = remain % 5;
        } else if( remain >= 3) {
            answer += Math.floor(remain / 3);
            remain = remain % 3;            
        } else {
            answer += remain;
            remain = 0
        }
    }
    
    
    return answer;
}