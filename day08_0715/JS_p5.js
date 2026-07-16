/* 문제 1: prompt로 제품 정보 객체 만들기 */
let 제품명 = prompt('제품명')
let 가격 = prompt('가격')
let 제조사 = prompt('제조사')
const product = { 제품명: 제품명, 가격: 가격, 제조사: 제조사} 
/* 속성명과 속성값의 변수명이 같다면 생략가능 
const product = { 제품명, 가격, 제조사} */
console.log(product)

/*문제 2: prompt로 회원 가입 및 아이디 중복 확인 기능 구현  */
const members = [{ id: 'user1', password: 'pass1', name: '사용자1' }, { id: 'user2', password: 'pass2', name: '사용자2' }]
let member = { id: prompt('아이디'), password: prompt('비밀번호'), name: prompt('이름')}
let 중복여부 = false
for(let i = 0; i <= members.length -1; i++){
    if(members[i].id == member.id){
        console.log('이미 존재하는 아이디 입니다');
        중복여부 = true
        break;}
}if( 중복여부 == false){
    members.push(member)
    console.log(members) }

/* 문제 3: 객체 배열의 속성 값 평균 구하기
scores 배열에 담긴 모든 학생의 수학(math) 점수 평균을 계산하여 콘솔에 출력하시오. */
const scores = [ { name: 'A', math: 80, science: 92 }, { name: 'B', math: 95, science: 88 }, { name: 'C', math: 76, science: 78 } ]
let 수학총점 = 0;
for(let i = 0; i <= scores.length - 1; i++){
    // 반복문 { } 안에서 선언된 변수/상수는 반복문 종료시 값이 초기화
    수학총점 += scores[i].math
}console.log(수학총점/scores.length)

/* 문제 4: 특정 조건을 만족하는 객체 찾기
products 배열에서 id가 3인 상품 객체를 찾아, 해당 객체 전체를 콘솔에 출력하시오. 일치하는 객체가 없으면 "상품을 찾을 수 없습니다."를 출력합니다. */
const products = [ { id: 1, name: '사과' }, { id: 2, name: '바나나' }, { id: 3, name: '포도' }, { id: 4, name: '딸기' } ];
let 존재여부 = false
for(let i = 0; i <= products.length - 1; i++){
    if(products[i].id == 3){
        console.log(products[i]);
        존재여부 = true; break; }
}if( 존재여부 != true){
    console.log('상품을 찾을 수 없습니다') }

/* 문제 5: 객체 배열 필터링하기
users 배열에서 isActive가 true인 사용자들만으로 구성된 새로운 배열 activeUsers를 만들고, 이 배열을 콘솔에 출력하시오. */
const users = [ 
    { id: 1, name: '유저1', isActive: true }, 
    { id: 2, name: '유저2', isActive: false }, 
    { id: 3, name: '유저3', isActive: true }, 
    { id: 4, name: '유저4', isActive: false }];
let activeUsers = [  ]
for(let i = 0; i <= users.length - 1; i++){
    if(users[i].isActive == true){
        activeUsers.push(`id: ${users[i].id}, name: ${users[i].name}`) }
}console.log(activeUsers)

/*문제 6: 객체 배열 데이터 변환하기
movies 배열에 있는 각 영화 객체에서 title 속성만 추출하여, 영화 제목들로만 이루어진 새로운 배열 movieTitles를 만들고 콘솔에 출력하시오. */
const movies = [ { title: '인셉션', director: '크리스토퍼 놀란' }, { title: '기생충', director: '봉준호' }, { title: '매트릭스', director: '워쇼스키 자매' } ];
let movieTitles = [ ]
for(let i = 0; i <= movies.length - 1; i++){
    movieTitles.push(movies[i].title)
}console.log(movieTitles)

/* 문제 7: 데이터 그룹화하기
다음 team 배열을 department를 기준으로 그룹화하여, 아래 result와 같은 형태로 만드시오. */
const team = [
    { name: '철수', department: '개발팀' },
    { name: '영희', department: '기획팀' },
    { name: '민수', department: '개발팀' },
    { name: '지혜', department: '기획팀' }];
let 팀분류 = { 개발팀:[] , 기획팀:[] }
for(let i = 0; i <= team.length - 1; i++){
    if(team[i].department == '개발팀'){
        팀분류.개발팀.push(team[i].name) }
    if(team[i].department == '기획팀'){
        팀분류.기획팀.push(team[i].name) }
}console.log(팀분류)
/*풀이
let 팀룬류 = {}
for(let i = 0; i <= team.lenght - 1 ; i++){
    if(team[i].department in 팀분류){
    팀분류[team[i].department].push(team[i].name)
    }else{ // 만일 속성명이 특수문자 or 변수명으로 구성된경우 . 대신 []
        //   중의할점:  배열의 [ ]와 객체의 [] 구분, 배열[인덱스번호] vs 객체 [속성명문자]
        팀분류[team[i].department] = [team[i].name]
    }
}  */

/*문제 8: 장바구니 총액 계산하기 */
const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1 }];
const productsInfo = [ { id: 1, price: 1000 }, { id: 2, price: 5000 }, { id: 3, price: 2500 } ];
let 총결제 = 0
for(let i = 0; i <= productsInfo.length - 1; i++){
    for(let j = 0; j <= cart.length - 1; j++ ){
        if( cart[j].id == productsInfo[i].id){
            총결제 += ( cart[j].quantity * productsInfo[i].price ) } }
}console.log(` 총 결제금액은 ${총결제}원`)

