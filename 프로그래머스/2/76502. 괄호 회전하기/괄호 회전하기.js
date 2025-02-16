function solution([...s]) {
    let answer = 0
    let i = 0; 
    let stack = []
    
    while ( i < s.length ) {
        const newString = s.shift()
        s.push(newString)
        
        for( const x of s ) {
            stack.push(x)

            if( x === ")" ) {
                if( stack[stack.length - 2] !== "(" ) break
            }
            if( x === "}" ) {
                if( stack[stack.length - 2] !== "{" ) break
            }
            if( x === "]" ) {
                if( stack[stack.length - 2] !== "[" ) break
            }
            if( x === "(" || x === "{" || x === "[" ) continue
            
            stack.pop()
            stack.pop()
        }
        if( !stack.length ) answer ++
        
        i++
        stack = []
    }
    return answer
}