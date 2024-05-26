function solution(numbers) {
    const answer = numbers.sort( (a,b)=>('' + b + a ) - ('' + a + b) ).join('')
    return Number(answer) ? answer : "0"
}