function solution(numbers) {
    const answer = numbers.sort( (a,b)=>('' + b + a ) - ('' + a + b) ).join('')
    return answer*1 ? answer : "0"
}