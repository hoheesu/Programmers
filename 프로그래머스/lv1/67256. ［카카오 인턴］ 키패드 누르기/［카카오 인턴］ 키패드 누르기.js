function solution(num, hand) {
    const key = { 
        1: [1,1], 
        2: [1,2],
        3: [1,3],
        4: [2,1],
        5: [2,2],
        6: [2,3],
        7: [3,1],
        8: [3,2],
        9: [3,3],
        '*': [4,1],
        0: [4,2],
        '#': [4,3]
    }
    const calc = (k,lr) => Math.abs(k[0] - lr[0]) + Math.abs(k[1] - lr[1])
    
    let answer = ''
    let l = key['*']
    let r = key['#']
    for(const x of num){
        let k = key[x]
        if( k[1] === 1 ){
            l = k
            answer += 'L'
        }else if( k[1] === 3 ){
            r = k
            answer += 'R'
        }else{
            if(calc(k,l) < calc(k,r)){
                l = k
                answer += 'L'
            }else if(calc(k,l) > calc(k,r)){
                r = k
                answer += 'R'
            }else{
                if( hand === 'right'){
                    r = k
                    answer += 'R'
                }else{
                    l = k
                    answer += 'L'
                }
            }
        }
    }
    return answer;
}
