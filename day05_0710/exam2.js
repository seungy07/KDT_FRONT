/*
// 반복문 제어키워드
// 1. continue:  반복문의 증감식으로 이동
for( let 반복수 = 1; 반복수 <= 5; 반복수++){
    //반복수가 3이면 continue 흐름이 아래로 내려가지 않는다.
    if(반복수 == 3){ continue } // 가장 가까운 반복문의 *증감식*으로 흐름 이동
    console.log(반복수) // 3은 생략되고 출력
}

// 2. break: 현재 반복문의 탈출 / 종료
for( let 반복수 = 1; 반복수 <= 5; 반복수++){
    if(반복수 == 3){ break } // break 만나면 for문의 끝나는 곳으로 중괄호 밖으로 이동
    console.log(반복수)
} // !! 여기로 이동

// 3. 무한루프(무한 반복) **특정 조건에 break**
// for(  ;  ; ){console.log('무한출력')}
for( ; ; ){
    let 입력 = prompt('무한 입력') // 무한 입력
    if( 입력 == 'EXIT'){ break } //특정 조건의 무한루프 탈출/종료
}

//문제6: 배열 요소의 합계와 평균 구하기
let scores = [85, 92, 78, 65 ,95]
let 총합계 = 0
for(let 인덱스 = 0 ; 인덱스 <= scores.length -1 ; 인덱스++){
    총합계 += scores[인덱스]
}console.log(` ${총합계/scores.length}`)

//문제7: 특정조건에서 반복문 탈출 break
let scores = [77, 82, 100, 54, 96]
for( let i = 0; i <= scores.length -1; i++){
    if(scores[i] == 100){ console.log(` ${scores[i]}점 학생은 누구?`) ; break }
    
}

//문제8: 특정 조건 건너뛰기 continue
let scores = [90, 45, 72, 88, 59, 100]
for(let i = 0; i <= scores.length -1; i++){
    if(scores[i] < 60){ continue }
    console.log(scores[i])
}

//문제9: 배열에서 특정 값의 개수 세기
let bloodTypes = ['A', 'B', 'O', 'AB', 'A', 'B', 'A']
let Acount = 0
for(let i = 0; i <= bloodTypes.length -1; i++){
    if(bloodTypes[i] == 'A'){Acount += 1}
}console.log(Acount)

//문제 10: 학생 점수 시각화 ㅁ + 한자키
let nameArray = ['유재석', '강호동', '신동엽']
let scores = [92, 86, 72]
let html = "" // HTML에 출력할 문자열을 저장할 변수
for(let i = 0; i <= nameArray.length -1; i++){
    html += nameArray[i]; //이름 출력
    html += scores[i]; // 이름마다 점수 출력 
    for(let 도형수 = 1; 도형수 <=10; 도형수++){
        if(scores[i] / 10 > 도형수 ){html += "●"}
        else{html += "○"}
    }html += "<br />"; // 이름마다  줄바꿈
}document.querySelector('p').innerHTML = html
//총 30번 반복 
*/