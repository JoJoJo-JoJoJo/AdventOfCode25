import rdFile from "../rdFile.ts";

const data = await rdFile("day6/sample-data-a.txt");

function parseRow(row: string) {
  return [...row.matchAll(/\d+/g)].map(Number);
}

if (typeof data !== "undefined") {
  let total = 0;
  const rows = data.split("\r\n");
  console.log(rows);
  const operands: number[] = parseRow(rows[0]);
  for (const row in rows) {
  }

  const operators: ("+" | "*")[] = [];

  //? Sample should return 4277556
  console.log(total);
}
