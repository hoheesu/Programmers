function solution(arr) {
    let answer = 0;
    arr.map(x => answer += x)
    answer = (answer / arr.length)
    return answer;
}