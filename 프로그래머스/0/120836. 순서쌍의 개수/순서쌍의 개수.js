function solution(n) {
    let answer = 0;
    for( let i =1; i <= Math.sqrt(n); i++ ){
        if(!( n % i) ){
            answer ++
        }
    }
    return Math.sqrt(n) % 1 ? answer * 2 : answer * 2 - 1 
} 