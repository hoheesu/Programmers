function solution(n){
    let answer = 0;
    const arr = n.toString().split('')
    for( const i of arr){
        answer += Number(i)
    }
    return Number(answer)
}