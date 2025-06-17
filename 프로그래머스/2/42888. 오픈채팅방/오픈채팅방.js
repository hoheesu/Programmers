function solution(record) {
    const answer = [];
    const hash = new Map();
    
    for( const x of record ) {
        const arr = x.split(' ');
        if( arr[0] === "Enter" ) hash.set(arr[1], arr[2]);
        if( arr[0] === "Change" ) hash.set(arr[1], arr[2]);
    }
    
    for( const x of record ) {
        const arr = x.split(' ');
        const nickname = hash.get(arr[1]);
        
        if( arr[0] === "Enter" ) answer.push(`${nickname}님이 들어왔습니다.`);
        if( arr[0] === "Leave" ) answer.push(`${nickname}님이 나갔습니다.`);
    }
    
    return answer;
}