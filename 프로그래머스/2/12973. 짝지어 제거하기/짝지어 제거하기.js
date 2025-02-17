function solution(s){
    const stack = []
    
    for( const x of s ) {
        if ( stack[stack.length - 1] === x ) {
            stack.pop()
            continue;
        }
        stack.push(x)
    }
    return stack.length ? 0 : 1
    
}