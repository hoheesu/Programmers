function solution(progresses, speeds) {
    let answer = [];
    let workStack = [];
    let count = 0;
    
    for( let i = 0; i < progresses.length; i ++ ) {
        workStack.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    
    let maxTime = workStack[0]
    workStack.forEach((e,i)=>{
        if(maxTime === Math.max(maxTime, e)) count++
        else {
            answer.push(count)
            maxTime = e
            count = 1
        }
        if( workStack.length - 1 === i) answer.push(count)
    })
    return answer
}
