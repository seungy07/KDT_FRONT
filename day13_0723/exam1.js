
/*  
    프론트엔드 : 화면, 시각적 요소
     - 브라우저(크롬/엣지/사파리)에 의존하여 HTML 렌더링
     - HTML 안에 JS/CSS도 포함하여 같이 렌더링 된다.
     - 브라우저 F5(새로고침) : 재렌더링(재요청) JS초기화 한다
     백엔드 : 비지니스로직, 서버
*/

// 1] JS 변수들은 브라우저에서 F5(새로고침) 초기화 된다.
// 2] HTML 안에 포함된 JS/CSS 파일들은 F12(개발자도구)에서 [ sources ] / [ console ]확인 가능
//      -> 하나의 HTML에 여러개 js/css 파일 가능
// 3] 서로 다른 .js 파일에서 동일한 HTML에 포함되면 코드 공유 가능
    // test.js에서 선언된 코드가, exam1.js에서 호출(사용) 가능


// 브라우저에 저장 기능, 개발자도구 - > [application]
/* 
    -웹스토리지 
        [1] 세션스토리지 : 세션 저장소
            - 모든 브라우저가 종료 되면 자동 삭제
            - 서로 다른 브라우저 / 탭 자료 공유 안딤.
            예] 이벤트정보들, 최근 본 제품 목록 
        [2] 로컬스토리지 : 로컬 저장소  
            - 모든 브라우저가 종료해도 저장 유지
            - 서로 다른 브라우저 / 탭 공유 됨. (단 동일한 도메인 경우)
            예] 자동로그인 / 로그인유지
        * 노출에 대한 위험한 경우 암호화를 통해 자료 인코딩(변환) 
*/
// [1] 웹 스토리지 객체 호출
console.log( localStorage ) 
console.log( sessionStorage )

// [2] 웹 스토리지 객체 내 자료 추가  .setItem( 'key', value )
sessionStorage.setItem( 'name', '유재석')
// F12 -> APPLICATION -> 왼쪽메뉴 -> 세션스토리지 -> 도메인(주소) 클릭
localStorage.setItem( 'age', 40 )

// [3] 웹 스토리지 객체 내 자료 호출 .getItem( 'key' )
let name = sessionStorage.getItem( 'name' ); console.log(name);
let age = localStorage.getItem( 'age' ); console.log(age);

// [4] 웹 스토리지 객체 내 자료 삭제  .removeItem( 'key' )
sessionStorage.removeItem('name') // 특정한 key가 존재하면 key,value 삭제 // 개발자도구에서 삭제 결과 확인
localStorage.clear( ) // 모든 key 삭제

// [*] 웹 스토리지도 문자열만 지원 *타입변환이 필요*
/*
// 동적타입(자동 타입)
let a = 10 // JS
a = 10 // py
// 정적 타입(직접 타입 지정)
// int a = 10
*/

// [5] JSON(자바스트립트 객체) ,  JSON,stringify( 객체 ) : 객체 타입을 문자 변환
sessionStorage.setItem('회원객체', JSON.stringify( {'name' : '유재석', 'age': 40} )) 
// 브라우저를 객체를 모름, 회원객체 [Object Object] 로 저장됨

// JSON.parse( 문자열 ) : 문자열 타입 --> 객체 타입 변환 
let 회원객체 = JSON.parse( sessionStorage.getItem( '회원객체' ) )
console.log( 회원객체 )

// JS는 브라우저가 F5(새로고침) 메모리가 초기화 된다. 
// 그래서 백엔드 필요하다. 또는 브라우저스토리지 사용 
