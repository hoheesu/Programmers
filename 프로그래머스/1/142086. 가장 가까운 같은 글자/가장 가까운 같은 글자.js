function solution(s) {
    let answer = [];
    let sArr=[...s]
    sArr.forEach((a, index)=>{
        if(index !== 0){
            for( let j = index - 1 ; j >= 0; j-- ){
                if( sArr[j] === a ){
                    answer.push(index - j);
                    break;
                } 
                if(j === 0 && sArr[0] !== a){
                    answer.push(-1)
                }
            }            
        } else {
            answer.push(-1)
        }
    })
    return answer;
}