//문제 1: 삼각형 넓이 계산
let 밑변 = Number(prompt('밑변의 길이:'))
let 높이 = Number(prompt('높이의 길이:'))
console.log( `삼각형의 넓이는 ${(밑변 * 높이) / 2}`)

//문제2: 섭씨 화시 변환
let 섭씨 = Number(prompt('섭씨 온도:'))
console.log( `화씨 온도는 ${(섭씨 * 9 / 5) +32}`) 

//문제3: 나이 계산기
let 탄생 = Number(prompt('태어난 년도:'))
console.log( `2025년 현재 나이는 ${2025-탄생} 살입니다` ) 

//문제4: BMI지수 계산
let 키 = Number(prompt('키를 입력하세요(cm)')) / 100
let 체중 = Number(prompt('체중을 입력하세요(kg)'))
console.log(`당신의 BMI 지수는 ${체중/ (키*키)} 입니다`) 

//문제5: 관리자 확인
let id = prompt(' ID')
let email = prompt('email')
console.log(`당신은 ${id == "admin" || email == "admin@test.com" ? '관리자' : '일반사용자'}입니다`) 

//문제6: 학점 변환기 (HTML출력)
let 점수 = Number(prompt('점수를 입력하시오'))
document.querySelector("h2").innerHTML = `당신의 학점은 ${점수 >= 90 ? 'A': 점수 >= 80 ? 'B': 점수 <80 &&점수 < 70 ? 'C':'B와 c 중간이므로 노력'}`


//문제7: 청년 할인 이벤트 대상 확인
let 나이 = Number(prompt('나이를 입력하세요.'))
console.log( `${나이 >= 20 && 나이 <= 29 ? "이벤트 대상입니다." : "이벤트 대상이 아닙니다."}` ) 

//문제8: 좋아요 카운터 만들기
let likeCount = 3
console.log(`좋아요: ${++likeCount}`) 

//문제9: 할 일 목록에 항목추가
let todoList = ['장보기', '과제하기']
todoList.push(prompt('오늘 할 일'))
console.log(`오늘 할 일은 ${todoList} 입니다.`)  

//문제10: 대기열의 마지막 사람 확인
let waitingList = ['김민준', '이서연','박도윤', '최지우']
console.log(`마지막 대기자는 ${waitingList[3]}입니다` )
