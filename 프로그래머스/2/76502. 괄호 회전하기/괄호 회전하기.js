function isRight(str){
    const stack = [];
    for(const x of str){
        if(x=='[' || x=='{' || x=='('){
            stack.push(x);
        }
        else{
            const tmp = stack.pop();
            if(x==')' && tmp=='(') continue;
            if(x=='}' && tmp=='{') continue;
            if(x==']' && tmp=='[') continue;
            return false;
        }
    }
    return !stack.length;
}

function solution([...s]) {
    var answer = 0;
    for(let i = 0; i < s.length; i++){
        const tmp = s.shift();
        s.push(tmp);
        if(isRight(s)) answer++;
    }
    return answer;
}