
/* 문제 1: prompt로 제품 정보 객체 만들기 */
/*
let 제품명 = prompt('제품명')
let 가격 = prompt('가격')
let 제조사 = prompt('제조사')
const product = { 제품명: '', 가격: '', 제조사: ''}
product.제품명 = 제품명
product.가격 = 가격
product.제조사 = 제조사
console.log(product)
*/

/*문제 2: prompt로 회원 가입 및 아이디 중복 확인 기능 구현  */
/*
const members = [
    { id: 'user1', password: 'pass1', name: '사용자1' },
    { id: 'user2', password: 'pass2', name: '사용자2' },
]
let member = { 
    id: prompt('아이디'),
    password: prompt('비밀번호'),
    name: prompt('이름')
}
let 중복여부 = false
for(let i = 0; i <= members.length -1; i++){
    if(members[i].id == member.id){
        console.log('이미 존재하는 아이디 입니다');
        중복여부 = true
        break;
    }
}if( 중복여부 == false){
    members.push(member)
    console.log(members)
}
*/

/* 문제 3: 객체 배열의 속성 값 평균 구하기
scores 배열에 담긴 모든 학생의 수학(math) 점수 평균을 계산하여 콘솔에 출력하시오. */
/*
const scores = [
    { name: 'A', math: 80, science: 92 },
    { name: 'B', math: 95, science: 88 },
    { name: 'C', math: 76, science: 78 } ]
let 수학총점 = 0;
for(let i = 0; i <= scores.length - 1; i++){
    수학총점 += scores[i].math
}console.log(수학총점/scores.length)
*/

/* 문제 4: 특정 조건을 만족하는 객체 찾기
products 배열에서 id가 3인 상품 객체를 찾아, 해당 객체 전체를 콘솔에 출력하시오. 일치하는 객체가 없으면 "상품을 찾을 수 없습니다."를 출력합니다. */
/*
const products = [
    { id: 1, name: '사과' },
    { id: 2, name: '바나나' },
    { id: 3, name: '포도' },
    { id: 4, name: '딸기' } ];
let 존재여부 = false
for(let i = 0; i <= products.length - 1; i++){
    if(products[i].id == 3){
        console.log(products[i]);
        존재여부 = true
    }
}if( 존재여부 != true){
    console.log('상품을 찾을 수 없습니다')
}
*/

/* 문제 5: 객체 배열 필터링하기
users 배열에서 isActive가 true인 사용자들만으로 구성된 새로운 배열 activeUsers를 만들고, 이 배열을 콘솔에 출력하시오. */
/*
const users = [
    { id: 1, name: '유저1', isActive: true },
    { id: 2, name: '유저2', isActive: false },
    { id: 3, name: '유저3', isActive: true },
    { id: 4, name: '유저4', isActive: false }];
let activeUsers = [  ]
for(let i = 0; i <= users.length - 1; i++){
    if(users[i].isActive == true){
        activeUsers.push(`id: ${users[i].id}, name: ${users[i].name}`)
    }
}console.log(activeUsers)
*/

/*문제 6: 객체 배열 데이터 변환하기
movies 배열에 있는 각 영화 객체에서 title 속성만 추출하여, 영화 제목들로만 이루어진 새로운 배열 movieTitles를 만들고 콘솔에 출력하시오. */
/*
const movies = [
    { title: '인셉션', director: '크리스토퍼 놀란' },
    { title: '기생충', director: '봉준호' },
    { title: '매트릭스', director: '워쇼스키 자매' }];
let movieTitles = [ ]
for(let i = 0; i <= movies.length - 1; i++){
    movieTitles.push(movies[i].title)
}console.log(movieTitles)
*/

/* 문제 7: 데이터 그룹화하기
다음 team 배열을 department를 기준으로 그룹화하여, 아래 result와 같은 형태로 만드시오. */
/*
const team = [
    { name: '철수', department: '개발팀' },
    { name: '영희', department: '기획팀' },
    { name: '민수', department: '개발팀' },
    { name: '지혜', department: '기획팀' }];
let 팀분류 = { 개발팀:[] , 기획팀:[] }
for(let i = 0; i <= team.length - 1; i++){
    if(team[i].department == '개발팀'){
        팀분류.개발팀.push(team[i].name)
    }
    if(team[i].department == '기획팀'){
        팀분류.기획팀.push(team[i].name)
    }
}console.log(팀분류)
*/

