function solution(nums) {
    const half =  nums.length / 2;
    const hash = new Map()
    
    for ( const num of nums ) {
        hash.set(num,( hash.get(num) || 0 ) + 1 )
    }
    
    const temp = hash.size
    return half <= temp ? half : temp
}