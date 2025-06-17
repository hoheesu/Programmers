function solution(want, number, discount) {
    let count = 0;
    const hash = new Map()
    for( const i in want ) {
         hash.set(want[i], number[i])
    }
    let temp = 10; let nowI = 0
    for( let i = 0; i < discount.length; i ++ ) {
        const x = discount[i]
        if( !!hash.get(x) ) {
            // console.log("START", i, temp, nowI)
            hash.set(x, hash.get(x) - 1);
            temp --;
            if ( !temp ) { 
                for( const j in want ) {
                    hash.set(want[j], number[j])
                }
                temp = 10;
                count ++;
                i = nowI;
                nowI += 1
                // console.log("COUNT",i, nowI, count)
            }
        } else {
            for( const j in want ) {
                hash.set(want[j], number[j])
            }
            temp = 10;
            i = nowI;
            nowI += 1
            // console.log("BREAK",i, nowI)
        }
    }
    return count
}