function solution(phone_book) {
    let answer = true
    const new_pb = phone_book.sort()
    for( let i = 0; i < phone_book.length; i ++ ) {
            if( i < new_pb.length - 1 && new_pb[i] === new_pb[i + 1].slice(0, new_pb[i].length) ) {
                return false
            }
    }
    return answer
}