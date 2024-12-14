let input = ""
process.stdin.on("data", chunk => {
    if (chunk.toString().trim() === "end") {
        process.stdin.emit("end")
    }
    input += chunk.toString()
})
process.stdin.on("end", () => {
    const [totalNumOfCakes, timeForKCakes, numOfCakesAtSameTime, timeBuildOven] = input.trim().split(" ").map(Number);
    const timeToFinishWithOneOven = Math.ceil(totalNumOfCakes / numOfCakesAtSameTime) * timeForKCakes;
    let baked = 0
    for (let i = 0; i + timeForKCakes <= timeBuildOven; i += timeForKCakes) {
        baked += numOfCakesAtSameTime
    }
    const timeToFinishWithTwoOven = timeBuildOven + Math.ceil(((totalNumOfCakes - baked) / numOfCakesAtSameTime) / 2) * timeForKCakes;
    if (timeToFinishWithTwoOven < timeToFinishWithOneOven) {
        console.log("YES")
    } else console.log("NO")
})
// Solve Using Functional Programming
const calculateTimeWithOneOven = (total_cakes_needed, time_per_baking_cycle, cakes_baked_per_cycle) => Math.ceil(total_cakes_needed / cakes_baked_per_cycle) * time_per_baking_cycle;

const calculateCakesDuringBuild = (time_per_baking_cycle, cakes_baked_per_cycle, buildTime) => {
    return Math.floor(buildTime / time_per_baking_cycle) * cakes_baked_per_cycle;
};

const calculateTimeWithTwoOvens = (total_cakes_needed, time_per_baking_cycle, cakes_baked_per_cycle, time_to_build_the_second_oven) => {
    const cakesByFirstOven = calculateCakesDuringBuild(time_per_baking_cycle, cakes_baked_per_cycle, time_to_build_the_second_oven);
    const remainingCakes = Math.max(0, total_cakes_needed - cakesByFirstOven);
    const additionalCycles = Math.ceil(remainingCakes / (2 * cakes_baked_per_cycle)); // Two ovens working together
    return time_to_build_the_second_oven + (additionalCycles * time_per_baking_cycle);
};

const isSecondOvenBeneficial = (total_cakes_needed, time_per_baking_cycle, cakes_baked_per_cycle, time_to_build_the_second_oven) => {
    const timeWithOneOven = calculateTimeWithOneOven(total_cakes_needed, time_per_baking_cycle, cakes_baked_per_cycle);
    const timeWithTwoOvens = calculateTimeWithTwoOvens(total_cakes_needed, time_per_baking_cycle, cakes_baked_per_cycle, time_to_build_the_second_oven);
    return timeWithTwoOvens < timeWithOneOven ? "YES" : "NO";
};

process.stdin.on("data", (chunk) => {
    const input = chunk.toString().trim();
    if (input === "end") {
        process.stdin.emit("end");
    } else {
        const [total_cakes_needed, time_per_baking_cycle, cakes_baked_per_cycle, time_to_build_the_second_oven] = input.split(" ").map(Number);
        console.log(isSecondOvenBeneficial(total_cakes_needed, time_per_baking_cycle, cakes_baked_per_cycle, time_to_build_the_second_oven));
    }
});
