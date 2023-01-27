function solution(s){
    let answer = true;
    let stack = []
    s = s.split("")
    for( const x of s ){
        stack.push(x);
        let sl = stack.length - 1
        if( stack[sl] === ")"){
            if( stack[sl - 1] === "("){
                stack.pop();
                stack.pop();
            }
        }
    }    
    return stack.length ? false : true;
}