/*문제 8: 장바구니 총액 계산하기 */
/*
const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1 }];
const productsInfo = [
    { id: 1, price: 1000 },
    { id: 2, price: 5000 }, // 장바구니에 없는 상품
    { id: 3, price: 2500 }];
let 총결제 = 0
for(let i = 0; i <= productsInfo.length - 1; i++){
    for(let j = 0; j <= cart.length - 1; j++ ){
        if( cart[j].id == productsInfo[i].id){
            총결제 += ( cart[j].quantity * productsInfo[i].price )
        }
    }
}console.log(` 총 결제금액은 ${총결제}원`)
*/

/* 문제 9: 투표 결과 집계하기
다음 votes 배열은 투표 결과를 나타냅니다. 각 후보가 몇 표를 받았는지 집계하여, 후보의 이름이 키이고 득표수가 값인 객체를 만들어 콘솔에 출력하시오.*/
/*
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
}
let 득표수 = { A: Acount, B:Bcount, C:Ccount}
console.log(득표수)
*/

/*문제 10: 웹툰 평점 시각화하기
webtoons 배열의 데이터를 이용하여, 각 웹툰의 평점을 별(★, ☆)로 시각화하여 HTML에 출력하시오.
조건 1: 평점(rating)은 10점 만점입니다.
조건 2: 평점의 정수 부분만큼 꽉 찬 별(★)을, 10 - 정수 만큼 빈 별(☆)을 출력합니다. (예: 평점이 8.5이면 ★ 8개, ☆ 2개)
조건 3: HTML에 웹툰 제목과 변환된 별점을 한 줄씩 출력합니다. */
const webtoons = [
    { title: '나 혼자만 레벨업', rating: 9.8 },
    { title: '유미의 세포들', rating: 9.9 },
    { title: '전지적 독자 시점', rating: 9.7 }];
let html = ''
for(let i = 0; i <= webtoons.length - 1; i++){
    let rating = [];
    rating.push(parseInt(webtoons[i].rating))
}


/* HTML 출력 예시:
 나 혼자만 레벨업 ★★★★★★★★★☆
 유미의 세포들 ★★★★★★★★★☆
 전지적 독자 시점 ★★★★★★★★★☆
*/


// 문제11 : 공공데이터 포털 : 인천 부평구 맛집 현황 테이블 만들기

// [구현 조건]

// 1. 공공데이터 포털에서 '인천광역시 부평구_맛있는 집(맛집) 현황' 의 open API 신청하여 결과를 복사하여 'response' 변수에 저장하시오.

// let response = {}

// 2. response 객체 안의 data 배열을 반복문을 사용하여 순회합니다.

// 3. 각 동(행)의 정보를 표시할 HTML <table> 태그를 문자열로 만듭니다.

// 4. 테이블의 각 셀에는 '업 소 명', '세대수', '소재지', '지정메뉴', '전화번호','업태' 정보가 순서대로 포함되어야 합니다.

// 5. 최종적으로 완성된 HTML 테이블 문자열을 document.write() 사용하여 화면에 출력합니다.

// [ 공공데이터 open API 신청 ]

// 1. 공공데이터 포털 : https://www.data.go.kr

// 2. 회원가입/로그인

// 3. '부평구 맛집' 검색

// 4. '인천광역시 부평구_맛있는 집(맛집) 현황' Open API를 찾아 [활용신청] 버튼을 누르고, 절차에 따라 인증키를 발급받습니다.

// 5. 인증키 설정 ( Encoding , Decoding 순서대로 대입하여 설정 )

// 6. 인증키 설정 후 'API 목록' 에서 [Open Api 호출] 합니다.

// 7. **실행 결과(JSON)**를 전체 복사합니다. 

