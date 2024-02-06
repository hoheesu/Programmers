function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1;
        } else if (a[n] < b[n]) {
            return -1;
        } else {
            return (a[n] < b[n]) ? 1 : a < b ? -1 : 0
        }
    });
}