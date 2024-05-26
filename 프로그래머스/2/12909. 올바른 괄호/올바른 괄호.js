function solution(s){
    let stack = [];
    for( const x of s ) {
        stack.push(x)
        if(x === ")") {
            if(stack[stack.length - 2] === "("){
                stack.pop()
                stack.pop()
            }
        }
    }
    return stack.length ? false : true
}