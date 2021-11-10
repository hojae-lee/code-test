// 각 경우의 갯수의 +1 을 하여 곱한다음 -1 을 한게 경우의 수의 공식입니다. 해당 문제는 경우의 수에 대한 공식을 알고 있어야 풀 수 있음..
function solution(clothes) {
  let answer = 1;
  const obj = {};
  
  // 키 값으로 갯수를 구해옴.
  clothes.forEach(c => {
    obj[c[1]] = obj[c[1]] ? obj[c[1]] + 1 : 1;
  });
  
  // 객체의 값을 배열로 만들어줍니다... 
  const objVal = Object.values(obj);
  // 키의 갯수 +1 을 하여 곱하여 준다.
  objVal.forEach(v => answer *= (v + 1) );
  
  // 아무것도 입지 않은 경우가 있어 빼준다.
  return answer - 1;
}