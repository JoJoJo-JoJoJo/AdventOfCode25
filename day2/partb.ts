import rdFile from "../rdFile.ts";

function parseRangeInc(str: string) {
  return str.split("-").map(Number);
}

function isInvalidNum(id: string) {
  return /^(\d+)\1+$/.test(id);
}

const data = await rdFile("day2/data.txt");
if (typeof data !== "undefined") {
  const ranges: number[][] = data.split(",").map((str) => parseRangeInc(str));
  let count = 0;

  for (const [low, high] of ranges) {
    for (let num = low; num <= high; num++) {
      if (isInvalidNum(num.toString())) {
        count += num;
      }
    }
  }

  // Will be < 46769308530
  console.log(count);
}

//* Ex. 1 --> 3535333552-3535383752
// Will match on "35 35 35 35 35" and also "35353 35353"

// const numStr = num.toString();
// let matchStr: string = "";

// // min. 2 repeats --> only need to match w/ half of number
// for (let j = 0; j < numStr.length / 2; j++) {
//   matchStr = numStr.slice(0, j + 1);

//   const matches = numStr.matchAll(RegExp(matchStr, "g")) ?? [];

//   // if length of number being matched * no. of matches == length of original number
//   if (matchStr.length * [...matches].length === numStr.length) {
//     count += +numStr;
//     break;
//     // console.log(numStr);
//   }
// }
