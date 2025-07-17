function solution(n, words) {
    const answer = [];
    let turn = 0;
    const hash = new Map();
    
    for ( let i = 0; i < words.length; i++ ) {
        const word = words[i];
        const prevWord = words[i-1]
        const x = hash.get(word);
        if( i && (word[0] !== prevWord[prevWord.length-1]) ) {
            turn = i + 1;
            break;
        }
        if( x ){ 
            turn = i + 1;
            break;
        }
        hash.set(word, hash.get(word) || true)
    }
    console.log(turn)
    return turn ? [turn % n ? turn % n : n, Math.ceil(turn / n)] : [0,0]
}
