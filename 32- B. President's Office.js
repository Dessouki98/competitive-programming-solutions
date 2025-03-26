let input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})

process.stdin.on("end", () => {
    let [inputs, ...matrix] = input.split("\n");
    let [n, m, presdentialLetter] = inputs.split(" ").filter(x => x !== " ");
    matrix = matrix.map((row) => row.split('').filter(x => x !== "\r"));
    matrix.pop()
    console.log(solveUsingDFS(matrix, Number(n), Number(m), presdentialLetter.trim()));
})

function solveUsingBFS(matrix, rows, columns, presdentialLetter) {
    // in the BFS it is queue because we take it level after level
    let queue = [];
    // need to track which points are visited
    let visited = new Set()
    // we need only the starting point then we can stop.

    let foundStart = false
    //find the starting point

    for (let i = 0; i < rows && !foundStart; i++) {
        for (let j = 0; j < columns && !foundStart; j++) {
            if (matrix[i][j] === presdentialLetter) {
                // This form is easy to distrust latter:
                queue.push([i, j]);
                foundStart = true;
                visited.add(`${i},${j}`);
            }
        }
    }
    // let figure out the surrounding points to be able to do quickly some math.
    const postions = {
        // INFORM OF ROWS,Columns
        left: [0, -1],
        right: [0, 1],
        top: [-1, 0],
        bottom: [1, 0],
    }
    //set to store neighbors one time.
    let neighbors = new Set();
    //now as long as the qeue still not empty we need to check all neighbours if they are pl or just another colleges.
    while (queue.length > 0) {
        // chile for this pl letter if the neigbours, but lets see if valid.
        let [row, col] = queue.shift();
        for (const entry of Object.entries(postions)) {
            let validRow = row + entry[1][0];
            let validCol = col + entry[1][1];
            if (validRow >= 0 && validRow < rows && !visited.has(`${validRow},${validCol}`)) {
                if (validCol >= 0 && validCol < columns && !visited.has(`${validRow},${validCol}`)) {
                    if (matrix[validRow][validCol] === presdentialLetter) {
                        queue.push([validRow, validCol]);

                    } else if (matrix[validRow][validCol] !== ".") {
                        neighbors.add(matrix[validRow][validCol]);
                    }
                    visited.add(`${validRow},${validCol}`);
                }
            }
        }
    }
    return neighbors.size;
}

function solveUsingDFS(matrix, rows, columns, presdenstialLetter) {
    const postions = {
        left: [0, -1],
        right: [0, 1],
        top: [-1, 0],
        bottom: [1, 0],
    }
    let startFound = false;
    let visited = new Set();
    let startPoint;
    // there will be no deputies here we will always go in the depth as soon as we find One; but first lets find the
    // starting point.
    for (let i = 0; i < rows && !startFound; i++) {
        for (let j = 0; j < columns && !startFound; j++) {
            if (matrix[i][j] === presdenstialLetter) {
                startFound = true;
                startPoint = [i, j]
            }
        }
    }
    let deputies = new Set();
    let is = dfs(startPoint[0], startPoint[1], postions, visited, rows, columns, matrix, presdenstialLetter, deputies);
    return is;
}

function dfs(positionR, positionCol, movements, visited, numOfRows, numOfCols, matrix, presdentialLetter, deputies) {
    // Base step if already in visited then reutrn.
    if (visited.has(`${positionR},${positionCol}`)) {
        return
    }
    visited.add(`${positionR},${positionCol}`);

    // now we go recursive for each possible directions.
    for (const movement of Object.entries(movements)) {
        let posR = positionR + movement[1][0];
        let posCol = positionCol + movement[1][1];
        if (posR >= 0 && posR < numOfRows && !visited.has(`${posR},${posCol}`)) {
            if (posCol >= 0 && posCol < numOfCols && !visited.has(`${posR},${posCol}`)) {
                if (matrix[posR][posCol] === presdentialLetter) {
                    dfs(posR, posCol, movements, visited, numOfRows, numOfCols, matrix, presdentialLetter, deputies);
                } else if (matrix[posR][posCol] !== ".") {
                    deputies.add(matrix[posR][posCol]);
                }
            }
        }
    }
    return deputies.size;
}