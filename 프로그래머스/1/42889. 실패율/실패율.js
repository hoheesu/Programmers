function solution(N, stages) {
    const stage = new Array(N + 1).fill(0)
    const failed = []
    for( const x of stages ) {
        for( let i = 0; i < x; i ++ ) {
            stage[i]++
        }
    }
    for ( let i = 0; i < stage.length - 1; i++ ) {
        const fail = stage[i] - stage[i+1]
        failed.push([i, fail / stage[i]])
    }
    
    failed.sort((a, b) => b[1] - a[1])
    return failed.map((e) => e[0] + 1)
    

}