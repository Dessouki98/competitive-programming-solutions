let input = '';

process.stdin.on('data', (chunk) => {
    if (chunk.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += chunk;
});

process.stdin.on('end', () => {
    const lines = input.trim().split('\n')
        .slice(1, input.length + 1)
        .map(word => word.replace(/\r/g, ''));
    let groups = 1;
    for (let i = 0; i < lines.length - 1; i++) {
        if (lines[i] !== lines[i + 1]) {
            groups++
        }

    }
    console.log(groups);
});
