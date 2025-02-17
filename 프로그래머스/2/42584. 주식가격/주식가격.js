function solution(prices) {
    let answer = new Array(prices.length).fill(0);
    const stack = []; 
    
    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i); 
    }

    while (stack.length) {
        const j = stack.pop();
        answer[j] = prices.length - 1 - j; 
    }

    return answer;
}
