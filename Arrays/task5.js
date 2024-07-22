// 5. Data Filtering and Reporting

// -> Problem Statement:
// - Objective: Develop a tool to filter and report on specific data collected over time.
// - Tasks:
//   - Store collected data points in an array ("data").
//   - Implement filters based on criteria such as date range or value range.
//   - Calculate statistics (e.g., average, sum) on filtered data.
//   - Generate reports or summaries based on the processed data.

// Sample Data:
// - Data Points: [120, 80, 150, 100, 200, 90, 180]

// Output:
// Filtered Data: [120, 150, 200, 180]
// Average: 162.5

let dataPoints = [120, 80, 150, 100, 200, 90, 180];

function filterDataByValueRange(data, min, max) {
    return data.filter(value => value >= min && value <= max);
}

/* 
-> about filter function ;

    syntax : array.filter(callback(element, index, array), thisArg);
    callback: Function that tests each element of the array. It takes three arguments:

    element: The current element being processed in the array.
    index (optional): The index of the current element being processed in the array.
    array (optional): The array filter was called upon.
    thisArg (optional): Value to use as this when executing the callback.
*/

function averageData() {
    let average=0;
    for (const i in dataPoints ) {
        if(dataPoints[i] >= 100) {
            average += dataPoints[i];
        }
    }
    return (average/dataPoints.length);
}

function sumOfAllData() { 
    let sum=0;
    for (const i in dataPoints ) {
        if(dataPoints[i] >= 100) {
            sum += dataPoints[i];
        }
    }
    return sum;
}

function getReport() {
    console.log("Filtered Data:", filterDataByValueRange(dataPoints,100,300));
    console.log("Average:", averageData());
    console.log("Sum:", sumOfAllData());
}

getReport();
