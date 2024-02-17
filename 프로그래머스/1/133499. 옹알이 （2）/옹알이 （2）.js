function solution(babblings) {//  
    let words = ["aya", "ye", "woo", "ma"]
    let result = 0;
    for( const babbling of babblings){ // babblings각 요소 참조
        for( const word of words){ // 가능한 옹알이 words배열을 참조 
            if( babbling.substr(0, word.length) === word ){ // 
                babblFnc(word, babbling) //  
            } else continue;
        }
    }
    
    function babblFnc (word, babbling) { // 
        const words = ["aya", "ye", "woo", "ma"] // 가능한 옹알이 words배열 생성
        const newBabbling = babbling.replace(word, "")  //  
        words.splice(words.indexOf(word), 1) // ye mawoo [aya woo ma]
        console.log(words, babbling, newBabbling) // 

        if( newBabbling.length === 0 || babbling.length === 0){ //
            console.log(babbling)
            result ++
        }
        for( const x of words ){ //
            if( newBabbling.substr(0, x.length) === x ){ //
                
                babblFnc(x, newBabbling) 
            } 
        }        
    }
    return result

}

