function solution(n, arr1, arr2) {
    let answer = [];
    for( const x of arr1 ) {
        const bin = x.toString(2).padStart(n,0)
    }
    
    arr1.forEach((el, index)=>{
        const bin1 = el.toString(2).padStart(n,0)
        const bin2 = arr2[index].toString(2).padStart(n,0)
        let hash = ''
        for( let i = 0; i < n; i++){
            (bin1[i]==='1' || bin2[i] === '1') ? hash += '#' : hash += ' '
        }
        answer.push(hash)
    })
    return answer;
}
