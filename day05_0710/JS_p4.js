
//문제1: 배열에서 최댓값 찾기
let numbers = [23, 5, 67, 12, 88, 34]
let max = 0
for(let index = 0; index <= numbers.length -1; index++){
    if( max < numbers[index] ){ max = numbers[index] }
}console.log(`가장 큰 수는 ${max}`)

//문제2 별찍기
for(let i = 5; i >= 1; i--){
    let 별 = " ";
    for(let a = 1; a <= i; a++){
        별 += "*" ;  
    }
    console.log(별)
}
/* 교수님 풀이 line(\n) 줄바꿈 처리 ** 줄마다 *을 출력인지, *마다 줄을 출력할지 고려
line은 1 ~ 5까지 1씩 증가 하면서 '\n' 출력 (행 취급)
star은 1부터 (마지막 줄 수 - 현재줄수 + 1) 1씩 증가사 하면서 "*" 출력  (열 취급)
let output = '' // 출력할 내용물을 저장할 변수
for(let line = 1; line <= 5; line++){
    for(let star = 1; star <= 5 - line + 1; star++){
        output += '*'
    }
    output = output + '\n' // 줄마다 줄바꿈 처리
} 
*/
//문제3: 배열에서 특정 문자 찾기
//다음 사용자 이름 배열에서 이름에 '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면, 해당 사용자의 이름을 출력하고 반복문을 종료하시오.
let userNames = ['김하준', '이서아', '박솔민', '최도윤']
for(let i = 0; i <= userNames.length - 1; i++){
    if(userNames[i].includes('솔')){ console.log(`솔이 들아간 이름은 ${userNames[i]}`); break }
    else{console.log('들어간 이름이 없습니다')}
}

//문제 4: 2차원 배열의 모든 요소 출력하기
//다음과 같은 2차원 배열(좌석표)이 있습니다. 중첩 for 반복문을 사용하여 모든 좌석의 값을 순서대로 출력하시오.
let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']]
for(let a = 0 ; a <= seatLayout.length - 1; a++){
    for( let b = 0 ; b <= seatLayout[a].length - 1; b++){
        console.log(seatLayout[a][b])
    }
}

//문제 5: 배열의 중복 요소 제거하기 // **중복 인지 확인
//주어진 배열에서 중복된 요소를 제거하고, 중복 없는 새로운 배열을 만들어 출력하시오.
let numbers = [1, 5, 2, 3, 5, 1, 4, 2]
for(let i = 0; i <= numbers.length-1; i++){
    for(let j = i +1; j <= numbers.length - 1; j++){
        if(numbers[i] == numbers[j]){numbers.splice(j,1);
            console.log(numbers) //삭제되었는지 확인용
        }
    }
}console.log(numbers)

//문제 6: 버블 정렬 (Bubble Sort) 구현하기
//주어진 숫자 배열을 '버블 정렬' 알고리즘을 이용하여 오름차순으로 정렬하고, 최종 정렬된 배열을 출력하시오.
let numbers = [5, 3, 4, 1, 2]
for(let 정렬 = 0; 정렬 <= numbers.length -1 ; 정렬++){
    for (let i = 0; i < numbers.length - 1; i++){
        if (numbers[i] >= numbers[i + 1]){
            let temp = numbers[i]; 
            numbers[i] = numbers[i + 1]; 
            numbers[i + 1] = temp; // 3 4 1 2 5
        }
    }
}console.log(numbers)

//문제 7: 재고 관리 시스템
let products = ['볼펜', '노트', '지우개'];
let stock = [10, 5, 20];
for( ; ; ){
    let 상품목록 = prompt('구매할 상품명 볼펜, 노트, 지우개');
    let 구매재고수량 = Number(prompt('구매 수량'));
    let index = products.indexOf(상품목록)
    if(stock[index] >= 구매재고수량){
        stock[index] -= 구매재고수량;
        console.log(`구매완료`);
    }else{
        console.log('재고가 부족합니다');
        console.log(stock);
        break
    }
}

//문제 8: 영화 평점 시각화하기 ★ html 시각화
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];
let html = ""
for(let i = 0; i <= movieNames.length -1; i++){
    html += movieNames[i]
    for(let 별점 = 1; 별점 <= 10; 별점++){
        if(별점 <= movieRatings[i]){
            html += "★"
        }else{html += "☆"}
    }html += "<br />";  //한줄 작성후 줄바꿈
}document.querySelector("p").innerHTML = html

/*문제 9: 좌석 예약 상태 표시하기
총 6개의 좌석 상태 정보가 담긴 배열을 이용하여, 좌석 배치도와 상태를 HTML에 출력하는 프로그램을 작성하시오.
(2). 구현 조건
for 반복문을 사용하여 6개의 좌석을 모두 출력합니다.
각 좌석은 하나의  태그로 표시합니다.
좌석 상태에 따라  태그에 CSS 색상을 다르게 적용합니다.
'빈좌석': color: blue;
'예약석': color: red;
좌석은 2칸씩 3줄 형태로 배치합니다.
(3). 출력 예시 (HTML)
빈좌석 예약석 
예약석 빈좌석
예약석 빈좌석

let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석']
*/
//문제 10: 주차 요금 정산하기  차량별 주차 시간 데이터가 주어졌을 때, 아래의 요금 규정에 따라 각 차량이 지불해야 할 최종 주차 요금을 계산하여 HTML에 출력하는 프로그램을 작성하시오.
let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
let html = ""
for(let i = 0; i <= carNumbers.length - 1; i++){
    html += carNumbers[i] + ":" + " "
    html += usageMinutes[i] + "분 주차" + "," + " "
    html += "최종 요금:" + " "
    if(usageMinutes[i] <= 30){
        html += 1000 + "원";
    }else{
        html += 1000 + (parseInt((usageMinutes[i] - 30)/10) * 500) + "원";
    }
    html += "<br />"
}document.querySelector("p").innerHTML = html
