import rdFile from "../rdFile.ts";

const data = await rdFile("day6/data.txt");

function parseRow(row: string) {
  return [...row.matchAll(/\d+/g)].map(Number);
}

// Iterate RTL w/ columns again
// Split each column again into digit columns
// Re-iterate RTL and apply operator to all digit positions in same column
// Iterate over string rows and check if all characters in column are whitespace?

if (typeof data !== "undefined") {
  let total = 0;
  const rows = data.split("\r\n");
  console.log(rows);

  const numStore: number[] = [];
  //? i = column, j = row
  // Iterating right-to-left, then top-to-bottom
  for (let i = rows[0].length - 1; i >= 0; i--) {
    let num = "";

    for (let j = 0; j < rows.length; j++) {
      if (j === rows.length - 1 && rows[j][i] === " " && num !== "") {
        numStore.push(+num);
      }
      if (rows[j][i] === " ") continue;
      if (rows[j][i] === "+") {
        numStore.push(+num);
        console.log(numStore);
        console.log("+");
        total += numStore.reduce((a, b) => a + b, 0);
        numStore.splice(0);
      } else if (rows[j][i] === "*") {
        numStore.push(+num);
        console.log(numStore);
        console.log("*");
        total += numStore.reduce((a, b) => a * b, 1);
        numStore.splice(0);
      } else {
        num += rows[j][i];
      }
    }

    // if (num !== "") {
    //   numStore.push(+num);
    // }
  }

  //? Sample should return 4277556
  console.log(total);
}
