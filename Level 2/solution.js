// 코딩테스트 연습 > 2021 Dev-Matching: 웹 백엔드 개발자(상반기) > 행렬 테두리 회전하기
// solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]);
// const getMinWithrotate = (query, arr) => {
//     const y1 = query[0] - 1;
//     const x1 = query[1] - 1;
//     const y2 = query[2] - 1;
//     const x2 = query[3] - 1;
//     let min = arr[y1][x1];
    
//     let curX = x1;
//     let curY = y1;
//     let pre = min;
    
//     do {
//         if (curX < x2 && curY === y1) {
//             curX++;
//         } else if (curX === x2 && curY < y2) {
//             curY++;
//         } else if (curX > x1 && curY === y2) {
//             curX--;
//         } else if (curX === x1 && curY > y1) {
//             curY--;
//         }
        
//         let temp = arr[curY][curX];
//         arr[curY][curX] = pre;
//         pre = temp;
        
//         min = min > pre ? pre : min;
//     } while (curY !== y1 || curX !== x1);
    
//     return min;
// };

// function solution(rows, columns, queries) {
//     var answer = [];
    
//     let arr = [];
//     let num = 1;
//     for (let i = 0; i < rows; i++) {
//         arr[i] = [];
//         for (let j = 0; j < columns; j++) {
//             arr[i].push(num);
//             num++;
//         }
//     }
    
//     const result = [];
    
//     queries.map(query => {
//         result.push(getMinWithrotate(query, arr));
//     });
    
//     return result;
// }


// 코딩테스트 연습 > 2021 카카오 채용연계형 인턴십 > 거리두기 확인하기
// const checkDistance = (arr, x, y, distance, direction) => {
//     if (distance > 2 || arr[x][y] === 'X') {
//         return true;
//     }
    
//     if (distance > 0 && arr[x][y] === 'P') {
//         return false;
//     }
    
//     if (direction !== 'right' && x > 0) {
//         if (!checkDistance(arr, x - 1, y, distance + 1, 'left')) {
//             return false;
//         }
//     }
//     if (direction !== 'left' && x < 4) {
//         if (!checkDistance(arr, x + 1, y, distance + 1, 'right')) {
//             return false;
//         }
//     }
//     if (direction !== 'down' && y > 0) {
//         if (!checkDistance(arr, x, y - 1, distance + 1, 'up')) {
//             return false;
//         }
//     }
//     if (direction !== 'up' && y < 4) {
//         if (!checkDistance(arr, x, y + 1, distance + 1, 'down')) {
//             return false;
//         }
//     }
    
//     return true;
// };

// const isOk = arr => {
//     for (let x = 0; x < arr.length; x++) {
//         for (let y = 0; y < arr.length; y++) {
//             if (arr[x][y] === 'P' && !checkDistance(arr, x, y, 0)) {
//                 return 0;
//             }
//         }
//     }
    
//     return 1;
// };

// function solution(places) {
//     var answer = [];
    
//     places.map(place => {
//         answer.push(isOk(place.map(p => p.split(''))));
//     });
    
//     return answer;
// }


// 코딩테스트 연습 > 2021 KAKAO BLIND RECRUITMENT > 메뉴 리뉴얼
// solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
// solution(	["XYZ", "XWY", "WXA"], [2, 3, 4]);
// const getTargets = (targetStr, remainStr, count) => {
//     if (targetStr.length === count) {
//         return [targetStr];
//     }
    
//     let result = [];
    
//     for (let i = 0; i < remainStr.length; i++) {
//         const newTargetStr = targetStr + remainStr.slice(i, i + 1);
//         const newRemainStr = remainStr.slice(i + 1);
        
//         result = result.concat(getTargets(newTargetStr, newRemainStr, count));
//     }
    
//     return result;
// }

// const getTargetCount = (target, orders) => {
//     const arrTarget = target.split('');
    
