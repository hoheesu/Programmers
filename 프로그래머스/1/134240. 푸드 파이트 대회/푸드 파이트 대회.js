function solution(food) {
    let answer = '';
    for( let i = 0; i < food.length - 1; i ++ ){
        const frequency = Math.floor(food[i + 1] / 2)
        for( let j = 0; j < frequency; j ++ ){
            answer += i+1
        }
    }
    return answer += '0'+answer.split('').reverse().join('')
}