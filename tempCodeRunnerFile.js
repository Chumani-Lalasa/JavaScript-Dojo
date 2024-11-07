process.stdin.on('data', (data) => {
    let input = data.toString().split('\n');
    let size = parseInt(input[0].trim());
    let nums = input[1].trim().split(" ").map(Number);
    let sumVal = findMinSum(nums);
    console.log(sumVal);
})