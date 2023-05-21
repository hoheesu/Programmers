function solution(n) {
    let count = 0; 
    let answer = '';
    while( count < n ){
        count%2===0 ? answer+='수' : answer+='박'
        count ++;
    }
    return answer;
}