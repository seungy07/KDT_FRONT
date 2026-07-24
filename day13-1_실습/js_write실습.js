// 쓰기
function boardWrite(){
    let title =document.querySelector('#titleInput').value
    let content =document.querySelector('#contentInput').value
    let pw =document.querySelector('#pwdInput').value
    // 중간중간 console.log()로 값을 잘 출력/반환 하는지 체크
    let object = {title, content, pw}

    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){ boardList = [] }
    
    object.no = boardList.length == 0 ? 1: boardList[boardList.length-1].no+1
    boardList.push(object)

    localStorage.setItem('boardList', JSON.stringify(boardList))
    alert('저장성공')
    
    location.href ="js_list.html"
}