function solution(d, budget) {
    let answer = 0;
    let sum = 0
    
    d.sort((a,b)=>a-b)
    console.log(d)
    
    for( const x of d){
        sum += x
        if( sum <= budget){
            answer ++
        }else{
            break
        }
    }
    return answer
    
}