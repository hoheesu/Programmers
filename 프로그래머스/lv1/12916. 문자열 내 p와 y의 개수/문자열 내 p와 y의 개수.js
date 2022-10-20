function solution([...s]){
    let y = 0
    let p = 0
    
    for(let i = 0; i<s.length; i++){
        if(s[i] === 'y' || s[i] === 'Y'){
            ++y
        }else if(s[i] === 'p' || s[i] === 'P'){
            ++p
        }
    }
    if(y === p){return true}
    else{return false}
}