function solution(n) {
    let arr = n.toString().split('').reverse()
    for(const i in arr){
       arr[i] =  Number(arr[i])
    }
    return arr
    
}