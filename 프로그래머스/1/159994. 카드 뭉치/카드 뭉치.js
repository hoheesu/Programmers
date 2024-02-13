function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    for( const x of goal ){
        if( cards1[0] === x ){
            cards1.shift()
        } else if ( cards2[0] === x ){
            cards2.shift()
        }else {
            return answer = 'No'
        }
    }    
    return answer;
}
//          cards1	             cards2	                  goal	                    result
// [, "drink", "water"]	[, ]	["i", "want", "to", "drink", "water"]	"Yes"
// [, "water", "drink"]	[, ]	["i", "want", "to", "drink", "water"]	"No"