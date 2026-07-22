function 등록(){
    // 날짜 
    let 날짜 = document.querySelector(".date")
    let 날짜값 = 날짜.value

    //항목이름
    let 항목 = document.querySelector(".항목")
    let 항목값 = 항목.value

    //금액
    let 금액 = document.querySelector(".금액")  
    let 금액값 = Number(금액.value).toLocaleString()

    //tbody 마크업 사이에 값을 넣는다
    let tbody = document.querySelector('tbody')
    tbody.innerHTML += `<tr> 
                        <td> ${날짜값} </td>
                        <td> ${항목값} </td>
                        <td> ${금액값} </td>
                       </tr>`
}

/* 풀이
배열 = 표 / 객체 = 행 / 속성 = 열

let 가계부목록 = [ 
    {날짜 : '2025-06-19', 항목 : '점심 식사', 금액: 9000},
    {날짜 : '2025-06-19', 항목 : '교통비', 금액: 15000} ]
 
 기능설계: 등록, 출력
 - 등록함수: 등록버튼 클릭, 3개의 입력받은 값들을 가져와서 가계부 목록(배열)에 객체로 저장
 - 출력함수: 페이지가 열리면/등록 성공하면, 현재 가계부목록에 저장된 객체들을 테이블에 출력
 
function 등록함수(){
    // 1. 특정한 마크업DOM에 입력받은 값 가져오기, input 박스도 value 무조건 문자열 타입
    let 날짜 = document.querSelector('.날짜입력').value;
    let 항목 = document.querSelector('.항목입력').value;
    let 금액 = document.querSelector('.금액입력').value;

    // 2. 객체로 구성
    let 객체 = {날짜, 항목, 금액} // 객체생성시 속성명과 속성값의 변수명이 같으면 생략가능

    // 3. 추후에 java/python 백엔드 언어들에게 통신 저장을 함
    // 배열 저장
    가계부목록.push(객체)
    alert('등록성공')
    출력함수() //등록 성공시 출력 한번
}

function 출력함수(){
    // 백엔드 통신 코드) 추후에 백엔드로 배열 정보 가져온다

    // 1. 어디에
    let 테이블 = document.querySeletor('table > tbody)

    // 2. 무엇을, 배열내 모든 자료(객체)들을 HTML(문자) 형식으로 
    let html = ''
        for(let i = 0; i <= 가계부목록.length - 1; i++){
            let 가계부 = 가계부목록[i]
            html += `<tr>
                        <td> ${가계부.날짜}</td>
                        <td> ${가계부.항목}</td>
                        <td> ${가계부.금액.toLocaleString() }</td>
                    </tr>`
        }

    // 3. 출력
    테이블.innerHTML = html;
}
출력함() // JS실행되면 아무조건없이 함수 1번 실행 ( 페이지 열렸을떄 )







*/