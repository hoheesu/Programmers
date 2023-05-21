function solution(n) {
    let count = 0; 
    let answer = '';
    while( count < n ){
        answer += (count%2===0) ? '수' : '박'
        count ++;
    }
    return answer;
}