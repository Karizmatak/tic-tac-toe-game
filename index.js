    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let text = document.querySelector(".text");
    function clickButton(index) {
        let cells = document.querySelectorAll(".grid-item");
       

        if (board[index] === "" && !checkWinner()) {
            board[index] = currentPlayer;
            cells[index].innerText = currentPlayer;

            if (checkWinner()) {
                text.innerText = currentPlayer + " Kazandı!";
                setTimeout(() => { location.reload(); }, 1000)
                return;
            }

            currentPlayer = (currentPlayer === "X") ? "O" : "X";
        }
    }

    function checkWinner() {
      if(!board.includes("")){
        text.innerText = "Berabere!"
        setTimeout(() => { location.reload(); }, 1000)
      }
        const winPatterns = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8],
            [0, 4, 8], 
            [2, 4, 6]  
        ];

        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return board[a] !== "" && board[a] === board[b] && board[a] === board[c];
        });  
    }

