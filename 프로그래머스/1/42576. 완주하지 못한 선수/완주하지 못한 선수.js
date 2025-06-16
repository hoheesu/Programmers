function solution(p, c) { 
    let answer = "";
    const hash = new Map()
    for ( const x of p ) {hash.set(x, ( hash.get(x) || 0) + 1 )}
    for ( const x of c ) {hash.set(x, ( hash.get(x) || 0) - 1 )}
    hash.forEach((value, key) => value ? answer = key : answer)
    return answer
}