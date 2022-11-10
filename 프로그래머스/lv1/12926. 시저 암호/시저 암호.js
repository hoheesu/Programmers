function solution(s, n) {
    let answer = ''
    let arr = []
    
    for( const x of s ){
        let ascii = x.charCodeAt()
        let sum = ascii + n
        
        if( ascii === 32 ) {
            arr.push(ascii)
        }
        else if( ascii >= 97 && ascii <= 122) {
            if( sum > 122 ) {
                arr.push(sum - 26)
            } else {
                arr.push(sum)
            }
        }
        else if( ascii >= 65 && ascii <= 90){
            if(sum > 90) {
                arr.push(sum - 26)
            }else {
                arr.push(sum)
            }
        }
    }
    for( const x of arr){
        answer += String.fromCharCode(x)
    }
    return answer
        
}