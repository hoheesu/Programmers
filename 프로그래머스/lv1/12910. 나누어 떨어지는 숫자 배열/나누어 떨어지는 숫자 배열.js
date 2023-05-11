function solution(arr, divisor) {
    let answer = []
    for( const x of arr ){
        if( x % divisor === 0 ){
            answer.push(x)
        }
    }
    return answer.length ? answer.sort((a,b)=>a-b) : [-1]
}