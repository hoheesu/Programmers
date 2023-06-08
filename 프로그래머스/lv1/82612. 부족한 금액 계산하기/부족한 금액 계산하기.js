function solution(price, money, count) {
    let answer = -1;
    let cost = 0;
    for( let i = 1; i <=count; i++){
        cost += i*price
    }
    return money<=cost ? cost - money : 0;
}