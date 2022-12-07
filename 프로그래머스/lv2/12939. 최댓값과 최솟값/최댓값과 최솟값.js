function solution(s) {
    let answer = []
    s = s.split(' ')
    answer.push(Math.min(...s))
    answer.push(Math.max(...s))
    return answer.join(' ')
}