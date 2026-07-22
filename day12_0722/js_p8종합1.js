/*제품 등록 기능:
사용자가 '등록 영역'에 카테고리, 제품명, 가격을 모두 입력하고 "등록" 버튼을 클릭하면, 해당 제
품이 '목록 영역' 표에 새로운 행으로 즉시 추가되어야 합니다.

제품 등록 시, 등록 날짜는 현재 날짜로 자동 기록되어야 합니다.

첨부된 이미지는 목록의 '이미지' 열에 표시되어야 하며, 이미지를 첨부하지 않은 경우 기본 이미지
가 대신 표시되어야 합니다.

제품 관리 기능:
삭제: 각 제품의 "삭제" 버튼을 클릭하면 해당 제품이 목록에서 즉시 제거되어야 합니다.
수정: "수정" 버튼을 클릭하면, prompt 창을 통해 새로운 제품명과 가격을 입력받아 해당 제품의
정보를 수정하고 목록을 즉시 갱신해야 합니다. */

/*
    1. 기획서 / 요구사항 따른 프로토 타입
    2. 메모리 설계
        1) 저장해야할 것들을 모두 찾아보기, 카테고리명 / 제품명 / 가격 / 이미지 / 등록일
        2) 정규화 = 이상현상 최소화 ,  속성들 간의 종속관계( 1:N, N:1 ) 파악, 테이블 나누기
        3) 쪼개진 테이블 간 연관 만들기, 관계형데이터베이스
            3-1) 테이블당 식별자(PREMARY KEY = PK) 1개 권장
            3-2) 상하관계 파악해서 식별자(코드) 하위요소에 저장한다. (데이터베이스 FK: 참조키/외래키 )  *교집합*
            카테고리번호 - 카테고리명 - 제품코드 - 제품명 - 가격 - 이미지 - 등록일 - 카테고리코드(FK)
        
        4) JS(JSON)로 표현, 표 = 배열, 객체 = 행, 속성 = 열

*/

let categoryList = [ { 'ccode': 1, 'cname': '음료' }, { 'ccode': 2, 'cname': '과자' }]
let productList = [
    { 'pcode': 1, 'pname': '콜라', 'pprice':1000, 'pimag': 'https://placehold.co/100x100', 'pdate': '2026-07-22', 'ccode':1},
    { 'pcode': 2, 'pname': '사이다', 'pprice':2000, 'pimag': 'https://placehold.co/100x100', 'pdate': '2026-07-23', 'ccode':1}
]

// 제품 등록 기능
function productAdd(){
    let category = document.querySelector('.category').value
    let name = document.querySelector('.name').value
    let price = Number(document.querySelector('.price').value).toLocaleString()
    let image = document.querySelector('.image').value 

    let tbody = document.querySelector('tbody')
    tbody.innerHTML += `<tr>
                        <td> <img src=${image}/> </td>
                        <td> ${category} </td> <td> ${name} </td> <td> ${price} </td> <td> 2026-01-26 </td> 
                        <td> 
                            <button class="deleteBtn">삭제</button> 
                            <button class="updateBtn">수정</button> 
                        </td>
                    </tr>`

}