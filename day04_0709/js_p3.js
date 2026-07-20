// 문제1: 과일 목록 관리
let fruitList = [ '사과', '바나나']
let 과일 = prompt('과일 입력')
let 존재여부 = fruitList.includes(과일)
if(존재여부 == true){console.log('이미 존재하는 과일이빈다')}
else{fruitList.push(과일); console.log(fruitList)}

//문제2: 성별에 따른 색상 지정
let 주민번호 = prompt('주민등록번호 13자리')
if(주민번호[6] == 1 || 주민번호[6] == 3){console.log('blue')}
else if(주민번호[6] == 2 || 주민번호[6] == 4){console.log('red')}
else{console.log('다시입력')}

// 문제3: 구매금액에 따른 할인율 적용
let 구매금액 = Number(prompt('총 구매금액 입력'))
if(구매금액 >= 50000){console.log(`최종 결제 금액 ${구매금액*0.9}`)}
else if(구매금액 >= 30000){console.log(`최종 결제 금액 ${구매금액*0.95}`)}
else if(구매금액 >= 10000){console.log(`최종 결제 금액 ${구매금액*0.99}`)}
else{console.log(`할인 없음 ${구매금액}`)}

//문제4: 월에 따른 계절판별
let 월 = Number(prompt('1~12월을 입력하세요'))
if(월==3 || 월==4 || 월==5){console.log('봄')}
else if(월==6 || 월==7 || 월==8){console.log('여름')}
else if(월==9 || 월==10 || 월==11){console.log('가을')}
else if(월==12 || 월==1 || 월==2){console.log('겨울')}

//문제5: 세 수 중 가장 큰 수 찾기
let a = Number(prompt("서로다른 수 중 첫번째 수 입력"))
let b = Number(prompt("서로다른 수 중 두번째 수 입력"))
let c = Number(prompt("서로다른 수 중 세번째 수 입력"))
if(a>b && a>c){console.log("가장큰수는 첫번쨰 수")}
if(b>a && b>c){console.log("가장큰수는 두번쨰 수")}
if(c>b && c>a){console.log("가장큰수는 세번쨰 수")}
/* 교수님 풀이
let max = a  첫번째 값을 ㄱ장 큰 수 시작
//두번쨰 값이 max 보다 큰지 확인 , if~else if 가 아닌 if~ if
// 스왑 (두 변수간 값 교체) * 변수특징: 하나의 값 저장 
if( max < b){ max = b}
if( max < c){ max = c}
console.log( max ) 
*/

//문제6. 윤년 판별기
let 연도 = Number(prompt('년도 입력'))
if(연도 %4 == 0 && 연도 % 100 !=0 || 연도 % 400 == 0){console.log(`${연도}년은 윤년입니다`)}
else{console.log(`${연도}년은 평년입니다`)}

//문제7: 세수 오름차순 정렬
let 수1 = Number(prompt("첫번째 수 입력"))
let 수2 = Number(prompt("두번째 수 입력"))
let 수3 = Number(prompt("세번째 수 입력"))
if(수1<수2 && 수1<수3 && 수2<수3){console.log(`${수1} ${수2} ${수3}`)}
else if(수1<수2 && 수1<수3 && 수3<수2){console.log(`${수1} ${수3} ${수2}`)}
else if(수2<수1 && 수2<수3 && 수1<수3){console.log(`${수2} ${수1} ${수3}`)}
else if(수2<수1 && 수2<수3 && 수3<수1){console.log(`${수2} ${수3} ${수1}`)}
else if(수3<수2 && 수3<수1 && 수2<수1){console.log(`${수3} ${수2} ${수1}`)}
else if(수3<수1 && 수3<수2 && 수1<수2){console.log(`${수2} ${수1} ${수3}`)}
/* 풀이 17 , 4, 8
수1 -> 수2 비교  더 크면 자리 바꾸기(스왑)
수1 -> 수3 비교 더 크면 자리 바꾸기
수 마다 두번씩 비교
if( 수1 > 수2 ){  //오름차순이 아닌 내림차순이면 부호만 반대로
    let temp = 수1 // 두 변수간의 값 스왑 또는 교체를 하기 위한 임시 저장소
    수1 = 수2    // 수1 = 4   ,  스왑하기위해 임시 변수가 필요
    수2 = temp;   // 수2 = 17
}
if( 수1 > 수3 ){ let temp = 수1; 수1=수3; 수3=temp; }
if( 수2 > 수3 ){ let temp = 수2; 수2=수3; 수3=temp; }
console.log(`${수1}${수2}${수3}`)
*/
//문제8: 가위바위보 게임
let p1 = Number(prompt('플레이어 1 선택0(가위) 1(바위) 2(보)'))
let p2 = Number(prompt('플레이어 2 선택 0(가위) 1(바위) 2(보)'))
if(p1 == p2){console.log("무승부")}
else if((p1 == 0 && p2 == 2) || (p1 ==1 && p2 ==0) || (p1 ==2 && p2 ==1)){console.log("플레이어1 승리")}
else{console.log("플레이어2 승리")}
/* 풀이
p1 == (p2 + 1) % 3 이용
if( p1 == (p2 + 1) % 3){console.log('p1이김')}
*/
//문제9: 주차 차량 위치 검색
let carArray = ['250어7142', '142가7415', '888호8888']
let locationArray = [ 'A1', 'B3', 'C2']
let 차량번호 = prompt('차량번호를 입력')
let index = carArray.indexOf(차량번호) //문자열-> index(숫자) 찾기
let 차량위치 = locationArray[index] // 인덱스 (숫자) -> 문자찾기
if(carArray.includes(차량번호) == true){console.log(`${차량위치}에 있다`)}
else{console.log('차량이 존재하지 않습니다.')}

//문제10: 수강 신청 목록에서 과목 제외하기
let courseList = ['수학', '영어', '과학', '국어']
let 삭제 = prompt('삭제할 과목 입력(수학, 영어, 과학, 국어)')
if(courseList.includes(삭제) == true){
    courseList.splice(courseList.indexOf(삭제),1);
    console.log(`현재 수강과목은 ${courseList}입니다`)
}else{console.log('해당 과목은 신청 목록에 없습니다.')}