//     let count = 0;
    
//     for (let i = 0; i < orders.length; i++) {
//         let isOk = true;
//         for (let j = 0; j < arrTarget.length; j++) {
//             if (!orders[i].includes(arrTarget[j])) {
//                 isOk = false;
//                 break;
//             }
//         }
        
//         if (isOk) {
//             count++;
//         }
//     }
    
//     return count;
// };

// const getAllTargets = (orders, course) => {
//     let targets = [];
    
//     course.map(c => {
//         orders.map(order => {
//             if (order.length < c) {
//                 return;
//             }
            
//             targets = targets.concat(getTargets('', order, c));
//         });
//     });
    
//     return [...new Set(targets)];
// };

// function solution(orders, course) {
//     var answer = [];
    
//     // 데이터 정렬
//     orders = orders
//         .filter(order => order.length >= course[0])
//         .map(order => order.split('').sort().join(''))
//         .sort((o1, o2) => o1.length - o2.length);
    
//     course = course.filter(c => c <= orders[orders.length - 1].length);
    
//     // 코스 가능한 모든 타겟 가져오기
//     const targets = getAllTargets(orders, course);
    
//     const resultMap = {};
    
//     // 각 타겟의 개수 카운팅 후 코스에 넣을 건지 결정
//     targets.map(target => {
//         if (!resultMap[target.length]) {
//             resultMap[target.length] = { list: [], maxCount: 0 };
//         }
        
//         const targetCount = getTargetCount(target, orders);
        
//         if (targetCount < 2) {
//             return;
//         }
        
//         if (targetCount > resultMap[target.length].maxCount) {
//             resultMap[target.length] = { list: [target], maxCount: targetCount };
//         } else if (targetCount === resultMap[target.length].maxCount) {
//             resultMap[target.length].list.push(target);
//         }
//     });
    
//     for (let key in resultMap) {
//         answer = answer.concat(resultMap[key].list);
//     }

//     answer = answer.sort((a1, a2) => a1 > a2 ? 1 : -1);
    
//     return answer;
// }


// 코딩테스트 연습 > 2020 카카오 인턴십 > 수식 최대화
// solution("50*6-3*2");
// const calculate = (weight, expression) => {
//     // 우선순위 연산자부터 계산
//     weight.map(w => {
//         for (let i = 1; i < expression.length - 1; i++) {
//             if (expression[i] === w) {
//                 let num1 = Number(expression[i - 1]);
//                 let num2 = Number(expression[i + 1]);
                
//                 if (w === '*') {
//                     expression.splice(i - 1, 3, num1 * num2);
//                 } else if (w === '+') {
//                     expression.splice(i - 1, 3, num1 + num2);
//                 } else if (w === '-') {
//                     expression.splice(i - 1, 3, num1 - num2);
//                 }
//                 i--;
//             }
//         }
//     });
    
//     return Math.abs(expression[0]);
// }

// function solution(expression) {
//     const allWeight = [
//         ['*', '+', '-'],
//         ['*', '-', '+'],
//         ['+', '*', '-'],
//         ['+', '-', '*'],
//         ['-', '*', '+'],
//         ['-', '+', '*'],
//     ];
    
//     // expression 을 array 로 변경 
//     const arrExp = expression.replace(/\*|\+|-/g, match => ` ${match} `).split(' ');
    
//     // 모든 경우에 대한 계산값을 구한 후 가장 큰 값 리턴
//     return Math.max(...allWeight.map(weight => calculate(weight, [...arrExp])));
// }


// 코딩테스트 연습 > 2019 카카오 개발자 겨울 인턴십 > 튜플
// function solution(s) {
//     // string 에서 숫자만 뺀 array 로 정리
//     let tupleSet = s
//         .slice(1, s.length - 1)
//         .match(/\{(\d|,)+\}/g)
//         .map(t => t.replace(/\{|\}/g, '').split(','))
//         .sort((t1, t2) => t1.length - t2.length);
    
    
//     const result = [];
    
