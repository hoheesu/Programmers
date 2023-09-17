function solution(s){
    let stack = [];
    for( let i = 0; i< s.length; i++ ){
        s[i] === stack[stack.length - 1] ? stack.pop() : stack.push(s[i])
    }
    return stack.length ? 0 : 1;
}