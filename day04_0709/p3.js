// 문제1: 과일 목록 관리
/*
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
*/
//문제5: 세 수 중 가장 큰 수 찾기
let a = Number(prompt("서로다른 수 중 첫번째 수 입력"))
let b = Number(prompt("서로다른 수 중 두번째 수 입력"))
let c = Number(prompt("서로다른 수 중 세번째 수 입력"))
if(a>b && a>c){}
