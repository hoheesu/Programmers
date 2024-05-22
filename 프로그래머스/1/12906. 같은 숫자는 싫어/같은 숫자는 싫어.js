function solution(arr){
    let stack = []
    for( const x of arr ){
        if( x !== stack[stack.length - 1] ){
            stack.push(x)
        }
    }
    return stack
}