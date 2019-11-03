// https://programmers.co.kr/learn/courses/30/lessons/17676?language=javascript
function traffic(lines) {
  var answer = 0;

  for (var i = 0; i < lines.length; i++) {
    var currentTime = new Date(lines[i].slice(0, 23)).getTime();
    var count = 1;

    for (var j = i + 1; j < lines.length; j++) {
      var tempTime =
        new Date(lines[j].slice(0, 23)).getTime() -
        Number(lines[j].slice(24, lines[j].length - 1)) * 1000 +
        1;
      if (currentTime + 1000 > tempTime) {
        count++;
      }
    }

    if (answer < count) {
      answer = count;
    }
  }

  return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript
function network(n, computers) {
  var answer = 0;

  var arrVisit = new Array(n);

  function visit(node) {
    arrVisit[node] = true;

    var arrConnect = computers[node];

    for (var i = 0; i < arrConnect.length; i++) {
      if (node === i || !arrConnect[i] || arrVisit[i]) {
        continue;
      }

      visit(i);
    }
  }

  for (var i = 0; i < n; i++) {
    if (arrVisit[i]) {
      continue;
    }

    visit(i);

    answer++;
  }

  return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/43105?language=javascript
function triangle(triangle) {
  var answer = 0;

  var arrResult = triangle[0];

  for (var i = 1; i < triangle.length; i++) {
    var arrTemp = [];

    for (var j = 0; j < arrResult.length; j++) {
      var child_1 = arrResult[j] + triangle[i][j];

      if (!arrTemp[j] || arrTemp[j] < child_1) {
        arrTemp[j] = child_1;
      }

      arrTemp[j + 1] = arrResult[j] + triangle[i][j + 1];
    }

    arrResult = arrTemp;
  }

  arrResult.map(r => {
    if (answer < r) {
      answer = r;
    }
  });

  return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/42628?language=javascript
function queue(operations) {
  var answer = [];

  var tempArr = [];
  var tempNum = null;

  for (var i = 0; i < operations.length; i++) {
    if (operations[i][0] === "I") {
      tempNum = Number(operations[i].slice(2));

      tempArr.push(tempNum);
      tempArr.sort(function(a, b) {
        return a - b;
      });
    } else if (operations[i] === "D 1") {
      tempArr.pop();
    } else if (operations[i] === "D -1") {
      tempArr.splice(0, 1);
    }
  }

  if (tempArr[tempArr.length - 1]) {
    answer[0] = tempArr[tempArr.length - 1];
  } else {
    answer[0] = 0;
  }

  if (tempArr[0]) {
    answer[1] = tempArr[0];
  } else {
    answer[1] = 0;
  }

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
function marathon(participant, completion) {
  var answer = "";

  participant = participant.sort(function(a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    return 0;
  });

  completion = completion.sort(function(a, b) {
    if (a > b) return -1;
    else if (a < b) return 1;
    return 0;
  });

  for (var i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }

  if (answer === "") {
    answer = participant[participant.length - 1];
  }

  return answer;
}

//https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
function example(answers) {
  var answer = [];

  var p1 = [1, 2, 3, 4, 5];
  var p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var arrCount = [0, 0, 0];
  var maxCount = 0;

  for (var i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % 5]) {
      ++arrCount[0];
      if (maxCount < arrCount[0]) {
        maxCount = arrCount[0];
      }
    }

    if (answers[i] === p2[i % 8]) {
      ++arrCount[1];
      if (maxCount < arrCount[1]) {
        maxCount = arrCount[1];
      }
    }

    if (answers[i] === p3[i % 10]) {
      ++arrCount[2];
      if (maxCount < arrCount[2]) {
        maxCount = arrCount[2];
      }
    }
  }

  for (var i = 0; i < arrCount.length; i++) {
    if (maxCount === arrCount[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
function k_order(array, commands) {
  var answer = [];

  for (var i = 0; i < commands.length; i++) {
    var arrCondition = commands[i];
    var arrTarget = array.slice(arrCondition[0] - 1, arrCondition[1]);

    arrTarget = arrTarget.sort(function(a, b) {
      return a - b;
    });

    answer.push(arrTarget[arrCondition[2] - 1]);
  }

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
function truck(bridge_length, weight, truck_weights) {
  var answer = 0;

  var arrBridge = [];
  var totalWeightOnBridge = 0;
  var truckWeight = 0;

  while (truck_weights.length > 0 || arrBridge.length > 0) {
    ++answer;

    // 다리에서 트럭 제거
    if (arrBridge.length > 0 && arrBridge[0].count <= 0) {
      totalWeightOnBridge -= arrBridge[0].weight;
      arrBridge.splice(0, 1);
    }

    // 다리에 트럭 추가
    if (totalWeightOnBridge + truck_weights[0] <= weight) {
      truckWeight = truck_weights.splice(0, 1)[0];
      arrBridge.push({ weight: truckWeight, count: bridge_length });
      totalWeightOnBridge += truckWeight;
    }

    for (var i = 0; i < arrBridge.length; i++) {
      --arrBridge[i].count;
    }
  }

  return answer;
}

// https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
function targetNumber(numbers, target) {
  var answer = 0;

  function calc(arrNum, curCal) {
    if (arrNum.length === 1) {
      if (target === curCal + arrNum[0] || target === curCal - arrNum[0]) {
        ++answer;
      }
      return;
    }

    calc(arrNum.slice(1), curCal + arrNum[0]);
    calc(arrNum.slice(1), curCal - arrNum[0]);
  }

  calc(numbers, 0);

  return answer;
}