//     tupleSet.map(tuple => {
//         while (tuple.length > 0) {
//             const item = Number(tuple.shift());
            
//             if (!result.includes(item)) {
//                 result.push(item);
//             }
//         }
//     });
    
//     return result;
// }

// 코딩테스트 연습 > 찾아라 프로그래밍 마에스터 > 게임 맵 최단거리
// solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	);
// function solution(maps) {
//     const N = maps.length;
//     const M = maps[0].length;
//     const targets = [{x: 0, y: 0}];

//     while (targets.length > 0) {
//         const {x, y} = targets.shift();
//         const coast = maps[y][x];

//         if (maps[N - 1][M - 1] !== 1 && coast >= maps[N - 1][M - 1]) {
//             continue;
//         }

//         // left
//         if (x > 0 && maps[y][x - 1] !== 0) {
//             if (maps[y][x - 1] === 1 || maps[y][x - 1] > coast + 1) {
//                 maps[y][x - 1] = coast + 1;
//                 targets.push({x: x - 1, y});
//             }
//         }

//         // right
//         if (x < M - 1 && maps[y][x + 1] !== 0) {
//             if (maps[y][x + 1] === 1 || maps[y][x + 1] > coast + 1) {
//                 maps[y][x + 1] = coast + 1;
//                 targets.push({x: x + 1, y});
//             }
//         }

//         // up
//         if (y > 0 && maps[y - 1][x] !== 0) {
//             if (maps[y - 1][x] === 1 || maps[y - 1][x] > coast + 1) {
//                 maps[y - 1][x] = coast + 1;
//                 targets.push({x, y: y - 1});
//             }
//         }

//         // down
//         if (y < N - 1 && maps[y + 1][x] !== 0) {
//             if (maps[y + 1][x] === 1 || maps[y + 1][x] > coast + 1) {
//                 maps[y + 1][x] = coast + 1;
//                 targets.push({x, y: y + 1});
//             }
//         }
//     }

//     return maps[N - 1][M - 1] === 1 ? -1 : maps[N - 1][M - 1];
// }


// 코딩테스트 연습 > 월간 코드 챌린지 시즌3 > 빛의 경로 사이클
// solution(["SL","LR"]);
// 싸이클을 돌면서 지나간 자리는 checkMap 에 추가
// const getCycleLength = (grid, target, checkMap) => {
//     let count = 0;

//     while (!checkMap[`${target.x}_${target.y}_${target.arrow}`]) {
//         checkMap[`${target.x}_${target.y}_${target.arrow}`] = true;

//         let next = {...target};

//         if (target.arrow === 'left') {
//             next.x = next.x === 0 ? grid[0].length - 1 : next.x - 1;

//             if (grid[next.y][next.x] === 'L') {
//                 next.arrow = 'down';
//             } else if (grid[next.y][next.x] === 'R') {
//                 next.arrow = 'up';
//             }
//         } else if (target.arrow === 'right') {
//             next.x = next.x === grid[0].length - 1 ? 0 : next.x + 1;

//             if (grid[next.y][next.x] === 'L') {
//                 next.arrow = 'up';
//             } else if (grid[next.y][next.x] === 'R') {
//                 next.arrow = 'down';
//             }
//         } else if (target.arrow === 'up') {
//             next.y = next.y === 0 ? grid.length - 1 : next.y - 1;

//             if (grid[next.y][next.x] === 'L') {
//                 next.arrow = 'left';
//             } else if (grid[next.y][next.x] === 'R') {
//                 next.arrow = 'right';
//             }
//         } else if (target.arrow === 'down') {
//             next.y = next.y === grid.length - 1 ? 0 : next.y + 1;

//             if (grid[next.y][next.x] === 'L') {
//                 next.arrow = 'right';
//             } else if (grid[next.y][next.x] === 'R') {
//                 next.arrow = 'left';
//             }
//         }

