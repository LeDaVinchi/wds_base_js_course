const game = (count) => {
    while (count > 34) {
        console.log("Загаданное число меньше!");
        return count
    }
    while (count < 34) {
        console.log("Загаданное число больше!");
        return count
    }
    while (count === 34) {
        console.log("Вы угадали число!");
        return count
    }
}
(game(54));
