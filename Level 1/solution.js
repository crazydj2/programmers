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
function solution(lottos, win_nums) {
    var answer = [];
    
    const rightLength = lottos.filter(l => win_nums.includes(l)).length;
    const zeroLength = lottos.filter(l => l === 0).length;
    
    const getLank = length => {
        let rank = 7 - length;
        if (rank >= 6) {
            rank = 6;
        }
        return rank;
    };
    
    answer.push(getLank(rightLength + zeroLength));
    answer.push(getLank(rightLength));
    
    return answer;
}