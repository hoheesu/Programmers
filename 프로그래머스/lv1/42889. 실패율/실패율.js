function solution(N, stages) {
    var answer = [];
    let fail = []
    const st = new Map()
    
    for( const x of stages ){
        st.set(x, (st.get(x) || 0) +1)
    }

    
    let stSize = stages.length
    for( let i = 1; i <= N; i++){
        let v = st.get(i)
        if( v === undefined) v = 0
        fail.push([i, v/stSize])
        stSize -= v
    }
    
    fail.sort((a, b) => b[1] - a[1])
    for( let i = 0; i < N; i++){
        answer.push(fail[i][0])
    }
    return answer
}