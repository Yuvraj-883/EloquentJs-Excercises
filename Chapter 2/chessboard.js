function printChessBoard(n){
    let chessBoard = "";
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            chessBoard+= (i+j)%2===0? '#': ' '; 
 
        }
        chessBoard+='\n';
    }
    console.log(chessBoard);
    
}

printChessBoard(8); 

