// 코딩테스트 연습 > 2021 Dev-Matching: 웹 백엔드 개발자(상반기) > 행렬 테두리 회전하기
// solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]);
const getMinWithrotate = (query, arr) => {
    const y1 = query[0] - 1;
    const x1 = query[1] - 1;
    const y2 = query[2] - 1;
    const x2 = query[3] - 1;
    let min = arr[y1][x1];
    
    let curX = x1;
    let curY = y1;
    let pre = min;
    
    do {
        if (curX < x2 && curY === y1) {
            curX++;
        } else if (curX === x2 && curY < y2) {
            curY++;
        } else if (curX > x1 && curY === y2) {
            curX--;
        } else if (curX === x1 && curY > y1) {
            curY--;
        }
        
        let temp = arr[curY][curX];
        arr[curY][curX] = pre;
        pre = temp;
        
        min = min > pre ? pre : min;
    } while (curY !== y1 || curX !== x1);
    
    return min;
};

function solution(rows, columns, queries) {
    var answer = [];
    
    let arr = [];
    let num = 1;
    for (let i = 0; i < rows; i++) {
        arr[i] = [];
        for (let j = 0; j < columns; j++) {
            arr[i].push(num);
            num++;
        }
    }
    
    const result = [];
    
    queries.map(query => {
        result.push(getMinWithrotate(query, arr));
    });
    
    return result;
}