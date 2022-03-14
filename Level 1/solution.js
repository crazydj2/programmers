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
function solution(s) {
    const num = s.replace(/zero/g, '0')
        .replace(/one/g, '1')
        .replace(/two/g, '2')
        .replace(/three/g, '3')
        .replace(/four/g, '4')
        .replace(/five/g, '5')
        .replace(/six/g, '6')
        .replace(/seven/g, '7')
        .replace(/eight/g, '8')
        .replace(/nine/g, '9');
    
    return Number(num);
}
