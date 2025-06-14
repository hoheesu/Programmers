function solution(progresses, speeds) {
    const answer = [];
    const arr = []
    
    for ( const i in progresses ) {
        arr.push(Math.ceil((100 - progresses[i]) / speeds[i]))
    }
    let cnt = 0; 
    let tmp = -1; 
    while(1) {
        const x = arr.shift();
        
        if( tmp === -1 ) {
            cnt = 0; 
            tmp = x
        }
         console.log(cnt, tmp, answer)
       
        if( tmp < x ) {
            answer.push(cnt)
            cnt = 0; 
            tmp = x
        }
        if( tmp >= x) {
            cnt++
        }
        if(!arr.length){
            answer.push(cnt)
            return answer;
        }
    }
}
