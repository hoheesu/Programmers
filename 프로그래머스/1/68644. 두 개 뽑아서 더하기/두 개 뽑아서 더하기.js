
function solution(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      temp.push(arr[i] + arr[j]);
    }
  }

  return [...new Set(temp)].sort((a, b) => Number(a) - Number(b));
}