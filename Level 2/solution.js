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
const calculate = (weight, expression) => {
    // 우선순위 연산자부터 계산
    weight.map(w => {
        for (let i = 1; i < expression.length - 1; i++) {
            if (expression[i] === w) {
                let num1 = Number(expression[i - 1]);
                let num2 = Number(expression[i + 1]);
                
                if (w === '*') {
                    expression.splice(i - 1, 3, num1 * num2);
                } else if (w === '+') {
                    expression.splice(i - 1, 3, num1 + num2);
                } else if (w === '-') {
                    expression.splice(i - 1, 3, num1 - num2);
                }
                i--;
            }
        }
    });
    
    return Math.abs(expression[0]);
}

function solution(expression) {
    const allWeight = [
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['-', '*', '+'],
        ['-', '+', '*'],
    ];
    
    // expression 을 array 로 변경 
    const arrExp = expression.replace(/\*|\+|-/g, match => ` ${match} `).split(' ');
    
    // 모든 경우에 대한 계산값을 구한 후 가장 큰 값 리턴
    return Math.max(...allWeight.map(weight => calculate(weight, [...arrExp])));
}