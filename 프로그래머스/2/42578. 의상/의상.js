function solution(clothes) {
    let answer = 1;
    const clothesH = new Map()
    
    for( const x of clothes ) { 
        clothesH.set(x[1], (clothesH.get(x[1]) || 0) + 1)
    }
    clothesH.forEach((v, k)=>{
        answer *= v + 1
    })
    return answer - 1
    // return clothesH.size === 1 ? answer : answer + clothes.length;
}