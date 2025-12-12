import rdFile from "../rdFile.ts";

const data = await rdFile("day7/data.txt");

if (typeof data !== "undefined") {
  let totalSplits = 0;
  const rows = data.split("\r\n").map((row) => row.split(""));
  const activeBeams = new Set<number>([rows[0].indexOf("S")]);

  for (let row = 1; row < rows.length; row++) {
    for (let col = 0; col < rows[0].length; col++) {
      if (rows[row][col] === "^" && activeBeams.has(col)) {
        activeBeams.delete(col);
        if (col - 1 >= 0) {
          activeBeams.add(col - 1);
        }
        if (col + 1 <= rows.length - 1) {
          activeBeams.add(col + 1);
        }
        totalSplits++;
      }
    }
  }

  console.log(totalSplits);
}
