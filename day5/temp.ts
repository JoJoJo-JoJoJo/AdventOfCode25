import rdFile from "../rdFile.ts";

const data = await rdFile("day5/data.txt");

function parseRange(range: string): [number, number] {
  const minmax = range.split("-");
  return [+minmax[0], +minmax[1]];
}

//* Can't have an array with length > 2^32 - 1
if (typeof data !== "undefined") {
  const [ranges, ids] = data.split("\r\n\r\n").map((str) => str.split("\r\n"));
  // let maxIdValue = Math.max(...ids.map(Number));
  let uniqueIds: Set<number> = new Set();
  let count = 0;

  for (let i = 0; i < ranges.length; i++) {
    const [min, max] = parseRange(ranges[i]);

    for (let j = min; j < max + 1; j++) {
      uniqueIds.add(j);
    }
  }

  for (const id of ids) {
    if (uniqueIds.has(+id)) {
      count++;
    }
  }

  console.log(count);
}
