function solution(s) {
    let answer = 0;
    let cntX = 0;
    let cntNotX = 0;
    let prevStr = '';
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (!prevStr) {
            prevStr = char;  // 첫 글자를 x로 설정
        }

        if (char === prevStr) {
            cntX++;  // x의 횟수 증가
        } else {
            cntNotX++;  // x가 아닌 다른 문자의 횟수 증가
        }

        // 두 횟수가 같으면 분리
        if (cntX === cntNotX) {
            answer++;
            cntX = 0;
            cntNotX = 0;
            prevStr = '';  // 다시 초기화
        }
    }

    // 마지막에 남은 문자열이 있으면 추가로 분리
    if (prevStr) {
        answer++;
    }

    return answer;
}
