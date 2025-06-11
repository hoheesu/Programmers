function solution(dirs) {
    let answer = 0;
    let position = [0, 0]
    let loads = []
    
    for( const dir of dirs ) {
        const calcDir = calcDirs(dir, position)
        if( !calcDir ) continue
        position = calcDir.pos
        
        const sPos = calcDir.pos.join(',')
        
        loads.push(sPos+calcDir.temp, calcDir.temp+sPos)
        answer ++
    }
    
    const sLoads = new Set(loads)
    return answer - (loads.length - sLoads.size) / 2
}

function calcDirs (dir, pos) {
    const temp = pos.join(',')
    if( dir === 'U' ) {
        if(pos[1] === 5) return null
        pos[1] += 1
    }
    if( dir === 'D' ) {
        if(pos[1] === -5) return null
        pos[1] -= 1
    }
    if( dir === 'L' ) {
        if(pos[0] === -5) return null
        pos[0] -= 1
        
    }
    if( dir === 'R' ) {
        if(pos[0] === 5) return null
        pos[0] += 1
    }
    return { pos, temp }
}