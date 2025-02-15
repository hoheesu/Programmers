function solution(arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        let temp = [];
        
        for (let j = 0; j < arr2[0].length; j++) { // arr2의 열 개수 사용
            let x = 0;
            
            for (let k = 0; k < arr1[0].length; k++) { // arr1의 열 개수 사용
                x += arr1[i][k] * arr2[k][j];
            }
            temp.push(x);
        }
        answer.push(temp);
    }
    return answer;
}

// 0,0 * 0,0 | 0,1 * 1,0 | 0,2 * 2,0
// 0,0 * 0,1 | 0,1 * 1,1 | 0,2 * 2,1
// 0,0 * 0,2 | 0,1 * 1,2 | 0,2 * 1,2

// 1,0 * 0,0 | 1,1 * 1,0 | 1,2 * 2,0
// 1,0 * 0,1 | 1,1 * 1,1 | 1,2 * 2,1
// 1,0 * 0,2 | 1,1 * 1,2 | 1,2 * 2,2


// 2,0 * 0,0 | 2,1 * 1,0 | 2,2 * 2,0
// 2,0 * 0,1 | 2,1 * 1,1 | 2,2 * 2,1
// 2,0 * 0,2 | 2,1 * 1,2 | 2,2 * 2,2
