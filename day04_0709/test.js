let gamestart = 1
let player1 = Number(prompt("플레이어1 차례")); let p1_board = ["","","","","","","","",""]
const 승리조건 = 
[[0, 1, 2], [3, 4, 5], [6, 7, 8],    // 가로 승리조건
[0, 3, 6], [1, 4, 7], [2, 5, 8],     // 세로 승리조건
[0, 4, 8], [2, 4, 6]]                //대각선 승리 조건
let board = ["","","","","","","","",""]

if(player1 == 0 || player1 == 1 || player1 == 2 || player1 == 3 || player1 == 4 || player1 == 5 || player1 == 6 || player1 == 7|| player1 == 8 )
    {console.log(`${board[player1]='O'}`); console.log(board); p1_board.push(player1); 
        if(승리조건.includes(p1_board) == 1)
            {console.log('승리'); gamestart = 0}
    }
else if(gamestart = 1){
    let player2 = Number(prompt("플레이어2 차례")); let p2_board = ["","","","","","","","",""];
    if(player2 == 0 || player2 == 1 || player2 == 2 || player2 == 3 || player2 == 4 || player2 == 5 || player2 == 6 || player2 == 7|| player2 == 8){
        console.log(`${board[player2]='X'}`); console.log(board); p2_board.push(player2); 
        if(승리조건.includes(p2_board) == 1){
            console.log('승리'); gamestart = 0}
    }
}
else if(gamestart = 1){
    let player1 = Number(prompt("플레이어1 차례")); let p1_board = ["","","","","","","","",""];
    if(player1 == 0 || player1 == 1 || player1 == 2 || player1 == 3 || player1 == 4 || player1 == 5 || player1 == 6 || player1 == 7|| player1 == 8){
        console.log(`${board[player1]='X'}`); console.log(board); p1_board.push(player2); 
        if(승리조건.includes(p1_board) == 1){
            console.log('승리'); gamestart = 0}
    }
}
else if(gamestart = 1){
    let player2 = Number(prompt("플레이어2 차례")); let p2_board = ["","","","","","","","",""];
    if(player2 == 0 || player2 == 1 || player2 == 2 || player2 == 3 || player2 == 4 || player2 == 5 || player2 == 6 || player2 == 7|| player2 == 8){
        console.log(`${board[player2]='X'}`); console.log(board); p2_board.push(player2); 
        if(승리조건.includes(p2_board) == 1){
            console.log('승리'); gamestart = 0}
    }
}
else if(gamestart = 1){
    let player1 = Number(prompt("플레이어1 차례")); let p1_board = ["","","","","","","","",""];
    if(player1 == 0 || player1 == 1 || player1 == 2 || player1 == 3 || player1 == 4 || player1 == 5 || player1 == 6 || player1 == 7|| player1 == 8){
        console.log(`${board[player1]='X'}`); console.log(board); p1_board.push(player2); 
        if(승리조건.includes(p1_board) == 1){
            console.log('승리'); gamestart = 0}
    }
}
else if(gamestart = 1){
    let player2 = Number(prompt("플레이어2 차례")); let p2_board = ["","","","","","","","",""];
    if(player2 == 0 || player2 == 1 || player2 == 2 || player2 == 3 || player2 == 4 || player2 == 5 || player2 == 6 || player2 == 7|| player2 == 8){
        console.log(`${board[player2]='X'}`); console.log(board); p2_board.push(player2); 
        if(승리조건.includes(p2_board) == 1){
            console.log('승리'); gamestart = 0}
    }
}
else if(gamestart = 1){
    let player1 = Number(prompt("플레이어1 차례")); let p1_board = ["","","","","","","","",""];
    if(player1 == 0 || player1 == 1 || player1 == 2 || player1 == 3 || player1 == 4 || player1 == 5 || player1 == 6 || player1 == 7|| player1 == 8){
        console.log(`${board[player1]='X'}`); console.log(board); p1_board.push(player2); 
        if(승리조건.includes(p1_board) == 1){
            console.log('승리'); gamestart = 0}
    }
}
else if(gamestart = 1){
    let player2 = Number(prompt("플레이어2 차례")); let p2_board = ["","","","","","","","",""];
    if(player2 == 0 || player2 == 1 || player2 == 2 || player2 == 3 || player2 == 4 || player2 == 5 || player2 == 6 || player2 == 7|| player2 == 8){
        console.log(`${board[player2]='X'}`); console.log(board); p2_board.push(player2); 
        if(승리조건.includes(p2_board) == 1){
            console.log('승리'); gamestart = 0}
    }
}
else if(gamestart = 1){
    let player1 = Number(prompt("플레이어1 차례")); let p1_board = ["","","","","","","","",""];
    if(player1 == 0 || player1 == 1 || player1 == 2 || player1 == 3 || player1 == 4 || player1 == 5 || player1 == 6 || player1 == 7|| player1 == 8){
        console.log(`${board[player1]='X'}`); console.log(board); p1_board.push(player2); 
        if(승리조건.includes(p1_board) == 1){
            console.log('승리'); gamestart = 0}
    }
}
else if(gamestart = 1){
    let player2 = Number(prompt("플레이어2 차례")); let p2_board = ["","","","","","","","",""];
    if(player2 == 0 || player2 == 1 || player2 == 2 || player2 == 3 || player2 == 4 || player2 == 5 || player2 == 6 || player2 == 7|| player2 == 8){
        console.log(`${board[player2]='X'}`); console.log(board); p2_board.push(player2); 
        if(승리조건.includes(p2_board) == 1){
            console.log('승리'); gamestart = 0}
    }
}