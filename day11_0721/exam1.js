
/* JS 가 해당 마크업을 제어 / 조작 할 수 있음.
    DOM : Document( HTML 문서 ), Object( 객체 ), Model( 표준 )
        - html 언어는 객체가 없다. 즉, 변수 / 연산 / 함수가 없다 (제어/조작 불가능)
        - JS 언어는 객체 O. HTML을 제어/조작 함
        1. 내장객체 : document , JS0가 HTML 구조 (객체로) 갖는다,  현재 JS가 포함된 HTML
        2. 주요속성 : 
            1) .querySelector( "CSS선택자" ) : 선택자의마크업을 객체로 반환
            2) .querySelectorAll( "CSS선택자" ): 선택자 마크업 N개 모두 배열로 가져옴
*/ 
// [1] HTML 전체 DOM 확인
console.log( document )

// [2] HTML 내 특정한 마크업 확인
const div = document.querySelector("div")
console.log(div)
const box2 = document.querySelector('.box2')
console.log(box2)
const box3 = document.querySelector('#box3')
console.log(box3)
const divList = document.querySelectorAll('div')
console.log(divList)

// [3] 가져온 DOM 마크업 객체에 속성 .innerHTML
const divHTML = div.innerHTML  // <마크업> inner </마크업> 띄워쓰기도 포함 
console.log(divHTML) 
div.innerHTML = "상자1"   // 박스1 -> 상자1 로 수정

// [4] 입력받은 값 가져오는 속성, .value
const name = document.querySelector(".name")
const value = name.value  // <input value="" /> value 값 호출, (input 갖고 있는 속성)
console.log(value)
name.value = "제목 입력"

// [5] 함수활용 : 입력받은 값을 함수내 가져오기
function 등록함수( ){
    // 1. 특정한 마크업 DOM 가져오기
    const 입력마크업 = document.querySelector('.title')
    // 2. 가져온 마크업 DOM에서 Value 가져오기
    const 입력받은값 = 입력마크업.value;
    // 3. 특정한 위치에 출력
    box2.innerHTML = 입력받은값
}

// [6] CSS 활용, style = "CSS 문법"
// 1. 특정한 마크업 DOM 가져오기
const 제목마크업 = document.querySelector('.title2')
// 2. 가져온 마크업 DOM에서 style 속성 대입하기
제목마크업.style = "color: red; font-size: 22px" 
