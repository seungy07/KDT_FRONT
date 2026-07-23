// 쿼리스트링에서 특정 게시물번호 정보 조회
getBoard()
function getBoard(){
    let url = new URLSearchParams(location.search) // 웹주소
    let selectNo = url.get('no'); // 주소에서 가져온 게시물 번호
    
    let boardList = JSON.parse(localStorage.getItem('boardList')) // 로컬저장소에서 저장된 정보 불러옴
    if(boardList == null){boardList = [] }

    for(let i=0; i<=boardList.length-1; i++){
        if(selectNo == boardList[i].no){
            document.querySelector('#title').innerHTML = boardList[i].title;
            document.querySelector('#content').innerHTML = boardList[i].content;
            break;
        }
    }
}

// 삭제
function boardDelete(){
    let url = new URLSearchParams(location.search)
    let selectNo = url.get('no')

    let boardList = JSON.parse(localStorage.getItem('boardList'))
    for(let i=0; i<=boardList.length-1; i++){
        if(boardList[i].no == selectNo){
            let inpw = prompt('비밀번호 입력')
            if(inpw == boardList[i].pw){
                boardList.splice(i,1)
            }else{alert('비밀번호가 틀림')}
        }
    }
    localStorage.setItem('boardList', JSON.stringify(boardList))
    alert('삭제성공')
    location.href = "js_list.html"
}