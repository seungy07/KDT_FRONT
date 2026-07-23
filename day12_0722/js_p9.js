let teamList = [ 
    { 'tcode': 1, 'tname': '개발팀' }, 
    { 'tcode': 2, 'tname': '디자인팀' },
    { 'tcode': 3, 'tname': '기획팀' }]	

let nameList = [
    { 'tcode': 1, 'Wcode': 1 ,'name': '김민준', '직급': '선임개발자', 'img': 'https://placehold.co/100x100'},
    { 'tcode': 2, 'Wcode': 2 ,'name': '이서연', '직급': '수석디자이너', 'img': 'https://placehold.co/100x100'},
    { 'tcode': 3, 'Wcode': 3 ,'name': '박도윤', '직급': '팀장', 'img': 'https://placehold.co/100x100'}
]
let vacationList = [
    {Wcode : 1, vcode: 1, vstart: '2025-08-04', vend: '2025-08-04', vreason: '병원 진료', state: 'true'},
    {Wcode : 2,  vcode: 2,  vstart: '2025-07-21', vend: '2025-07-25', vreason: '여름 휴가', vstate: 'true'}]


//조회 workerPrint 
workerPrint()
function workerPrint(){
    // 사원 전체 목록 조회
    let tbody = document.querySelector('.card.sub-section > .employee-table > tbody')
    let html = ''
    for(let index=0; index <= nameList.length-1; index++){
        let person = nameList[index] // index번쨰 객체(사원)
        let teamName = '' // 부서 명
        for(let index=0; index <= teamList.length-1; index++){
            if(teamList[index].tcode == nameList[index].Wcode){
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
    tbody.innerHTML = html
}

//수정workerUpdate 
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
            // 휴가 신청 목록 조회
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
// ================================================================================================================================
// 부서 관리
function teamPrint(){
    let tbody = document.querySelector('.card table tbody');
    
    let html='';
    
    for(let i = 0; i<teamList.length; i++){
            let team = teamList[i];


            html += `<tr>
              <td>${team.tname}</td>
              <td class="action-links align-right">
                <a href="javascript:teamUpdate(${team.tcode})" class="link-edit">수정</a>
                <a href="javascript:teamDelete(${team.tcode})" class="link-delete">삭제</a>
              </td>
                </tr> `
    }

    tbody.innerHTML = html;
   
} teamPrint()

let finaltcode = 4;

function teamAdd(){
    let teaminput = document.querySelector('.dept-input-group input').value;
    let result = { 'tcode': finaltcode++ , 'tname': teaminput };

    if(teaminput == ''){
        alert('부서명을 입력해주세요');
        return;
    }

    teamList.push(result);

    teamPrint();
    console.log(teamList);
    return;
}
    


function teamUpdate(tcode){
    for( let j = 0 ; j < teamList.length ; j++ ){
        if(teamList[j].tcode == tcode){
            let newname = prompt('부서명 변경');
            teamList[j].tname = newname;
        }
    }
   teamPrint();
    return;
}

function teamDelete(tcode){
    for( let j = 0 ; j < teamList.length ; j++ ){
        if(teamList[j].tcode == tcode){
            teamList.splice(j , 1);
        }
    }
    teamPrint();
    return;
}

//=========================================================================================
// 휴가 관리  수정필요
//조회
vaPrint();
function vaPrint( ){
    let box = document.querySelector(".card.sub-section");
    let html = "";
    for(let index = 0; index <= vacationList.length -1; index++){
        let vacation = vacationList[ index ];
        let workerName = "";
        for(let index = 0; index <= nameList.length -1; index++){
            if( nameList[ index ].Wcode == vacation.Wcode){
                workerName = nameList[ index ].name;
                break;
            }
        }
        html += `
        <div class="vacation-card">
            <div class="user-name"> ${workerName} </div>
            <div class="date"> ${vacation.vstart}-${vacation.vend} </div>
            <div class="reason"> 사유 : ${vacation.vreason} </div>
            <button class="btn-cancel" onclick="vaDelete(${vacation.vcode})"> 신청취소 </button>
        </div>
        `;
    }
    box.innerHTML = html;
}
//추가
let finalVcode = 2;
function vaAdd( ){
    let worker = document.querySelector( ".휴가신청자" ).value; //Wcode를 반환 123
    let start = document.querySelector( ".휴가시작일" ).value;
    let end = document.querySelector( ".휴가종료일" ).value;
    let reason = document.querySelector(".휴가사유").value;

    let object = {Wcode : worker, vcode: finalVcode+1 , vstart: start, vend: end, vreason: reason }
    vacationList.push( object );

    alert( "휴가 신청 완료" );
    vaPrint( );
}
//삭제
function vaDelete(vcode){
    for(let index = 0; index <= vacationList.length -1; index++){
        if(vacationList[index].vcode == vcode){
            vacationList[index].vstate = false;
            alert("휴가 신청이 취소되었습니다.");
            vaPrint( );
            return;
        }
    }
}