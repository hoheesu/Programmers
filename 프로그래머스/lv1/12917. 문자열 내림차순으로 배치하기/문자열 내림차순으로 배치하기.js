function solution (s) {
    let answer = '';
    let arr = [];
    for (const x of s.split("")) {
        arr.push(x.charCodeAt());
    }
    arr.sort((a, b) => b - a);
    for (const x of arr) {
        answer += String.fromCharCode(x);
    }
    console.log(answer);
    return answer;
}