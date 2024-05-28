function solution(answers) {
    let result = []
    let count = [0, 0, 0]
    const st1 = [1, 2, 3, 4, 5] 
    const st2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    answers.map((ans, ind) => {
        if( ans === st1[ind % st1.length] ) count[0] += 1
        if( ans === st2[ind % st2.length] ) count[1] += 1
        if( ans === st3[ind % st3.length] ) count[2] += 1
    })
    const maxAns = Math.max(...count)
    for( const i in count){
        if ( maxAns === count[i] ) result.push(i*1+1)
    }
    return result
}