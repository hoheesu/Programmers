function solution(k, scores) {
    let answer = [];
    let newArr = []
    for( const score of scores){
        newArr.push(score)
        newArr.sort((a,b)=>b-a)
        if(newArr.length === k+1){
            newArr.pop()
        }
        answer.push(newArr[newArr.length-1])
    }
    return answer;
}