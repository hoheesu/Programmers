function solution(arr) {
    let answer = 0;
    for( const x of arr){
        answer += x
    }
    answer = (answer / arr.length)
    return answer;
}