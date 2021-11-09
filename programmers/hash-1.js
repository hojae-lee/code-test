function solution(participant, completion) {
  var answer = '';
  // 참여자와 완료자를 하나의 배열에서 보기 위해 정렬을 한다.
  participant.sort();
  completion.sort();
  
  for (var i = 0; i < participant.length; i++) {
    // 참여자와 완료자가 다른 경우를 찾는다.
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}

solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]); // 'vinko'
solution(["leo", "kiki", "eden"], ["eden", "kiki"]) // 'leo'
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]) // 'mislav'