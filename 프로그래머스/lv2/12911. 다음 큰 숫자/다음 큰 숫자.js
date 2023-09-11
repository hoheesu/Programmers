function solution(n) {
    let answer = 0;
    let cnt = 0;
    let i = 1
    for( const x of n.toString(2).split('')){
        if( x==='1' ) cnt ++
    }
    while( i < n*2 ){
        let n1 = n + i
        let cnt1 = 0;
        for( const x of n1.toString(2).split('')) {
            if(x==='1') cnt1 ++
        }
        if( cnt === cnt1 ) return n1
        i++
    }
}