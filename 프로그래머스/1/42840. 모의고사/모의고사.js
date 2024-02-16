function solution(answers) {
 const students = {
        1: [1, 2, 3, 4, 5],
        2: [2, 1, 2, 3, 2, 4, 2, 5],
        3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    }
    const result = []
    const arr = {}
    for (const student in students) {
        let check = 0;
        for (let i = 0; i < answers.length; i++) {
            if (students[student][i % students[student].length] === answers[i]) {
                check++;
            }
             // if( students[student][i] === answers[i] ) check ++
        }
        arr[student] = check;
    }

    const maxScore = Math.max(...Object.values(arr));
    for (const key in arr) {
        if (arr[key] === maxScore) result.push(+key);
    }

    return result;
}
