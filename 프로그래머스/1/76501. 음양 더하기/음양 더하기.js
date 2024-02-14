// function solution(absolutes, signs) {
//     let answer = 0;
//     absolutes.forEach((a,i)=>{
//         !signs[i] ? answer -= a : answer += a
//     })
//     return answer
// }
function solution(absolutes, signs) {
    let answer = 0;
    for ( let i = 0; i < absolutes.length; i++ ) {
        signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
    }
    return answer;
}