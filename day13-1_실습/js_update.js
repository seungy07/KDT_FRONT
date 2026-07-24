//  view -> 수정버튼 클릭시 기존 데이터 호출

// 화면에 출력부분
getBoard()
function getBoard(){
    let url = new URLSearchParams(location.search)
    let selectNo = url.get('no')

    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){boardList = []}

    for(let i=0; i<=boardList.length-1; i++){
        if(selectNo == boardList[i].no){
            document.querySelector('#titleInput').value =boardList[i].title
            document.querySelector('#contentInput').value =boardList[i].content
        }
    }
}

// 수정처리
function boardUpdate(){
    let url = new URLSearchParams(location.search)
    let selectNo = url.get('no')

    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){boardList = []}

    for(let i=0; i<=boardList.length-1; i++){
        if(selectNo == boardList[i].no){
            boardList[i].title = document.querySelector('#titleInput').value
            boardList[i].content = document.querySelector('#contentInput').value
            boardList[i].pw = document.querySelector('#pwdInput').value
        }
    }
    localStorage.setItem('boradList', JSON.stringify(boardList))
    alert('수정완료')
    location.href = `js_veiw.html?no=${selectNo}`
}