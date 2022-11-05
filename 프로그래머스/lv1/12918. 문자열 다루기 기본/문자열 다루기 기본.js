function solution(s) {
    let n = s.length
    if (s.includes('e')) return false
    if(n === 4 || n=== 6){
        return isNaN(Number(s)) ? false : true
    }else{
        return false
    }
}

console.log(solution('3e10'))