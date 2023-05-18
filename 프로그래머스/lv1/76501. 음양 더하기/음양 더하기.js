function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((a,i)=>{
        if( !signs[i] ){
            answer -= a
        }else{
            answer += a      
        }
    })
    return answer
}