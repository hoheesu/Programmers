function solution([...s]) {
    let Mid = Math.floor(s.length / 2)
    return s.length % 2 ? s[Mid] : s[Mid-1] + s[Mid]
    
}