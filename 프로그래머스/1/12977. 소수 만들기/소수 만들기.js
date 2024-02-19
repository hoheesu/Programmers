function solution(nums) {
    let answer = 0
    let sum = []
    let count = 0

    for( let x = 0; x < nums.length; x++){
        for( let xx = x+1; xx < nums.length; xx++){
            if( x !== xx){
                for( let xxx = xx+1; xxx < nums.length; xxx++){
                    if( x!==xx && x !== xx && xx!==xxx){
                        sum.push(nums[x]+nums[xx]+nums[xxx])
                    }
                }
            }
        }
    }
    // console.log(sum)
    for( const num of sum){
        let noPrime = 0
        for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) { //이 부분에서 num이  다른 수로 나눠떨어진다면 소수가 아님
                noPrime ++
            }
        }
        noPrime === 0 ? count ++ : count
    }
     return count
}