//         target = next;

//         count++;
//     }
    
//     return count;
// };

// function solution(grid) {
//     let result = [];
    
//     // 하나의 격자 & 방향 (left, right, up, down) 을 조합하여 map 초기화
//     const checkMap = {};
    
//     for (let x = 0; x < grid[0].length; x++) {
//         for (let y = 0; y < grid.length; y++) {
//             checkMap[`${x}_${y}_left`] = false;
//             checkMap[`${x}_${y}_right`] = false;
//             checkMap[`${x}_${y}_up`] = false;
//             checkMap[`${x}_${y}_down`] = false;
//         }
//     }
    
//     // map 을 돌면서 격자 & 방향 을 지나는 싸이클 조사 (이미 지나갔으면 skip)
//     for (let key in checkMap) {
//         if (checkMap[key]) {
//             continue;
//         }
        
//         const arr = key.split('_');
//         const target = {x: Number(arr[0]), y: Number(arr[1]), arrow: arr[2]};
//         result.push(getCycleLength(grid, target, checkMap));
//     }
    
//     return result.sort((r1, r2) => r1 - r2);
// }


// 코딩테스트 연습 > 2021 KAKAO BLIND RECRUITMENT > 순위 검색
// solution(["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"], ["java and backend and junior and pizza 100", "java and backend and junior and pizza 101", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]);
// const checkMap = (map, info) => {
//     const arr = info.split(' ');
//     const num = Number(arr[4]);
    
//     const condition = arr.slice(0, 4);
//     let arrCondition = [condition.join(' ')];
    
//     arrCondition.push(`- ${condition[1]} ${condition[2]} ${condition[3]}`);
//     arrCondition.push(`${condition[0]} - ${condition[2]} ${condition[3]}`);
//     arrCondition.push(`${condition[0]} ${condition[1]} - ${condition[3]}`);
//     arrCondition.push(`${condition[0]} ${condition[1]} ${condition[2]} -`);
    
//     arrCondition.push(`- - ${condition[2]} ${condition[3]}`);
//     arrCondition.push(`- ${condition[1]} - ${condition[3]}`);
//     arrCondition.push(`- ${condition[1]} ${condition[2]} -`);
//     arrCondition.push(`${condition[0]} - - ${condition[3]}`);
//     arrCondition.push(`${condition[0]} - ${condition[2]} -`);
//     arrCondition.push(`${condition[0]} ${condition[1]} - -`);
    
//     arrCondition.push(`- - - ${condition[3]}`);
//     arrCondition.push(`- - ${condition[2]} -`);
//     arrCondition.push(`- ${condition[1]} - -`);
//     arrCondition.push(`${condition[0]} - - -`);
    
//     arrCondition.push(`- - - -`);
    
//     arrCondition.map(c => {
//         if (!map[c]) {
//             map[c] = [];
//         }
        
//         map[c].push(num);
//     });
// };

// function solution(info, query) {
//     const result = [];
    
//     const map = {};
    
//     const infos = info.map(i => {
//         checkMap(map, i);
//     });
    
//     for (const key in map) {
//         map[key] = map[key].sort((m1, m2) => m1 > m2 ? 1 : -1);
//     }
    
//     return query.map(q => {
//         const arr = q.replace(/ and /g, ' ').split(' ');
        
//         const num = Number(arr[4]);
        
//         const condition = arr.slice(0, 4).join(' ');
        
//         const targets = map[condition] || [];
        
//         let start = 0;
//         let end = targets.length - 1;
//         let center = Math.floor((start + end) / 2);
//         let temp = targets.length;
        
//         while (start <= end) {
//             center = Math.floor((start + end) / 2);
            
//             if (targets[center] >= num) {
//                 temp = center;
//                 end = center - 1;
//             } else {
//                 start = center + 1;
//             }
//         }
        
