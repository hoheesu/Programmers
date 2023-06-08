function solution(arr1, arr2) {
    let answer = []
    for(const i in arr1){
        // answer[i] = [];
        answer[i] = [];
        for( const j in arr1[i] ){
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    return answer
}