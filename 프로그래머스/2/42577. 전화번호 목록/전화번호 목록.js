function solution(phone_book) {
    const new_pb = phone_book.sort();
    for (let i = 0; i < new_pb.length - 1; i++) {
        if (new_pb[i + 1].startsWith(new_pb[i])) {
            return false;
        }
    }
    return true;
}