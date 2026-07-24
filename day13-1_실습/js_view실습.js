
// 선택 부분 출력
boardView()
function boardView(){
    let url = new URLSearchParams(location.search)
    let num = url.get('no')

    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){ boardList = []}

    for(let i=0; i<=boardList.length-1; i++){
        let object = boardList[i]
        if(boardList[i].no == num){
            document.querySelector('#title').innerHTML = object.title
            document.querySelector('#content').innerHTML = object.content
        }
    }
}



//삭제 boardDelete()
function boardDelete(){
    let url = new URLSearchParams(location.search)
    let num = url.get('no')
    
    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){ boardList = []}

    for(let i=0; i<=boardList.length-1; i++){
        if(boardList[i].no == num){
            let 비밀번호 = prompt('비밀번호')
            if( 비밀번호 == boardList[i].pw ){
                boardList.splice(i,1);
                
            }// else{alert('비밀번호 틀림')} 없음
        }
    }
    localStorage.setItem('boardList', JSON.stringify(boardList))
    alert('삭제성공')
    location.href="js_list.html"

}