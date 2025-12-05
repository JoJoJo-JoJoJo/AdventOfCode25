import rdFile from "../rdFile.ts";

const data = await rdFile("day5/data.txt");

function parseRange(range: string): [number, number] {
  const minmax = range.split("-");
  return [+minmax[0], +minmax[1]];
}

//* Can't have an array with length > 2^32 - 1
if (typeof data !== "undefined") {
  const [ranges, ids] = data.split("\r\n\r\n").map((str) => str.split("\r\n"));
  let count = 0;

  for (const id of ids) {
    for (let j = 0; j < ranges.length; j++) {
      const [min, max] = parseRange(ranges[j]);
      if (+id < min || +id > max) continue;

      count++;
      break;
    }
  }

  //? Sample should return 3
  // Answer > 521
  console.log(count);
}
