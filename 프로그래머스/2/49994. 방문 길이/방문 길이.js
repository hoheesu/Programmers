function solution(dirs) {
    let answer = 0;
    const coordinate = [0,0]
    const temp = [[0,0]]
    
    for ( const x of dirs ) {
        
        if(x === "U" && coordinate[1] < 5) { 
            coordinate[1] ++; 
            temp.push([...coordinate])
            answer ++
        }
        if(x === "D" && coordinate[1] > -5) { 
            coordinate[1] -- 
            temp.push([...coordinate])
            answer ++
        }
        if(x === "L" && coordinate[0] > -5) { 
            coordinate[0] -- 
            temp.push([...coordinate])
            answer ++
        }
        if(x === "R" && coordinate[0] < 5) { 
            coordinate[0] ++
            temp.push([...coordinate])
            answer ++
        } 
    }
    
    
//     for( let i = 0; i <= temp.length; i++ ) {
//         if( i%2 === 1){
            
//         }
//     }
    
    
    return answer;
}