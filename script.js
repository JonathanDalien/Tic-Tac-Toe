// Creating Gameboard
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""]
    return { board };
})();
//--

const message = document.querySelector(".message")
message.textContent = "Player X's turn"

// Creating Players

const player = (sign) => {
    return { sign };
}
const user1 = player("X");
const user2 = player("O");
let sign = "";

// --

const game = (() => {
    const { board } = gameBoard;
    const marker = (e) => {
        console.log(e)
        const target = board[e.target.dataset.index];
        if (target === "X" || target === "O") {
            return;
        }
        if (sign === "") {
            sign = user1.sign;
            if (target === "") {
                board.splice(e.target.dataset.index, 1, sign);
                console.log(board)
                message.textContent = "Player O's turn"
            }
        } else if (sign === user1.sign) {
            e.target.classList.toggle("color")
            sign = user2.sign;
            message.textContent = "Player X's turn"
            if (target === "") {
                board.splice(e.target.dataset.index, 1, sign);
                console.log(board)
            }
        } else if (sign = user2.sign) {
            sign = user1.sign;
            if (target === "") {
                board.splice(e.target.dataset.index, 1, sign);
                console.log(board)
                message.textContent = "Player O's turn"
            }
        }
        const { render } = renderMarker;
        render();
        checkWinner();
    }

    const fields = document.querySelectorAll(".field");

    fields.forEach((field) => {
        field.addEventListener("click", marker)
    })

    function removeClick() {
        fields.forEach((field) => {
            field.removeEventListener("click", marker)
        })
    }

    function checkWinner() {
        if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
            removeClick();
            message.textContent = `Winner is Player ${sign}!`
        }
        if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
            removeClick();
            message.textContent = `Winner is Player ${sign}!`
        }
        if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
            removeClick();
            message.textContent = `Winner is Player ${sign}!`
        }
        if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
            removeClick();
            message.textContent = `Winner is Player ${sign}!`
        }
        if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
            removeClick();
            message.textContent = `Winner is Player ${sign}!`
        }
        if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
            removeClick();
            message.textContent = `Winner is Player ${sign}!`
        }
        if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
            removeClick();
            message.textContent = `Winner is Player ${sign}!`
        }
        if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
            removeClick();
            message.textContent = `Winner is Player ${sign}!`
        }
        if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
            removeClick();
            message.textContent = `its a draw!`
        }
    }
})();

restartBtn = document.querySelector(".btn");
restartBtn.addEventListener("click", () => {
    location.reload();
})

const renderMarker = (() => {
    const { board } = gameBoard;

    function render() {
        for (let i = 0; i < board.length; i++) {
            const gameField = document.getElementById(`${i}`);
            gameField.textContent = board[i]
        }
    }
    return { render }
})();

