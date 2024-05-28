function solution(sizes) {
    let max = [0, 0]
    for( const x of sizes ) {
        x.sort((a,b)=>b-a)
        max[0] = Math.max(x[0], max[0])
        max[1] = Math.max(x[1], max[1])
    }
    return max[0] * max[1]
}