function solution(sizes) {
    let maxX = [];
    let maxY = [];
    for( const x of sizes ) {
        x.sort((a,b)=>b-a);
        maxX.push(x[0])
        maxY.push(x[1]) 
    } 
    return Math.max(...maxX) * Math.max(...maxY)
}