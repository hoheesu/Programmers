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
                    if(stack[stack.length-1] === stack[stack.length-2]){
                        stack.pop()
                        stack.pop()
                        answer+=2
                    }
                break
            }
        }
    }
    return answer;
}