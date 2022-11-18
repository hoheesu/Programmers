function solution(numbers) {
    let answer = [];
    let arr = []
    let a = 1
    for(let x = 0; x < numbers.length-1; x++){
        for( let xx = a; xx<numbers.length; xx++){
            arr.push(numbers[x]+numbers[xx])
        }
        a++
    }
    const map = new Map()
    for( const s of arr ){
        map.set(s,(map.get(s) || 0) +1)
    } for ( let [k,v] of map){
        answer.push(k)
    }
    
    return answer.sort((a,b)=>a-b);
}