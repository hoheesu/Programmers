function solution(s) {
    let result = [0, 0];
    while( s !== '1' ){
        let cnt1 = 0;
        for( const i of s){
            if( i === '1' ) cnt1++;
        }
        result[1] += s.length - cnt1;
        s = cnt1.toString(2);
        result [0] ++
    }
    return result
} 
