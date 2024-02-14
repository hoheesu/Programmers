function solution(phoneNumber) {
    let answer = ''
    phoneNumber.split('').forEach((x,i) => i < phoneNumber.length-4 ? answer += '*' : answer += `${x}`)
    return answer
}