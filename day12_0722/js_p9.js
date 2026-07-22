let teamList = [ 
    { 'tcode': 1, 'tname': '개발팀' }, 
    { 'tcode': 2, 'tname': '디자인팀' },
    { 'tcode': 3, 'tname': '기획팀' }]	

let nameList = [
    { 'tcode': 1, 'Wcode': 1 ,'name': '김민준', '직급': '선임개발자', 'img': 'https://placehold.co/100x100'},
    { 'tcode': 2, 'Wcode': 2 ,'name': '이서연', '직급': '수석디자이너', 'img': 'https://placehold.co/100x100'},
    { 'tcode': 3, 'Wcode': 3 ,'name': '박도윤', '직급': '팀장', 'img': 'https://placehold.co/100x100'}
]	

//조회 workerPrint 
workerPrint()
function workerPrint(){
    // 사원 전체 목록 조회
    document.querySelector('.card sub-section > tbody')
    let html = ''
    for(let index=0; index <= nameList.length-1; index++){
        let person = nameList[index] // index번쨰 객체(사원)
        let teamName = '' // 부서 명
        for(let index=0; index <= teamList.length-1; index++){
            if(teamList[index].tcode == nametist[index].tcode){
                teamName = teamList[index].tname;
                break;
            }
        }
        html +=`<tr>
                    <td><img src="${person.img}" alt="프로필" class="profile-img"></td>
                    <td>${person.name}</td>
                    <td> ${teamName} </td>
                    <td>${person.직급}</td>
                    <td class="action-links align-right">
                        <a href="#" class="link-edit" onClick="workerUpdate(${person.tcode})">수정</a>
                        <a href="#" class="link-delete" onClick="workerDelete(${person.tcode})">삭제</a>
                    </td>
                </tr>`
    }
}

//수정workerUpdate  현재 새로고침만됨고 아무것도 안일어남** 수정해야함 부서명 변경시-> 부서코드변경 저장
function workerUpdate( tcode ){
    for(let i=0; i <= nameList.length-1; i++){
        if(nameList[i].tcode == tcode){
            let newName = prompt('수정할 이름')
            let new직급 = prompt('수정할 직급')
            
            // 수정(이름, 직급, 부서명(부서코드))
            nameList[i].name = newName
            nameList[i].직급 = new직급
        
            workerPrint(); return;
        }
    }
}

//삭제workerDelete
function workerDelete( tcode ){
    for(let i=0; i <= nameList.length-1; i++){
        if(nameList[i].tcode == tcode){
            nameList.splice(i,1);
            alert('삭제');
            workerPrint();
            break;
        }
    }
}


//등록workerAdd  
let finalWcode = 3
function workerAdd(){  // 버튼에 onclick="workerAdd()" 추가
    let teamcode= document.querySelector('.form-group > select').value 
    let name = document.querySelector('.이름').value   // input 박스 class 추가
    let 직급 =document.querySelector('.직급').value    // input 박스 class 추가
    let image = document.querySelector('.image').files[0] 

    let object = { tcode: teamcode, name: name, 직급 : 직급, 
                    img: 'https://placehold.co/100x100' , Wcode: finalWcode+1, }
    console.log(object) 
    nameList.push( object ); finalWcode += 1
    // 4. 성공
    alert('등록성공'); workerPrint(); 
   
}

