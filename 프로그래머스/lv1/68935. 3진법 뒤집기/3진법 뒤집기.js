function solution(n) {
    
    n = n.toString(3).split('').reverse().join('');
    let result = parseInt(n, 3).toString()
    return Number(result);    
}