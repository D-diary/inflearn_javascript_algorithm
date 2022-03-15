function solution(s) {
  const result = {};
  for (let i = 0; i < s.length; i++) {
      if (result[s[i]] === undefined) {
          result[s[i]] = 1;
      } else {
          result[s[i]] += 1;
      }
  }

  const arr = Object.entries(result);
  arr.sort((a, b) => b[1] - a[1]);

  return Number(arr[0][0]);
}