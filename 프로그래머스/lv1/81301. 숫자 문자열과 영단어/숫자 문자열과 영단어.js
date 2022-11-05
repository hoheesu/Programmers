function solution(s) {
    let answer = 0
    let numArr = ['zero','one','two','three','four','five','six','seven','eight','nine']
    
    for( const i in numArr){
        if(s.includes(numArr[i])){
            s = s.replaceAll(numArr[i], i)
        }
        answer = s
    }
    return Number(answer)
}