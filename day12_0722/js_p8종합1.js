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

    3.기능 설계 : CRUD, RESTAPI
        등록(CREATE) : 게시물쓰기, 회원가입, 수강신청 등등
            실행조건: 등록버튼 클릭 ,함수명: productAdd ,  매개변수: x  , 반환값:x

        조회(READ) : 게시물전체조회, 마이페이지 등등
            실행조건: js 열릴떄/최신화(등록,수정,삭제) ,함수명:productPrint ,  매개변수:  , 반환값:

        수정(UPDATE) : 게시물 수정, 내정보수정 등등
            실행조건: 수정버튼 클릭했을떄 ,함수명: productUpdate ,  매개변수: 수정할제품코드(누구를/대상)  , 반환값:x

        삭제(DELETE) : 게시물삭제, 회원탈퇴
            실행조건: 삭제버튼클릭, 함수명:produtDelete ,  매개변수: 삭제할 제품코드(누구를/대상)  , 반환값: x

*/
// 2.
let categoryList = [ { 'ccode': 1, 'cname': '음료' }, { 'ccode': 2, 'cname': '과자' }]
let productList = [
    { 'pcode': 1, 'pname': '콜라', 'pprice':1000, 'pimg': 'https://placehold.co/100x100', 'pdate': '2026-07-22', 'ccode':1},
    { 'pcode': 2, 'pname': '사이다', 'pprice':2000, 'pimg': 'https://placehold.co/100x100', 'pdate': '2026-07-23', 'ccode':1}
]

// 전체조회 함수
productPrint() // JS가 열릴때 최초 1번 실행
function productPrint( ){
    // 1. 어디에
    let tbody = document.querySelector( '#main table tbody' )
    // 2. 무엇을, 배열내 모든 객체(자료)들을 HTML(문자열) 형식 구성
    let html = ''
    for(let index = 0; index <= productList.length-1; index++){
        let product = productList[index] // 인덱스 번째 객체 하나
        // 현재 index번째 제품의 카테고리번호에 해당하는 카테고리명 찾기
        let cname = ''
        for( let i = 0; i <= categoryList.length - 1; i++){
            if(categoryList[i].ccode = product.ccode){ // 카테고리 번호와 제품의 카테고리번호 같다면
                cname = categoryList[i].cname;
                break; 
            }
        }
        html += `<tr>
                    <td> <img src="${product.pimg}"/> </td>
                    <td> ${ cname } </td> <td> ${product.pname} </td>
                    <td> ${product.pprice} </td> <td> ${product.pdate} </td> 
                    <td> 
                        <button class="deleteBtn" onClick="productDelet( ${product.pcode} )">삭제</button> 
                        <button class="updateBtn" onClick="productUpdate(${product.pcode})">수정</button> 
                    </td>  
                </tr>` // 샘플이 있으면  ` 복붙 `    
    }
    // 3. 출력
    tbody.innerHTML = html
}

// 삭제 함수, 출력함수에서 삭제 할 제품코드를 매개변수로 받아온다
function productDelet(pcode){
    // 1. 삭제할 pcode의 제품객체를 배열에서 찾는다
    for(let index = 0; index <= productList.length - 1; index++){
        if(productList[index].pcode == pcode){
            // 2.배열에서 요소 삭제 splic(인덱스, 개수)
            productList.splice(index, 1);
            alert('삭제 성공');
            productPrint( )// 3. 화면 최산화 (전체 조회 새로고침 == 재렌더링) 없으면 삭제만되고 화면이 그대로
            return // 주의할점: function{ } 탈출 vs for { } 탈출
        }
    }
}

// 수정 함수
function productUpdate( pcode ){
    // 1. 수정할 pcode의 제품객체를 배열에서 찾는다
    for( let index = 0; index <= productList.length - 1; index++){
        if(productList[index].pcode == pcode){
            let newPname = prompt('수정할 제품명')
            let newPprice = prompt('수정할 가격')
            // 2. 배열에서 특정한 요소값 수정
            productList[index].pname = newPname
            productList[index].pprice = newPprice
            productPrint(); return;
        }
    }
}

// 등록 함수
let finalPcode = 2 // pcode 구분용 마지막번호로 사용한 것 추후 +1 해서 사용 등록
function productAdd(){
    // 1. 입력받은 값 가져오기
    let category = document.querySelector('.category').value // <select> 마크업의 value는 선택한 <option value> 반환
    let name = document.querySelector('.name').value
    let price =document.querySelector('.price').value
    let image = document.querySelector('.image').files[0] // 이미지 .files 파일 여러개가 가능
        // 유효성 판단/감사는 꼼꼼히                  // 여러개 등록시 .files[인덱스]로 구별 가능
    if(category == 'disabled'){alert('카테고리선택'); return} // *코드의 흐름이 return 만나면 알코드를 생략하고 강제 함주 중지

    // 2. 입력받은 값들을 객체화,  입력받은 값이 잘들어가는지 중간 중간 확인 console.log()
        // pcode: 제품식별번호로 사용자가 지정하지 않고 자동번호, 마지막 사용된 제품코드 + 1
        // pdate : 현재 시스템 날짜/ 시간 함수 , new Date()
            // 현재연도: new Date().getFullYear()
    // console.log(new Date().getFullYear())
    // console.log(new Date().getMonth())  // 현재 월
    // console.log(new Date().getDate()) // 현재 일
    let pdate = `${ new Date().getFullYear() }-${ new Date().getMonth()+1 }-${ new Date().getDate()}`
    let object = { ccode: category, pname: name, pprice: price, 
                    // 만약 첨부파일선택이 없으면 (undefined) 기본이미지 이으면 선택한 첨부파일 가상URL 생성
                    pimg: image == undefined ? 'https://placehold.co/100x100': URL.createObjectURL( image ) , // URL.createObjectURL(객체) 객체 (가상)주소
                    pcode: finalPcode+1, pdate: pdate}
    console.log(object) // 등록 확인용

    // 3. 배열저장,               마지막 제품코드 1증가
    productList.push( object ); finalPcode += 1
    // 4. 성공
    alert('등록성공'); productPrint(); // 화면 최신화 꼭
    
}



