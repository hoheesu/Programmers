function solution(p, c) {
    let sH = new Map
    for( const x of p ){
        sH.set(x, (sH.get(x) || 0) +1)
    }
    for( const x of c){
         sH.set(x, (sH.get(x) || 0)-1)
    }
    for( const[k,v] of sH){
        if(v === 1){
            return k
        }
    }
    
    
}