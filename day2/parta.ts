import rdFile from "../rdFile.ts";

function parseRangeInc(str: string) {
  return str.split("-").map((str) => +str);
}

const data = await rdFile("day2/data.txt");
if (typeof data !== "undefined") {
  const ranges: number[][] = data.split(",").map((str) => parseRangeInc(str));
  let count = 0;

  for (const [low, high] of ranges) {
    for (let i = low; i <= high; i++) {
      const len = i.toString().length;
      if (len % 2 !== 0) continue;

      if (i.toString().slice(0, len / 2) === i.toString().slice(len / 2)) {
        count += i;
        i = high;
      }
    }
  }

  console.log(count);
}

const thing = "1188511885".matchAll(RegExp("11885", "g")) ?? [];
console.log([...thing].length);
