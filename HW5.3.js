// Функция для разбиения числа на заданное количество рандомных чисел
function splitNumber(number, parts, precision) {
    var result = [];
    var sum = 0;

    for (var i = 0; i < parts - 1; i++) {
        var random = Math.random() * number * 0.9; // Генерируем рандомное число
        result.push(parseFloat(random.toFixed(precision))); // Ограничиваем количество знаков после запятой
        sum += result[i];
    }

    result.push(parseFloat((number - sum).toFixed(precision))); // Добавляем последнее число
    return result;
}

// Пример использования
console.log(splitNumber(4.55, 5.20, 5.25));