function solution(array, commands) {
    let answer = []
    let arr = [];
    for( const x of commands ){
        arr = array.slice(x[0]-1,x[1])
        arr.sort((a,b)=>a-b)
        answer.push(arr[x[2]-1])
    }
    return answer;
}