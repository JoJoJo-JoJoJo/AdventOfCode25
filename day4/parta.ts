import rdFile from "../rdFile.ts";

const data = await rdFile("day4/data.txt");

function countAdjPaperRolls(
  grid: string[][],
  rowInd: number,
  colInd: number
): number {
  let adjRolls = 0;

  for (let a = rowInd - 1; a <= rowInd + 1; a++) {
    for (let b = colInd - 1; b <= colInd + 1; b++) {
      if (a < 0 || b < 0 || a >= grid.length || b >= grid[0].length) continue;
      if (a === rowInd && b === colInd) continue;

      if (grid[a][b] === "@") {
        adjRolls++;
      }
    }
  }

  return adjRolls;
}

if (typeof data !== "undefined") {
  const grid = data.split("\r\n").map((str) => str.split(""));
  // console.log(grid);
  let noOfRolls: number = 0;

  grid.forEach((row, i) =>
    row.forEach((char, j) => {
      if (char === "@") {
        if (countAdjPaperRolls(grid, i, j) < 4) {
          noOfRolls++;
        }
      }
    })
  );

  // Sample should return 13
  console.log(noOfRolls);
}
