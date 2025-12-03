import rdFile from "../rdFile.ts";

const data = await rdFile("day3/data.txt");
if (typeof data !== "undefined") {
  const banks: string[] = data.split("\r\n");
  // console.log(banks);
  let acc = 0;

  banks.forEach((bank: string) => {
    const digits: number[] = bank.split("").map(Number);
    // console.log(digits);
    let max = -1;

    for (let i = 0; i < digits.length - 1; i++) {
      for (let j = i + 1; j < digits.length; j++) {
        const num = digits[i] * 10 + digits[j];
        // console.log(`Num on outer loop ${i} is: ${num}`);

        if (num > max) {
          // console.log("New max!");
          max = num;
        }
      }
    }

    acc += max;
  });

  // Answer < 17437
  //? Sample should be 357
  console.log(acc);
}
