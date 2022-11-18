function solution(lottos, win_nums) {
    let ranking = {6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    let answer = [];
    let cnt = 0
    let zeroCnt = 0
    for( const num of lottos){
        if( num === 0 ){
            zeroCnt ++
        }
        for( const win of win_nums){
                if( num === win){
                    cnt++
                }
            }
    }

    answer.push(ranking[cnt+zeroCnt])
    answer.push(ranking[cnt])
    
    
    return answer;
}