function solution(n, words) {
    // let wrong = 0;
    let wrong = []
    
    for( let i = 0; i < words.length-1; i++){
        const word = words[i]
        let nextWordA = words[i + 1]
        if(word[word.length-1] !== nextWordA[0]){
            wrong.push(i+2)
        }
        if(words.includes(word,i+1)){
            wrong.push(words.indexOf(word,i+1) + 1)
        }
    }          
    wrong.sort((a,b)=>a-b)
    wrong = wrong[0]
    return !wrong ? [0,0] : [wrong % n ? wrong % n : n , Math.ceil(wrong / n)]

}

console.log(solution(4, ['a','aba','aba','a']))
// console.log(solution(2, ['land', 'dream', 'mom', 'mom', 'ror']))
// console.log(solution(2, ["land", "dream", "mom", "mom"]))

