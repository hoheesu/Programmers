function solution(n, m) {
    let answer = [];
    let NGCD = [], MGCD = [];
    
    Gcd(n,NGCD);
    Gcd(m,MGCD);
    
    outerLoop: for( let i = NGCD.length-1; i>=0; i--){
        for( let j = MGCD.length-1; j>=0; j--){
            if( NGCD[i] === MGCD[j]){
                answer.push(NGCD[i])
                break outerLoop;
            }
        }
    }
    answer.push(n*m / answer[0])
    return answer
}

function Gcd (num, gcd) {
    for( let i = 1; i<=num; i++ ){
        if( num % i === 0 ){
            gcd.push(i);
        }
    }
}