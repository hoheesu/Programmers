function solution(a, b) {
    let answer = [];
    let date = new Date(2016, a-1, b,)
    answer = date.toString().split(' ')
    return answer[0].toUpperCase()
}