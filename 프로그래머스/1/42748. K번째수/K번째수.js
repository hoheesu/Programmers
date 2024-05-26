function solution(array, commands) {
    let answer = []
    for( const x of commands ) {
        const newArr = array.slice(x[0]-1, x[1]).sort((a,b)=> Number(a) - Number(b))
        answer.push(newArr[x[2]-1])
    }
    return answer
}