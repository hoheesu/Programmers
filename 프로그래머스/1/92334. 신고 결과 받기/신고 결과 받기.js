function solution(id_list, report, k) {
    const result = []
    const answer = new Map();
    const hash = new Map();
    for ( const x of report ) {
        const temp = x.split(" ");
        const ttemp = hash.get(temp[1]) || []
        hash.set( temp[1], [...ttemp, temp[0]] )
    }
    
    for( const x of id_list ) {
        const temp = new Set(hash.get(x))
        hash.set(x, [...temp])
        const ttemp = hash.get(x)
        
        if( ttemp.length >= k ) {
            for( const xx of ttemp ) {
                answer.set(xx, (answer.get(xx) || 0) + 1)
            } 
        }
    }

    for ( const x of id_list ) {
        const temp = answer.get(x) || 0
        result.push(temp)
    }
    
    return result;
}