function solution(num_list) {
    let even = 0;
    let odd = 0;
    for(const x of num_list){
        x % 2 ? odd ++ : even ++;
    }
    
    return [even, odd];
}