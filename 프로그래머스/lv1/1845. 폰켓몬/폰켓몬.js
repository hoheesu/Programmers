function solution(nums) {
    let answer = 0;
    let nH = new Map()
    for(const x of nums){
        nH.set(x, (nH.get(x) || 0 ) +1)
    }
    console.log(nH.size);
    if((nums.length / 2) > nH.size){
        answer = nH.size
    }else{
        answer = nums.length / 2
    }
    return answer;
}