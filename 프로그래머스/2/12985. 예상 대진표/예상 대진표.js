function solution(n,a,b) {
    let answer = 1;
    let tree = Array(n).fill().map((e,i) => {
        if(i === a - 1 || i === b - 1 ) return 100 
        else return 0
    })
    while(Math.ceil(Math.sqrt(tree.length))) {
        tree = [...round(tree)];
        if(tree.length) answer++;
        else break;
    }
    
    return answer;
}

function round (arr) {
    const newArr = []
    for( let i = 0; i < arr.length; i += 2 ) {
        if( arr[i] === arr[i+1] && arr[i] === 100 ) return [];
        else newArr.push(Math.max(arr[i], arr[i+1])) 
    }
    return newArr
}