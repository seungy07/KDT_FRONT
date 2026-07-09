let gamestart = 1
let board = ["","","","","","","","",""]

const 승리조건 = 
[[0, 1, 2], [3, 4, 5], [6, 7, 8],    // 가로 승리조건
[0, 3, 6], [1, 4, 7], [2, 5, 8],     // 세로 승리조건
[0, 4, 8], [2, 4, 6]]                //대각선 승리 조건

let player1 = Number(prompt("플레이어1 차례")); let p1_board = ["","","","","","","","",""]

if(player1 == 0 || player1 == 1 || player1 == 2 || player1 == 3 || player1 == 4 || player1 == 5 || player1 == 6 || player1 == 7|| player1 == 8 )
    {console.log(`${board[player1]='O'}`); console.log(board); p1_board.push(player1); 
        if(승리조건.includes(p1_board) == true)
            {console.log('승리'); gamestart = 0}
            else if(gamestart = 1){let player2 = Number(prompt("플레이어2 차례")); let p2_board = ["","","","","","","","",""];
            if(player2 == 0 || player2 == 1 || player2 == 2 || player2 == 3 || player2 == 4 || player2 == 5 || player2 == 6 || player2 == 7|| player2 == 8)
                {console.log(`${board[player2]='X'}`); console.log(board); p2_board.push(player2); 
                    if(승리조건.includes(p2_board) == true)
                        {console.log('승리'); gamestart = 0}
                        else if(gamestart = 1)
                            {let player2 = Number(prompt("플레이어2 차례")); let p2_board = ["","","","","","","","",""];
                                if(player2 == 0 || player2 == 1 || player2 == 2 || player2 == 3 || player2 == 4 || player2 == 5 || player2 == 6 || player2 == 7|| player2 == 8)
                                    {console.log(`${board[player2]='O'}`); console.log(board); p2_board.push(player2); 
                                        if(승리조건.includes(p2_board) == true){console.log('승리'); gamestart = 0}
                                    }
                            }

                }
            }
    }
    /* 
    1. 보드판을 배열로 만들고 ( 3x3 배열만드는거 모름 )
    2. 플레이어1이 보드판 배열의 위치를 인덱스 번호로 선택하다.
    3. 선택한 인덱스의 번호의 해당하는 배열의 자료가 O로 바뀐다
    4. 바뀐후 전체 보드판 확인시켜준다
    5. 선택한 번호를 다른 플레이어1전용 보드를 만들어 그대로 저장한다
    6. 그 전용보드는 승리조건과 비교한다
    7. 비교후  전용보드의 자료가 승리조건의 자료의 포함되면 플레이어1은 승리를 하고  게임스타터 0으로 바뀌어 게임이 끝난다.
    7-1 조건이 맞지 않으면 다음 플레이어 순서로 넘어간다. */