//         const result = targets.length - temp;
        
//         return result < 0 ? 0 : result;
//     });
// }


// 코딩테스트 연습 > 월간 코드 챌린지 시즌2 > 괄호 회전하기
// const isOk = s => {
//     const stack = [];
    
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
//             const last = stack.pop();
            
//             if (!last 
//                 || (s[i] === ')' && last !== '(') 
//                 || (s[i] === ']' && last !== '[') 
//                 || (s[i] === '}' && last !== '{') ) {
//                 return false;
//             }
//         } else {
//             stack.push(s[i]);
//         }
//     }
    
//     return stack.length === 0;
// };

// function solution(s) {
    
//     let result = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         if (isOk(s)) {
//             result++;
//         }
        
//         s = s.slice(1) + s[0];
//     }
    
//     return result;
// }


// 코딩테스트 연습 > Summer/Winter Coding(~2018) > 배달
// const beadal = (town, coast, map, road, K) => {
//     if (coast <= K) {
//         map[town - 1] = coast;
//     }
    
//     const remainLoad = road.filter(r => r[0] !== town && r[1] !== town);
    
//     road
//         .filter(r => r[0] === town || r[1] === town)
//         .map(r => {
//             const next = r[1] === town ? r[0] : r[1];
//             const nextCoast = coast + r[2];
        
//             if (nextCoast <= K && nextCoast < map[next - 1]) {
//                 beadal(next, nextCoast, map, remainLoad, K);
//             }
//         });
// };

// function solution(N, road, K) {
//     var answer = 0;
    
//     const map = (new Array(N)).fill(K + 1);
    
//     beadal(1, 0, map, [...road], K);

//     return map.filter(coast => coast <= K).length;
// }


// 코딩테스트 연습 > 연습문제 > 2 x n 타일링
// const countRectangle = (remainCount, map) => {
//     if (remainCount === 1) {
//         return 1;
//     } else if (remainCount === 2) {
//         return 2;
//     }
    
//     if (!map.has(remainCount)) {
//         const count = countRectangle(remainCount - 2, map) + countRectangle(remainCount - 1, map);
//         map.set(remainCount, count % 1000000007);
//     }
    
//     return map.get(remainCount);
// }

// function solution(n) {
//     return countRectangle(n, new Map());
    
//     const stack = [1, 2];
    
//     for (let i = 2; i < n; i++) {
//         stack.push((stack[i - 2] + stack[i - 1]) % 1000000007);
//     }
    
//     return stack[n - 1];
// }


// 코딩테스트 연습 > 위클리 챌린지 > 피로도
// const getMaxDungeons = (k, dungeons, currentNum) => {
//     let result = currentNum;
    
//     dungeons = dungeons.filter(d => d[0] <= k);
    
//     dungeons.map((d, index) => {
//         const newTargets = dungeons.filter((fd, fi) => fi !== index);
//         const tempResult = getMaxDungeons(k - d[1], newTargets, currentNum + 1);

//         if (tempResult > result) {
//             result = tempResult;
//         }
//     });
    
//     return result;
// }

// function solution(k, dungeons) {
//     return getMaxDungeons(k, [...dungeons], 0);
// }


// 코딩테스트 연습 > 월간 코드 챌린지 시즌2 > 2개 이하로 다른 비트
// const getMinNumber = target => {
//     const targetBit = target.toString(2);
//     let resultBit = targetBit;
    
