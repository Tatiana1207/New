// Создаем функцию для бросания кубика
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Генерируем случайное число от 1 до 6
}

// Функция для игры в кубики
function playGame() {
    var player1Sum = 0;
    var player2Sum = 0;

    // Каждый игрок бросает кубик по очереди по три раза
    for (var i = 0; i < 3; i++) {
        player1Sum += rollDice();
        player2Sum += rollDice();
    }

    // Определяем победителя
    if (player1Sum > player2Sum) {
        return "Победил Игрок 1!";
    } else if (player2Sum > player1Sum) {
        return "Победил Игрок 2!";
    } else {
        return "Ничья!";
    }
}

// Запускаем игру
console.log(playGame());