// 쓰기
function boardWrite(){
    let title =document.querySelector('#titleInput').value
    let content =document.querySelector('#contentInput').value
    let pw =document.querySelector('#pwdInput').value
    // 중간중간 console.log()로 값을 잘 출력/반환 하는지 체크
    let object = {title, content, pw} // 객체 : 묶어주기

    // 웹스토리지 [배열] 가져오기. 초기값이 없는 경우 빈 배열만 반환
    let boardList = JSON.parse(localStorage.getItem('boardList'))
    // console.log() 로 boardList 반환값 확인후 
    if(boardList == null){ boardList = [] }
    
    // 매개변수로 활용하기 위해 no로 넘버 부여. 길이로 번호를 구함(삼항조건식)
    object.no = boardList.length == 0 ? 1: boardList[boardList.length-1].no + 1
    boardList.push(object)

    localStorage.setItem('boardList', JSON.stringify(boardList)) // 객체를 문자열로 변환후 저장
    alert('저장성공')
    
    location.href ="js_list.html" // JS 에서 페이지 이동
}