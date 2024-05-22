function solution(phone_book) {
    let answer = true
    phone_book.sort().forEach((e,i)=>{
        if( i < phone_book.length - 1 ) {
            if( e === phone_book[i + 1].slice(0, e.length) ) {
                return answer = false
            }
        }
    })
    return answer
}