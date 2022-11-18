// [0,0,0,0,0]
// [0,0,1,0,3]
// [0,2,5,0,1]
// [4,2,4,4,2]
// [3,5,1,3,1]

// [1,5,3,5,1,2,1,4]

function solution(board, moves) {
    let answer = 0;
    const bn = board.length
    let stack = []

    for( const move of moves){
        let m = move-1
        for(let i = 0; i < bn; i++){
            if( board[i][m] !== 0 ){ 
                stack.push(board[i][m])
                board[i][m] = 0
                for( const s in stack){
                    if(stack[s] === stack[s-1]){
                        stack.pop()
                        stack.pop()
                        answer+=2
                    }
                }
                break
            }
        }
    }
    return answer;
}