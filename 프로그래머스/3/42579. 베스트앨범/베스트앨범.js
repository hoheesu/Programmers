function solution(genres, plays) {
    const answer = [];
    const h = {};
    const a1 = []
    const a2 = []
    
    genres.forEach((g, i) => {
        h[g] = h[g] ? h[g] + plays[i] : plays[i]
        a2.push([g, plays[i]])
    })
    
    for ( const k in h ) {
        a1.push([k, h[k]])
    }
    
    const aa = a1.sort((a,b) => b[1] - a[1]).map(item => item[0]);
    
    for( const x of aa) {
        const temp = []
        
        a2.forEach((a, i) => {
            if( x === a[0] ) temp.push([i, a[1]])
        })
    
        const y = temp.sort((a,b) => b[1] - a[1]).map(item => item[0]);    
        
        if (!(y.length - 1)) {answer.push(y[0])}
        else answer.push(y[0], y[1])
    }
    
    return answer;
}