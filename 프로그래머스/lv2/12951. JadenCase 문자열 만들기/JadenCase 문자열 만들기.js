function solution(s) {
    let arr = []
    s = s.split(' ')
    
    for( const i in s){
        s[i] = s[i].toLowerCase()
        if ( isNaN(s[i].charAt(0)) ){
             s[i] = s[i].replace(s[i].charAt(0),s[i].charAt(0).toUpperCase())
        }
    }
    return s.join(' ')
}