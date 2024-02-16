function solution(n, m, section) {
    let answer=0, i = 0;
    
   section.map((e) => {
    if (e > i) {
      answer++;
      i = e + m - 1;
    }
  });
    
    return answer;
}