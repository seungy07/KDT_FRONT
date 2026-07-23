//전체출력
boardPrint()
function boardPrint(){
    let boardTbody = document.querySelector('#boardTbody')

    let boardList = JSON.parse(localStorage.getItem('boardList'))
    if( boardList == null){ boardList = []}

    let html = ''
    for(let i=0; i<=boardList.length-1; i++){
        let object = boardList[i]
        html +=`<tr>
                    <th> ${object.no} </th> 
                    <th> <a href="js_view.html?no=${object.no}">${object.title}</a> </th>
                </tr>`
    }
    boardTbody.innerHTML = html
}

