let inputData = '';

process.stdin.on('data', (chunk) => {
    // Accumulate all chunks of data
    inputData += chunk;
});

process.stdin.on('end', () => {
    // Split the accumulated input by line
    const lines = inputData.trim().split('\n');

    // Process each line
    lines.forEach(line => {
        let [lWeight, bWeight] = line.trim().split(" ").map(Number);

        let year = 0;

        // Calculate the number of years
        while (lWeight <= bWeight) {
            lWeight *= 3;
            bWeight *= 2;
            year++;
        }

        // Print the result for each pair of weights
        console.log(year);
    });
});
