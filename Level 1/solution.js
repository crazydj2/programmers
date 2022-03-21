// 코딩테스트 연습 > 2022 KAKAO BLIND RECRUITMENT > 신고 결과 받기
// sample -> solution(	["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2 );
// function solution(id_list, report, k) {
//     var answer = [];
    
//     report = [...new Set(report)];
    
//     const buliangMap = {};
//     const hitMap = {};
    
//     report.map(r => {
//         const singo = r.split(' ')[0];
//         const buliang = r.split(' ')[1];
        
//         if (!buliangMap[buliang]) {
//             buliangMap[buliang] = {
//                 // 나를 신고한 사람 리스트
//                 singoList: [],
                
//                 // 내가 신고 먹은 횟수
//                 singoCount: 0
//             };
//         }
        
//         const currentBuliang = buliangMap[buliang];
        
//         currentBuliang.singoList.push(singo);
//         ++currentBuliang.singoCount;
        
//         if (currentBuliang.singoCount >= k) {
//             currentBuliang.singoList.map(s => {
//                 hitMap[s] = hitMap[s] ? ++hitMap[s] : 1;
//             });
            
//             currentBuliang.singoList = [];
//         }
//     });
    
    
//     answer = id_list.map(id => hitMap[id] || 0);
    
//     return answer;
// }


// 코딩테스트 연습 > 2021 Dev-Matching: 웹 백엔드 개발자(상반기) > 로또의 최고 순위와 최저 순위
// sample -> solution(	[44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19] );
// function solution(lottos, win_nums) {
//     var answer = [];
    
//     const rightLength = lottos.filter(l => win_nums.includes(l)).length;
//     const zeroLength = lottos.filter(l => l === 0).length;
    
//     const getLank = length => {
//         let rank = 7 - length;
//         if (rank >= 6) {
//             rank = 6;
//         }
//         return rank;
//     };
    
//     answer.push(getLank(rightLength + zeroLength));
//     answer.push(getLank(rightLength));
    
//     return answer;
// }

// 코딩테스트 연습 > 2021 KAKAO BLIND RECRUITMENT > 신규 아이디 추천
// sample -> solution("...!@BaT#*..y.abcdefghijklm");
// sample -> solution("z-+.^.");
// function solution(new_id) {
//     new_id = new_id.toLowerCase();
    
//     new_id = new_id.replace(/[^a-z0-9-_.]/g, '');
    
//     new_id = new_id.replace(/[\.]+/g, '.');
    
//     if (new_id.indexOf('.') === 0) {
//         new_id = new_id.substring(1);
//     }
//     if (new_id.lastIndexOf('.') === new_id.length - 1) {
//         new_id = new_id.substring(0, new_id.length - 1);
//     }
    
//     if (!new_id) {
//         new_id = 'a';
//     }
    
//     new_id = new_id.substring(0, 15);
//     if (new_id[new_id.length - 1] === '.') {
//         new_id = new_id.substring(0, 14);
//     }
    
//     while (new_id.length < 3) {
//         new_id = new_id + new_id[new_id.length - 1];
//     }
    
//     return new_id;
// }

// 코딩테스트 연습 > 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어
// function solution(s) {
//     const num = s.replace(/zero/g, '0')
//         .replace(/one/g, '1')
//         .replace(/two/g, '2')
//         .replace(/three/g, '3')
//         .replace(/four/g, '4')
//         .replace(/five/g, '5')
//         .replace(/six/g, '6')
//         .replace(/seven/g, '7')
//         .replace(/eight/g, '8')
//         .replace(/nine/g, '9');
    
//     return Number(num);
// }

// 코딩테스트 연습 > 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어
// sample -> solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right" );
// sample -> solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
// function solution(numbers, hand) {
//     let result = '';
    
//     // 현재 위치와 목표 위치간의 diff 계산해서 리턴
//     // * 은 10 으로, 0 은 11 로, # 은 12 로 간주하고 계산
//     const getDiff = (current, target) => {
//         let diff = 0;
        
//         // Math.abs(current - target) 3 이상인 경우에는 행 이동을 해야하고 (+- 3 을 해야함), 행 이동 횟수가 diff 에 포함
//         if (Math.abs(current - target) >= 3) {
//             if (current > target) {
//                 diff = Math.floor((current - target) / 3);
//                 current = current - (3 * diff);
//             } else {
//                 diff = Math.floor((target - current) / 3);
//                 current = current + (3 * diff);
//             }
//         }

//         // Math.abs(current - target) 의 결과값이 3 미만인 경우 -> 결과값이 그대로 현재 current 와 target 간 거리이므로 diff 에 포함
//         if (Math.abs(current - target) > 0) {
//             diff += Math.abs(current - target);
//         }
        