//     if (!targetBit.includes('0')) {
//         // bit 가 '1' 로만 이루어진 경우 맨 앞자리 bit 에 '1' 을 더한 경우가 제일 가까운 수
//         // ex) '111' -> '1011', '1111' -> '10111', ...
//         resultBit = '10' + (new Array(targetBit.length - 1)).fill('1').join('');
//     } else {
//         // bit 가 '0', '1' 로 이루어진 경우
//         // 가장 마지막에 위치한 '0' bit 에 '1' 을 더하고 바로 다음에 위치한 bit 를 '0' 으로 바꾼 경우가 제일 가까운 수
//         // ex) '10' -> '11', '1011' -> '1101', '110111' -> '111011', ...
//         const lastIndex = resultBit.lastIndexOf('0');
//         resultBit = resultBit.split('');
//         resultBit[lastIndex] = '1';
//         if (lastIndex + 1 < resultBit.length) {
//             resultBit[lastIndex + 1] = '0';
//         }
//         resultBit = resultBit.join('');
//     }
    
//     return parseInt(resultBit, 2);
// };

// function solution(numbers) {
//     return numbers.map(n => getMinNumber(n));
// }


// 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 삼각 달팽이
// function solution(n) {
//     const triangle = [];
//     const location = { x: 0, y: 0 };
//     const condition = {
//         count: 0,
//         max: n,
//         direction: 'down',
//     };
    
//     let num = 1;
    
//     while (condition.max > 0) {
//         if (!triangle[location.y]) {
//             triangle[location.y] = [];
//         }
//         const arr = triangle[location.y];
        
//         arr[location.x] = num;
//         num++;
        
//         condition.count++;

//         if (condition.count >= condition.max) {
//             condition.count = 0;
//             condition.max--;

//             condition.direction = 
//                 condition.direction === 'down' ? 'right' :
//                 condition.direction === 'right' ? 'up' : 'down';
//         }
        
//         if (condition.direction === 'down') {
//             location.y++;
//         } else if (condition.direction === 'right') {
//             location.x++;
//         } else if (condition.direction === 'up') {
//             location.x--;
//             location.y--;
//         }
//     }
    
//     return triangle.flatMap(v => v);
// }


// 코딩테스트 연습 > 위클리 챌린지 > 교점에 별 만들기
// function solution(line) {
    
//     let stars = [];
    
//     let minX = null;
//     let minY = null;
//     let maxX = null;
//     let maxY = null;
    
//     for (let i = 0; i < line.length - 1; i++) {
//         const l1 = line[i];
        
//         for (let j = i + 1; j < line.length; j++) {
//             const l2 = line[j];
            
//             const x = ((l1[1] * l2[2]) - (l1[2] * l2[1])) / ((l1[0] * l2[1]) - (l1[1] * l2[0]));
//             const y = ((l1[2] * l2[0]) - (l1[0] * l2[2])) / ((l1[0] * l2[1]) - (l1[1] * l2[0]));
            
//             if (Number.isInteger(x) && Number.isInteger(y)) {
                
//                 if (minX === null || x < minX) {
//                     minX = x;
//                 }
//                 if (maxX === null || x > maxX) {
//                     maxX = x;
//                 }
//                 if (minY === null || y < minY) {
//                     minY = y;
//                 }
//                 if (maxY === null || y > maxY) {
//                     maxY = y;
//                 }
                
//                 stars.push({x, y});
//             }
//         }
//     }
    
//     maxX -= minX;
//     maxY -= minY;
//     stars = stars.map(star => {
//         return {
//             x: star.x - minX,
//             y: Math.abs(maxY - (star.y - minY))
//         };
//     });
    
//     let result = (new Array(maxY + 1)).fill([]);
//     result = result.map(r => (new Array(maxX + 1)).fill('.'));
    
//     stars.map(star => {
//         result[star.y][star.x] = '*';
//     });
    
//     return result.map(r => {
//         return r.join('');
//     });
// }



// 코딩테스트 연습 > 완전탐색 > 전력망을 둘로 나누기
// function solution(n, wires) {
//     let result = n;
    
//     wires.map((w, i) => {
//         const [n1, n2] = w;
        
//         let nextWires = wires.filter((fw, fi) => i !== fi);
        
//         if (nextWires.length === 0) {
//             return;
//         }
        
//         const arr = [nextWires[0][0]];
//         let count = 0;
        
