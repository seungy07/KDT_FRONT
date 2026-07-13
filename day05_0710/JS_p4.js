/*
//문제1: 배열에서 최댓값 찾기
let numbers = [23, 5, 67, 12, 88, 34]
let max = 0
for(let index = 0; index <= numbers.length -1; index++){
    if( max < numbers[index] ){ max = numbers[index] }
}console.log(`가장 큰 수는 ${max}`)

//문제2 별찍기 **  ??
for(let i = 5; i >= 1; i--){
    let 별 = "";
    for(let a = 1; a >=5; a++){
        별 += "*" ;
    }console.log(별)
}

//문제3: 배열에서 특정 문자 찾기
//다음 사용자 이름 배열에서 이름에 '솔' 이라는 글자가 들어간 첫 번째 사용자를 찾으면, 해당 사용자의 이름을 출력하고 반복문을 종료하시오.
let userNames = ['김하준', '이서아', '박솔민', '최도윤']
for(let i = 0; i <= userNames.length - 1; i++){
    if(userNames[i].includes('솔')){ console.log(`솔이 들아간 이름은 ${userNames[i]}`); break }
    else{console.log('들어간 이름이 없습니다')}
}

//문제 4: 2차원 배열의 모든 요소 출력하기
//다음과 같은 2차원 배열(좌석표)이 있습니다. 중첩 for 반복문을 사용하여 모든 좌석의 값을 순서대로 출력하시오.
let seatLayout = [['A1', 'A2', 'A3'], ['B1', 'B2', 'B3'], ['C1', 'C2', 'C3']]
for(let a = 0 ; a <= seatLayout.length - 1; a++){
    for( let b = 0 ; b <= seatLayout[a].length - 1; b++){
        console.log(seatLayout[a][b])
    }
}

//문제 5: 배열의 중복 요소 제거하기 // **중복 인지 확인
//주어진 배열에서 중복된 요소를 제거하고, 중복 없는 새로운 배열을 만들어 출력하시오.
let numbers = [1, 5, 2, 3, 5, 1, 4, 2]
for(let i = 0; i <= numbers.length-1; i++){
    for(let j = i +1; j <= numbers.length - 1; j++){
        if(numbers[i] == numbers[j]){numbers.splice(j,1);
            console.log(numbers)
        }
    }
}console.log(numbers)
*/
//문제 6: 버블 정렬 (Bubble Sort) 구현하기
//주어진 숫자 배열을 '버블 정렬' 알고리즘을 이용하여 오름차순으로 정렬하고, 최종 정렬된 배열을 출력하시오.
let numbers = [5, 3, 4, 1, 2]
for(let i = 0; i <= numbers.length - 1; i++){
    if(numbers[i] >= numbers[i + 1] ){
        let temp =  numbers[i]; // temp = 5
        numbers[i] = numbers[i + 1]; //i = 3
        numbers[i + 1] = temp; // i + 1 = 5
    }else{console.log(numbers)}
}

3 5 4 1 2
3 4 5 1 2
3 4 1 5 2
3 4 1 2 5


/* 풀이 17 , 4, 8
수1 -> 수2 비교  더 크면 자리 바꾸기(스왑)
수1 -> 수3 비교 더 크면 자리 바꾸기
수 마다 두번씩 비교
if( 수1 > 수2 ){  //오름차순이 아닌 내림차순이면 부호만 반대로
    let temp = 수1 // 두 변수간의 값 스왑 또는 교체를 하기 위한 임시 저장소
    수1 = 수2    // 수1 = 4   ,  스왑하기위해 임시 변수가 필요
    수2 = temp;   // 수2 = 17
}
if( 수1 > 수3 ){ let temp = 수1; 수1=수3; 수3=temp; }
if( 수2 > 수3 ){ let temp = 수2; 수2=수3; 수3=temp; }
console.log(`${수1}${수2}${수3}`)
*/

