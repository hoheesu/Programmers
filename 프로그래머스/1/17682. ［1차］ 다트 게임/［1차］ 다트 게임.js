function solution(dartResult) {
    let answer = 0;
    
    let pointArr = [];
    
    let calc = []
    
    let prevType = ''
    
    const dartArr = dartResult.split('')
    dartArr.forEach((e,i)=>{
        if( !isNaN(e) ) {            
            if(!isNaN(dartArr[i-1])) {
                pointArr[pointArr.length - 1] = Number(dartArr[i-1]+e)
            } else {
                pointArr.push(Number(e))
            }
        }
        
        if( isNaN(e) ) {
            console.log(pointArr)
            const prevcalc = pointArr[pointArr.length - 2]
            const nowcalc = pointArr[pointArr.length - 1]
            console.log(e,'계산 시작 전 nowpoint',nowcalc)
            
            switch(e) {
                case 'S':
                     return pointArr[pointArr.length - 1] = nowcalc
                case 'D':
                     return  pointArr[pointArr.length - 1] = nowcalc ** 2
                case 'T':
                    return  pointArr[pointArr.length - 1] = nowcalc ** 3
                case '*':
                     return pointArr[pointArr.length - 2] = prevcalc * 2,  pointArr[pointArr.length - 1]=nowcalc * 2
                case '#':
                     return  pointArr[pointArr.length - 1] = nowcalc * -1
            }        
        }
        
    })
    return pointArr.reduce((a,b)=>a+b);
}