//         while (arr.length > 0) {
//             const node = arr.shift();
//             count++;
            
//             nextWires.filter(nw => node === nw[0] || node === nw[1]).map(nw => {
//                 arr.push(nw[0] === node ? nw[1] : nw[0]);
//             });
            
//             nextWires = nextWires.filter(nw => node !== nw[0] && node !== nw[1]);
//         }
        
//         const temp = Math.abs(count - (n - count));
        
//         result = result < temp ? result : temp;
//     });
    
//     return result === n ? 0 : result;
// }


// 코딩테스트 연습 > 완전탐색 > 모음사전
// const alphabet = ['A', 'E', 'I', 'O', 'U'];

// const check = (str, count, word) => {
//     for (let i = 0; i < alphabet.length; i++) {
//         const target = str + alphabet[i];
//         count++;
        
//         if (target === word) {
//             return {success: true, count};
//         }
        
//         if (target.length < alphabet.length) {
//             const result = check(target, count, word);
//             if (result.success) {
//                 return result;
//             } else {
//                 count = result.count;
//             }
//         }
//     }
    
//     return {success: false, count};
// };

// function solution(word) {
//     return check('', 0, word).count;
// }


// 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 이진 변환 반복하기
// function solution(s) {
//     let cCount = 0;
//     let rCount = 0;
    
//     s = s.split('');
    
//     while (s.length > 1) {
//         const temp = s.filter(n => n === '1').join('');
        
//         rCount += (s.length - temp.length);
        
//         s = temp.length.toString(2).split('');
        
//         cCount++;
//     }
    
//     return [cCount, rCount];
// }


// 코딩테스트 연습 > 연습문제 > N-Queen
// const isPossible = (arrX, target) => {
//     let result = true;
    
//     for (let y = 0; y < arrX.length; y++) {
//         const x = arrX[y];
        
//         if (x === target.x 
//             || y === target.y
//             || Math.abs(target.x - x) === Math.abs(target.y - y)) {
//             return false;
//         }
//     }
    
//     return result;
// };

// const getNQueenCount = (arrX, n) => {
//     if (arrX.length === n) {
//         return 1;
//     }
    
//     let count = 0;
    
//     const y = arrX.length;
    
//     for (let x = 0; x < n; x++) {
//         if (!isPossible(arrX, {x, y})) {
//             continue;
//         }
        
//         count += getNQueenCount([...arrX, x], n);
//     }
    
//     return count;
// };

// function solution(n) {
//     return getNQueenCount([], n);
// }


// 코딩테스트 연습 > 2022 KAKAO BLIND RECRUITMENT > 주차 요금 계산
const calculateTime = (inTime, outTime) => {
    const [inHour, inMin] = inTime.split(':');
    const [outHour, outMin] = outTime.split(':');

    return ((parseInt(outHour) * 60) + parseInt(outMin)) - ((parseInt(inHour) * 60) + parseInt(inMin));
};

function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    
    const map = new Map();
    
    records.map(record => {
        const [time, number, method] = record.split(' ');
        
        let info = map.get(number);
        if (!info) {
            info = { totalTime: 0 };
        }
        
        if (method === 'IN') {
            info.inTime = time;
            map.set(number, info);
            return;
        }
        
        info.totalTime += calculateTime(info.inTime, time);
        info.inTime = null;
        
        map.set(number, info);
    });
    
    return [...map.keys()].sort((k1, k2) => k1 - k2).map(key => {
        const info = map.get(key);
        
        if (info.inTime) {
            info.totalTime += calculateTime(info.inTime, '23:59');
        }
        
        let totalFee = 0;
        let totalTime = info.totalTime;
        
        totalFee += basicFee;
        totalTime -= basicTime;
        
        if (totalTime > 0) {
            totalFee += (Math.ceil(totalTime / unitTime) * unitFee);
        }
        
        return totalFee;
    });
}