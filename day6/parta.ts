import rdFile from "../rdFile.ts";

const data = await rdFile("day6/data.txt");

function parseNumRow(row: string): number[] {
  const matches = row.matchAll(/\d+/g);
  if (typeof matches === undefined) return [];
  return [...matches].map(Number);
}

function parseStrRow(row: string): string[] {
  const matches = row.matchAll(/[+*]+/g);
  if (typeof matches === undefined) return [];
  return [...matches].map(String);
}

if (typeof data !== "undefined") {
  const rows = data.split("\r\n");

  const operands: number[][] = [];
  const operators: string[] = [];

  for (let i = 0; i < rows.length; i++) {
    if (i === rows.length - 1) {
      operators.push(...parseStrRow(rows[i]));
    } else {
      operands.push(parseNumRow(rows[i]));
    }
  }

  const runningTotals: number[] = new Array(operators.length).fill(0);

  for (let i = 0; i < operands.length; i++) {
    for (let j = 0; j < operators.length; j++) {
      if (i === 0) {
        runningTotals[j] = operands[i][j];
        continue;
      }
      if (operators[j] === "+") {
        runningTotals[j] += operands[i][j];
      } else if (operators[j] === "*") {
        runningTotals[j] *= operands[i][j];
      }
    }
  }

  //? Sample should return 4277556
  console.log(runningTotals.reduce((a, b) => a + b, 0));
}
