
// 선택 부분 출력
boardView()
function boardView(){
    // 현재 주소상에서 매개변수 확인
    let url = new URLSearchParams(location.search)
    let num = url.get('no')

    //스토리지 내에 저장된 자료 호출
    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){ boardList = []}

    // 매개변수와 맞는 자료(선택한)를 출력
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
    // 현재 주소상에서 매개변수 확인
    let url = new URLSearchParams(location.search)
    let num = url.get('no')
    
    let boardList = JSON.parse(localStorage.getItem('boardList')) // 스토리지 내에 정보 출력
    if(boardList == null){ boardList = []}

    // 매개변수와 맞는 정보에서 비밀번호와 입력만 비밀번호 비교 
    for(let i=0; i<=boardList.length-1; i++){
        if(boardList[i].no == num){
            let 비밀번호 = prompt('비밀번호')
            if( 비밀번호 == boardList[i].pw ){
                boardList.splice(i,1);
                
            }// else{alert('비밀번호 틀림')} 없음
        }
    }
    // 삭제후 스토리지에 재저장 
    localStorage.setItem('boardList', JSON.stringify(boardList))
    alert('삭제성공')
    location.href="js_list.html" // js에서 list페이지로 다시이동

}