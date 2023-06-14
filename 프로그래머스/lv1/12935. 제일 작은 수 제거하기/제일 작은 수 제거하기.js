function solution(arr) {
    const minNum = Math.min(...arr); 
    const newArr = arr.filter(num => num !== minNum);
    return arr.length<=1 ? [-1] : newArr
}