function 등록(){
    // 날짜 
    let 날짜 = document.querySelector(".date")
    let 날짜값 = 날짜.value

    //항목이름
    let 항목 = document.querySelector(".항목")
    let 항목값 = 항목.value

    //금액
    let 금액 = document.querySelector(".금액")  
    let 금액값 = Number(금액.value).toLocaleString()

    //tbody 마크업 사이에 값을 넣는다
    let tbody = document.querySelector('tbody')
    tbody.innerHTML += `<tr> 
                        <td> ${날짜값} </td>
                        <td> ${항목값} </td>
                        <td> ${금액값} </td>
                       </tr>`
}