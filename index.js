// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ];

//const year = record.find(superbowlWin).year;

function superbowlWin(record) {
    const result = record.find(obj => obj.result === "W");
    return (result ? result.year : undefined);
}

console.log(year);

//const superbowlWin = record.find(result === "W");
//console.log(year)