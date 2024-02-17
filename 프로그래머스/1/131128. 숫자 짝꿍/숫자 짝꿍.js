function solution(X, Y) {
    let answer = {}
    let result = ''
    const x = Array.from(X)
    const y = Array.from(Y)
    
    for( let i = 0; i <= 9; i++){
        const xLen = x.filter((e)=> Number(e) === i)    
        const yLen = y.filter((e)=> Number(e) === i)    
        if( Math.min(xLen.length, yLen.length) !== 0 ){
            answer[i] = Math.min(xLen.length, yLen.length)
        }
    }
    for (const [key, value] of Object.entries(answer)) {
        result += key.repeat(value);
    }
    result = result.split('').sort((a, b) => b > a ? 1 : -1)

    if( result.length-1 ){
        while( result[0] === '0' && result.length-1 ){
            result.shift()
        }
    } 
    console.log(result)
    return result.length ? result.join('') : '-1'
}