/* 문제 9: 투표 결과 집계하기
다음 votes 배열은 투표 결과를 나타냅니다. 각 후보가 몇 표를 받았는지 집계하여, 후보의 이름이 키이고 득표수가 값인 객체를 만들어 콘솔에 출력하시오.*/
const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A'];
let Acount = 0; let Bcount = 0 ; let Ccount = 0 ;
for(let i = 0; i <= votes.length - 1; i++){
    if(votes[i] == 'A'){
        Acount += 1
    }else if(votes[i] == 'B'){
        Bcount += 1
    }else if(votes[i] == 'C'){
        Ccount += 1
    }
}let 득표수 = { A: Acount, B:Bcount, C:Ccount}; console.log(득표수)
/* 풀이
const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A']; 
const result = { }
for(let i = 0; i <= votes.lenght-1; i++){
    if(votes[i] in result){
        result[ votes[i] ] += 1 //해당 속성명 +1
    }else{ result[votes[i]]  = 1 } //존재x 득표수 1로 ㅊ초기화    resule = { votes[i] = 1} 로 추가됨, 추후 B C도 덮어써지지 않고 추가만 됨
}console.log( result)  */

/* 문제 10: 웹툰 평점 시각화하기 */
const webtoons = [
    { title: '나 혼자만 레벨업', rating: 9.8 },
    { title: '유미의 세포들', rating: 9.9 },
    { title: '전지적 독자 시점', rating: 9.7 }];
let html = ''
for(let i = 0; i <= webtoons.length - 1; i++){
    let rating = [];
    rating.push(parseInt(webtoons[i].rating))
    html += `<div> ${webtoons[i].title}`
    for(let 별 = 1; 별 <= 10; 별++){
        if(별 <= rating[i]){
            html += `<span> ★ </span>` 
        }else{html += `<span> ☆ </span>`}
    }html += '</div> <br />'
}document.querySelector("p").innerHTML = html

/* 문제11 : 공공데이터 포털 : 인천 부평구 맛집 현황 테이블 만들기 */
let response = {"currentCount":10,"data":[{"소재지":"인천광역시 부평구 안남로417번길 20, 2층 (청천동)","업소명":"1982삼계정","업태":"한식","연번":1,"전화번호":"032-512-1982","지정메뉴":"녹두삼계탕"},{"소재지":"인천광역시 부평구 부평대로 301 (청천동,남광센트렉스 111호)","업소명":"갈비가","업태":"한식","연번":2,"전화번호":"032-363-3787","지정메뉴":"속초코다리냉면"},{"소재지":"인천광역시 부평구 평천로553,1층(삼산동)","업소명":"경복궁삼계탕","업태":"한식","연번":3,"전화번호":"032-511-1494","지정메뉴":"들깨삼계탕"},{"소재지":"인천광역시 부평구 부평대로63번길10-11(부평동)","업소명":"금강산추어탕","업태":"한식","연번":4,"전화번호":"032-527-8118","지정메뉴":"추어탕"},{"소재지":"인천광역시 부평구 부평대로87번길 4(부평동)","업소명":"뉴욕반점","업태":"중식","연번":5,"전화번호":"032-516-4488","지정메뉴":"삼선짬뽕,찹쌀탕수육"},{"소재지":"인천광역시 부평구 신트리로22번길 15-14 (부평동, 1층 일부)","업소명":"더히든키친","업태":"양식","연번":6,"전화번호":"032-272-7276","지정메뉴":"바질페스토파스타"},{"소재지":"인천광역시 부평구 마장로 402(청천동)","업소명":"덕수갈비","업태":"한식","연번":7,"전화번호":"032-517-4070","지정메뉴":"왕갈비탕"},{"소재지":"인천광역시 부평구 대정로 93, 웰링턴 1층 103호 (부평동)","업소명":"동강해물탕","업태":"한식","연번":8,"전화번호":"032-524-9166","지정메뉴":"해물탕"},{"소재지":"인천광역시 부평구 백범로468번길45(십정동)","업소명":"동암아구해물탕","업태":"한식","연번":9,"전화번호":"032-435-0233","지정메뉴":"해물찜,해물탕"},{"소재지":"인천광역시 부평구 부흥로257-7(부평동)","업소명":"들내음 들깨칼국수","업태":"한식","연번":10,"전화번호":"032-515-4151","지정메뉴":"팥칼국수"}],"matchCount":67,"page":1,"perPage":10,"totalCount":67}
let data = response.data
let html = `<table>
                <tr>
                    <th>업소명</th> <th>소재지</th> <th>지정메뉴</th>
                    <th>전화번호</th> <th>업대</th>
                </tr>`
for(let i = 0; i <= data.length - 1; i++){
    let 맛집객체 = data[i];
    html += `<tr>
                <td> ${ 맛집객체.업소명 } </td>
                <td> ${ 맛집객체.소재지 } </td>
                <td> ${ 맛집객체.지정메뉴 } </td>
                <td> ${ 맛집객체.전화번호 } </td>
                <td> ${ 맛집객체.업태 } </td>
            </tr>`
}html += `</table>`
document.querySelector('div').innerHTML = html