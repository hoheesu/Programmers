function solution(my_string) {
    let answer = [];
    for (const x of my_string){
        if( !isNaN(x) ) answer.push(Number(x))
    }
    return answer.sort((a,b) => a-b);
}