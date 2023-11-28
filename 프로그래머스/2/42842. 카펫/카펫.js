function solution(brown, yellow) {
    let area = brown + yellow;
    for( let i = 1; i <= area / 2; i++ ){
        for( let j = 1; j <= i; j++){
            if( i * j === area) {              
                if( ((i * 2) + (j-2)*2) === brown){
                    return [i,j]                    
                }
            }
        }
    }
}