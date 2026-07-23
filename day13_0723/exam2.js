
/*
    QueryString : URL 웹 주소 상에 매개변수 사용( 도메인 주소 ? 이후)
        - 페이지 이동 간에 매개변수 값 전달, **주로 자료 식별자 또는 CSS 식별자**
        - URL ? 매개변수명 = 값 & 매개변수 = 값
        - 사용법
            1) new URLSearchParams( location.search ) : queryString 객체 반환
            2) .get( '매개변수명' ) : queryString 내 특정한 매개변수명의 값 반환

        new URLSearchParams( location.href ) : 현재 주소상 위치 반환

*/

// [1] JS에서 URL 정보 객체 호출
let url = new URLSearchParams( location.search );
console.log(url)
let name = url.get('name')  
console.log(name) // 링크1

// [2] 페이지 이동하는 방법
//1) <a href="URL?매개변수=값"> 링크 </>
let pcode = url.get('pcode')
let page = url.get( 'page')
console.log(pcode,page)

//2) location.href= "URL?매개변수=값" JS에서
function 링크함수(){
    location.href = "exam2.html?name=강호동" }


/*
    인터벌 : 특정한 주기에 따라 코드를 반복 실행
        - 사용법
            setInterval( 함수명, 주기 )
                * 함수명()에서 ()제외하고 넣기
                -> 밀리초(1/1000): 1000->1초, 반복주기
            clearInterval
*/
let value = 0;
function 증가함수(){
    value += 1
    document.querySelector('#box1').innerHTML = value
}
// [1] 특정한 함수를 주기에 따라 반복 실행
setInterval(증가함수, 1000)

function 시계함수(){
    let today = new Date() // 현재 날짜 /시간
    let hour = today.getHours() 
    let minute = today.getMinutes()
    let second = today.getSeconds()


    let time = `${hour} : ${minute} : ${second < 10 ? "0" + second:second}`  // 자릿수를 2자리고 맞출려면

    document.querySelector('#box2').innerHTML = time
}
setInterval(시계함수, 1000)

// [3] 인터벌 시작 / 종료
let time = 0;  // 현재 타이머 초 저장
let timeInter ; // 인터벌을 저장
function 타이머시작(){
    timeInter = setInterval(타이머함수, 1000)
}
function 타이머함수(){
    time++
    document.querySelector('#box3').innerHTML = time
}
function 타이머종료(){
    clearInterval(timeInter)
}