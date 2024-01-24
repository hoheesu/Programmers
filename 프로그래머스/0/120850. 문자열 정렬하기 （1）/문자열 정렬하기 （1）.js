function solution(my_string) {
    let answer = [];
    for (const x of my_string){
        if( Number(x) ) answer.push(Number(x))
        if(x === '0') answer.push(0)
    }
    return answer.sort((a,b) => a-b);
}