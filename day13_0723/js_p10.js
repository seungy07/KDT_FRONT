/*
저장소: 모든 회원 정보는 브라우저의 **localStorage**를 사용하여 저장 및 관리되어야 합니다. 
데이터 구조: 회원 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
각 회원 객체는 { 'no' : 회원번호 , 'id' : 아이디, 'pw' : 비밀번호 } 형태를 가집니다.
회원번호(no)는 등록 시마다 1씩 자동 증가해야 합니다.
이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, localStorage에 'memberList'라는 키(key)로 저장되어야 합니다. */

// memberList: [ { 'no' : 회원번호 , 'id' : 아이디, 'pw' : 비밀번호} , {} ]

// 회원가입 구현 signup()
function signup(){
    let id = document.querySelector('.signId').value
    let pw = document.querySelector('.signPw').value

    // localStorage 있는 memberList 가져오기, 없으면 null * JSON 파싱 *
    let memberList = JSON.parse(localStorage.getItem('memberList'))
    console.log(memberList) // 값 확인해봐야함 null
    
    if( memberList == null){ // 최초 등록시 배열 사용
        memberList = [ ]
    }

    // 마지막 인덱스= length - 1 ,  마지막회원번호 + 1
    let no = memberList.length == 0 ? 1: memberList[memberList.length-1].no+1
    let object = { no , id, pw } // 새로 추가하는 정보 객체
    console.log(object)
    
    // 정보를 저장하는 부분  ** 누적 저장 
    //기존 정보를  [ ] 로 가져옴 없으면 빈 배열 형태로
    memberList.push(object); // 새로운 정보 객체 추가
    console.log(memberList);
    alert('등록성공')

    localStorage.setItem('memberList', JSON.stringify(memberList))
}

//로그인 구현login()
function login(){
    let id = document.querySelector('.loginId').value
    let pw = document.querySelector('.loginPw').value
    // 저장된 값을 호출
    let 회원정보 = JSON.parse( localStorage.getItem('memberList'))
    for(let i = 0; i <= 회원정보.length - 1; i++){
        if( 회원정보[i].id == id && 회원정보[i].pw == pw){
            alert('로그인 성공');
            break;
        }else{alert('동일한 회원정보가 없습니다. 로그인 실패')}
    }
}
// if(memberList != null) 추가 고려 