//         return diff;
//     };
    
//     let leftPosition = 10;
//     let rightPosition = 12;
    
//     numbers
//         .map(n => n === 0 ? 11 : n)
//         .map(n => {
//             let useHand = 'L';

//             if (n === 1 || n === 4 || n === 7) {
//                 useHand = 'L';
//             } else if (n === 3 || n === 6 || n === 9) {
//                 useHand = 'R';
//             } else {
//                 const leftDiff = getDiff(leftPosition, n);
//                 const rightDiff = getDiff(rightPosition, n);

//                 if (leftDiff === rightDiff) {
//                     useHand = hand === 'left' ? 'L' : 'R';
//                 } else {
//                     useHand = leftDiff < rightDiff ? 'L' : 'R';
//                 }
//             }


//             leftPosition = useHand === 'L' ? n : leftPosition;
//             rightPosition = useHand === 'R' ? n : rightPosition;
//             result += useHand;
//         });
    
//     return result;
// }

// 코딩테스트 연습 > 2019 카카오 개발자 겨울 인턴십 > 크레인 인형뽑기 게임
// function solution(board, moves) {
//     let count = 0;
    
//     const reBoard = [];
    
//     // board 재배치 (행 기준이 아닌 열 기준으로)
//     board.map(arrRow => {
//         arrRow.map((row, index) => {
//             if (!reBoard[index]) {
//                 reBoard[index] = [];
//             }
            
//             if (row) {
//                 reBoard[index].push(row);
//             }
//         });
//     });
    
//     const greps = [];
    
//     moves.map(m => {
//         if (reBoard[m - 1].length === 0) {
//             return;
//         }
        
//         const target = reBoard[m - 1].shift();
        
//         if (greps.length > 0 && greps[greps.length - 1] === target) {
//             greps.pop();
//             count += 2;
//         } else {
//             greps.push(target);
//         }
//     });
    
//     return count;
// }

// 코딩테스트 연습 > Summer/Winter Coding(~2018) >. 소수 만들기
// function solution(nums) {

//     const sosuMap = [false, false, true];
    
//     // 1000 이하의 소수맵 만들기 (에라토스테네스의 체)
//     for (let i = 2; i < 3000; i++) {
//         if (sosuMap[i] === false) {
//             continue;
//         }

//         sosuMap[i] = true;

//         let temp = i + i;

//         while (temp < 3000) {
//             sosuMap[temp] = false;
//             temp += i;
//         }
//     }

//     // 3개 숫자 조합하면서 소수인지 판별 & count
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let x = j + 1; x < nums.length; x++) {
//                 if (sosuMap[nums[i] + nums[j] + nums[x]]) {
//                     ++count;
//                 }
//             }
//         }
//     }

//     return count;
// }

// 코딩테스트 연습 > 월간 코드 챌린지 시즌2 > 약수의 개수와 덧셈
// "타겟 N 의 제곱근이 정수이면 약수의 개수는 홀수, 제곱근이 정수가 아니면 약수의 개수는 짝수" 라는 공식으로 더 간단하게 코딩 가능
// function solution(left, right) {

//     // 약수의 개수를 리턴하는 함수
//     const getDivisorLength = n => {
//         if (n === 1) {
//             return 1;
//         }
        
//         let count = 0;
        
//         // 나눴을때 나머지가 없으면 약수이며, 또한 쌍을 이루는 나머지 숫자도 약수이다. (ex: "N === n1 * n2" 일때 n1, n2 모두 약수임.)
//         // 즉 2개의 약수를 동시에 찾을 수 있으므로 한번 카운팅할때마다 2씩 증가하며, 이에 따라 최대 sqrt(n) 번만 for 문을 돌면 됨.
//         // 다만 제곱근의 경우에는 n1 === n2 가 동일하므로 이 부분에 대한 예외처리만 추가
//         for (let i = 1; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) {
//                 if (i === Math.sqrt(n)) {
//                     count += 1;
//                 } else {
//                     count += 2;
//                 }
//             }
//         }
        
//         return count;
//     };
    
//     let result = 0;
    
//     for (let i = left; i <= right; i++) {
//         if (getDivisorLength(i) % 2 === 0) {
//             result += i;
//         } else {
//             result -= i;
//         }
//     }
    
//     return result;
// }

// 코딩테스트 연습 > 월간 코드 챌린지 시즌1 > 3진법 뒤집기
function solution(n) {
    const arr = n.toString(3).split('');
    
    let result = 0;
    
    let exponent = 0;
    arr.map(a => {
        result += (Number(a) * Math.pow(3, exponent));
        ++exponent;
    });
    
    return result;
}