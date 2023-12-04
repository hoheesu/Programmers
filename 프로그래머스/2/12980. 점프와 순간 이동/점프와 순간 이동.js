function solution(n) {
    let answer = 0;
    let i = n
    while ( i > 0 ) {
        if (i % 2 !== 0){
            answer +=1
        } 
        i = Math.floor(i/2)
    }
    return answer;
}