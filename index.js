// code your solution here
const record = [
    {Year: "2020", result: "W"},
    {Year: "2021", result: "L"},
    {Year: "2022", result: "D"}
]

function superbowlWin (record) {
    const result = record.find(record => record.result === "W");
    return !!result ? result.year : undefined;
} 