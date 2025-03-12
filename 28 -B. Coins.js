let input = "";
process.stdin.on("data", (data) => {
    if (data.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += data.toString()
})

process.stdin.on("end", () => {
    let connection = input.split("\n").map(connection => connection.trim()).filter(x => x !== "");
    let AdjGraph = buildConnectedGraph(connection);
    console.log(topLogicalSort(AdjGraph));
})

function buildConnectedGraph(connections) {
    let graph = new Map()
    Array("A", "B", "C").forEach(node => {
        graph.set(node, new Set())
    })
    for (let connection of connections) {
        let [node1, sign, node2] = connection.split("")
        let lighter = sign === ">" ? node2 : node1;
        let heavier = sign === "<" ? node2 : node1;
        graph.get(lighter).add(heavier)
    }
    return graph;
}

function buildInDegree(graph) {
    let inDegree = {A: 0, B: 0, C: 0};
    graph.forEach((neighbors, node) => {
        for (let neighbor of neighbors) {
            inDegree[neighbor] += 1;
        }
    });
    return inDegree;
}

// Toplogical search takes the lowest inDegree as minimum add it to list and makes minus from neighbors checks if sort possible

function topLogicalSort(graph) {
    const result = [];
    let inDegree = buildInDegree(graph);
    for (let i = 0; i < graph.size; i++) {
        // add zeroInDegree
        let zeroIn = [];
        for (const [node, degree] of Object.entries(inDegree)) {
            if (degree === 0) {
                zeroIn.push(node);
            }
        }
        if (zeroIn.length !== 1) {
            return "Impossible"
        }
        let smallest = zeroIn.pop();
        result.push(smallest);
        //decrement from neighbors
        for (let neighbour of graph.get(smallest)) {
            inDegree[neighbour] -= 1;
        }
        inDegree[smallest] = -100
    }
    return result.join("");
}