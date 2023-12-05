function solution(a, b, n) {
    let answer = 0;
    let i = n;
    while(i >= a){
        answer += b * (Math.floor(i / a));
        i = b * (Math.floor(i / a)) + i % a;
    }
    
    return answer;
}