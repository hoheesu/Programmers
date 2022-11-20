function solution(ingredient) {
    let answer = 0;
    let stack = []
    function stA (a){
        return stack[stack.lenth - a]
    }
    for( const x of ingredient){
        stack.push(x)
        let sl = stack.length
        if (stack[sl-4] === 1 && stack[sl-3] === 2 && stack[sl-2] === 3 && stack[sl-1] === 1 ){
            stack.splice(sl-4, 4)
            answer++
        }
    }
    return answer;
}