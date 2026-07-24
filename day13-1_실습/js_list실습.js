// 로컬저장소 불러옴 -> 출력
boardPrint()
function boardPrint(){
    // 출력할 곳
    let tbody = document.querySelector('#boardTbody')

    // 저장소에서 정보 불러오기
    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if(boardList == null){ boardList = []}

    // html에 출력할 부분
    let html = ''
    for(let i=0; i<=boardList.length-1; i++){
        let object = boardList[i]
        html +=`<tr>
                    <th> ${object.no} </th> 
                    <th> <a href="js_view.html?no=${object.no}">${object.title}</a> </th>
                </tr>`
    }
    tbody.innerHTML = html

}
