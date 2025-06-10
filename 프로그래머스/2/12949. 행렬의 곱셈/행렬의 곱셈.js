function solution(arr1, arr2) {
    const answer = []
    for( let i = 0 ; i < arr1.length; i++ ){
        const temp1 = []
        for( let ii = 0; ii < arr2[0].length; ii++){
            let temp2 = 0
            
            for(let iii = 0; iii < arr1[0].length; iii++){
                temp2 += arr1[i][iii] * arr2[iii][ii]
            }
            temp1.push(temp2)
        }
        answer.push(temp1)
    }
    return answer
}

