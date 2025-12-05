import rdFile from "../rdFile.ts";

const data = await rdFile("day5/sample-data-b.txt");

function parseRange(range: string): [number, number] {
  const minmax = range.split("-");
  return [+minmax[0], +minmax[1]];
}

//* Can't have an array with length > 2^32 - 1
if (typeof data !== "undefined") {
  let ranges = data
    .split("\r\n\r\n")[0]
    .split("\r\n")
    .map((range) => parseRange(range))
    .sort((a, b) => a[0] - b[0]);
  // console.log(ranges);

  for (let i = 0; i < ranges.length; i++) {
    const [minI, maxI] = ranges[i];
    for (let j = 0; j < ranges.length; j++) {
      if (i === j) continue;
      const [minJ, maxJ] = ranges[j];

      // When a a pair of non-disjoint ranges are found, combine them and reset loop
      if (maxI < minJ || minI > maxJ) continue;

      ranges = ranges.filter(
        (range) => range !== ranges[i] && range !== ranges[j]
      );
      ranges.push([Math.min(minI, minJ), Math.max(maxI, maxJ)]);
      ranges.sort((a, b) => a[0] - b[0]);
      i = 0;
      j = 0;
    }
  }

  //? Sample should return 14
  console.log(ranges);
  console.log(ranges.reduce((acc, cur) => acc + (cur[1] - cur[0] + 1), 0));
}
