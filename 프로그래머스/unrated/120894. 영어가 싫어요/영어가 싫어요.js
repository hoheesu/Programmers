function solution(numbers) {
    const numS = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    numS.forEach((element,index)=>{
        numbers = numbers.replaceAll(element,index)
    })
    return Number(numbers);
}