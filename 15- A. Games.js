let input = ""
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data
})
process.stdin.on("end", () => {

    let games = input.trim().toString().split("\n").slice(1).map(game =>
        game.replace(/\r/, "")
    )
    let gamesHome = []
    let gameAway = []
    for (let i = 0; i < games.length; i++) {
        let game1 = games[i].split(" ");
        for (let j = i + 1; j < games.length; j++) {
            let game2 = games[j].split(" ");
            if (game1 !== game2) {
                gamesHome.push(game1[0] + "vs" + game2[1]);
                gameAway.push(game1[1] + "vs" + game2[0]);
            }
        }
    }
    let counter = 0
    console.log(gameAway)
    console.log(gamesHome);
    gamesHome.forEach(game => {
        game = game.toString().split("vs")
        if (game[0] === game[1])
            counter++
    })
    gameAway.forEach(game => {
        game = game.toString().split("vs")

        if (game[0] === game[1])
            counter++
    })
    console.log(counter);
})