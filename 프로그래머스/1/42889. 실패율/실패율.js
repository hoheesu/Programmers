function solution(N, stages) {
    let answer = []
    let stage = new Array(N + 1).fill(0)
    for( const x of stages ) {
        for( let i = 0; i < x; i ++ ) {
            stage[i]++
        }
    }
    for( let i = 0; i < stage.length - 1; i++ ) {
        console.log(stage[i+1])
        answer.push([i, (stage[i] - stage[i+1]) / stage[i]])
    }
    
    return answer.sort((a,b) => b[1] - a[1]).map(round => round[0]+1)

}