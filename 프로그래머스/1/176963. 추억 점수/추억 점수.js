function solution(name, yearning, photo) {
    let answer = [];
    let map = new Map();
    for( let i = 0; i < name.length; i++ ){
        map.set(name[i], yearning[i])
    }
    for( let i = 0; i < photo.length; i++ ){
        let sum = 0;
        for( let j = 0; j < photo[i].length; j++ ){
            if( map.get(photo[i][j]) ){
                sum += map.get(photo[i][j])            
            }
        }
        answer.push(sum)
    }
    return answer;
}