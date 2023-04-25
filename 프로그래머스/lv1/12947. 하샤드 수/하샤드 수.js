function solution(x) {
    let newX = x.toString().split('')
    let sum = 0
    newX.forEach((a) => sum += Number(a))
    return x%sum ? false: true
    
}