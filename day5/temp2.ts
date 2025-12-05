import rdFile from "../rdFile.ts";

const data = await rdFile("day5/sample-data-a.txt");

function parseRange(range: string): [number, number] {
  const minmax = range.split("-");
  return [+minmax[0], +minmax[1]];
}

//* Can't have an array with length > 2^32 - 1
if (typeof data !== "undefined") {
  const [ranges, ids] = data.split("\r\n\r\n").map((str) => str.split("\r\n"));
  let testIds = Array(Math.max(...ids.map(Number)))
    .fill(0)
    .map((_, i) => i + 1);
  // console.log(testIds);
  let validIds = new Set();

  for (let i = 0; i < ranges.length; i++) {
    const [min, max] = parseRange(ranges[i]);
    // console.log(`For i value ${i}, min = ${min} and max = ${max}`);

    validIds = new Set([
      ...validIds,
      ...testIds
        .slice(min, max + 1)
        .filter((num) => typeof num === "number" && num > 0),
    ]);

    testIds = testIds.map((id) => (id < min || id > max ? -1 : id));
  }

  //? Sample should return 3
  console.log(validIds.size);
}
