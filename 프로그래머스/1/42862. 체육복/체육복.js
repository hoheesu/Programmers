function solution(n, lost, reserve) {
    let answer = n - lost.length;
    reserve = reserve.sort();
    lost = lost.sort();
    
    for( let i = 0; i < lost.length; i++ ) {
        if( reserve.includes(lost[i]) ) {
            reserve.splice( reserve.indexOf(lost[i]), 1);
            lost.splice( i, 1);
            answer ++;
            --i
        }     
    }
    
    for( const x of lost ){
        if ( reserve.includes(x - 1) ){
            reserve.splice( reserve.indexOf(x - 1), 1);
            answer ++;
        } else if ( reserve.includes(x + 1) ){
            reserve.splice( reserve.indexOf(x + 1), 1);
            answer ++;
        }
        // console.log(x, reserve)
        
    }
    return answer;
}

// console.log( solution( 5, [1, 4, 6], [1, 3, 7] )) 
