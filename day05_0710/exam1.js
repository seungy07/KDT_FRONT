// 반복문
// for 문
// for( 초기값 ; 조건식 ; 증감식){ 실행문:반복처리할 코드 }

// [1]안녕하세요 3번 출력
// 방법1: 횟수만큼 반복
console.log('안녕')
console.log('안녕')
console.log('안녕')
// 방법2: 반복문, 어디서부터(초기값) 어디까지(조건문) 증감하면서 무엇을(실행문)
for( let 반복수 = 1 ; 반복수 <= 3 ; 반복수++){
    console.log('안녕')
}

// [2] 1~5까지 출력
for( let 수 = 1 ; 수 <= 5; 수++ ){ console.log(수) }

// 0~10까지 총 합계
// 반복되는것 합계 = 합계 + ?
// 반복되지 않는 것: 1 2 3 4 5, 패턴? 1씩 증가
// 초기값: 1 조건문 5까지 , 증감식: 1씩 증가
let 총합계 = 0
for( let 수1 = 1; 수1 <= 10 ; 수1++ ){
    총합계 = 총합계 + 수1
}console.log(총합계)

// [3] 구구단
// 2단
let 구구단 = 0
for(let a = 0 ; a <= 9 ; a++ ){ 
    구구단2 = 2 * a ; console.log(`2 * ${a} = ${구구단2}`)
}

// 구구단 전체 2단 ~ 9단
//단 
//곱
let 구구단 
for( let 단 = 2 ; 단 <= 9 ; 단++){
    for( let 곱 = 1 ; 곱 <= 9 ; 곱++){
        구구단 = 단 * 곱 ; console.log(` ${단} * ${곱} = ${구구단}`)
    }
}

// [4] 세개의 문자열을 입력받아 배열의 저장
let array = []
for( let 반복수 = 1 ; 반복수 <= 3 ; 반복수++ ){
    let 입력 = prompt('입력'); 
    array.push(입력); 
}console.log(array)


// 배열과 반복문 관계: 배열은 인덱스 0 ~ 요소/자료 저장되는 순서 규칙 
// 인덱스는 1씩 증가
// .length 란? 배열내 요소/자료 개수 반환, 마지막인덱스(-1): 배열.lenght - 1 
// [1] 배열의 데이터를 하나씩 출력
let 과일 = ['사과', '포도', '딸기']
for( let index = 0 ; index <= 과일.length - 1 ; index++){ console.log(과일[index])}

// [1- 생각] 3개의 이름을 입력받아 배열의 저장하고 HTML 출력
let 이름 = [ ]
for(let 반복 = 1; 반복 <= 3; 반복++){
    let a = prompt('이름입력');
    이름.push(a);
}
//반복문을 이용한 HTML 구성
let html = ""
for( let 인덱스 = 0; 인덱스 <= 이름.length - 1 ; 인덱스 ++){
    html += `<li> ${ 이름[ 인덱스 ] } </li>`
}
document.querySelector("ol").innerHTML = html


//문제 1: 1 ~ 10까지 출력
for( let 숫자 = 1; 숫자 <=10; 숫자++){
    console.log(숫자)
}

//문제2: 배열의 모든 요소 출력
let fruits = ['사과', '바나나', '포도', '딸기']
for(let 인덱스 = 0; 인덱스 <= fruits.length -1 ; 인덱스++){
    console.log(fruits[인덱스])
}

//문제3: 배열 역순으로 출력
let numbers = [1,2,3,4,5]
for(let i = 4; i >= 0; i--){
    console.log(numbers[i])
}

//문제4: 1부터 50까지의 합계 구하기
let 합계 = 0
for(let a = 1; a <=50 ; a++){
    합계 += a // 합계 = 합계 + a
}console.log(합계)

//문제5: 짝수만 출력 1~20까지 짝수만 출력
for(let 짝수 = 1; 짝수 <= 20; 짝수++){
    if( 짝수 % 2 ==0){console.log(짝수)}
}
