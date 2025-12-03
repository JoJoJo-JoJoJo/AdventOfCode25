import rdFile from "../rdFile.ts";

const data = await rdFile("day3/data.txt");
const numOfBatteries = 12;

/**
 *
 * @param digits The battery bank, at each stack layer just contains choices for that layer
 * @param colsRemaining The number of digit columns remaining - hitting 0 meets terminating condition
 * @returns The maximum number (joltage) that can be created
 */
function findMaxCombo(digits: number[], colsRemaining: number): number {
  if (colsRemaining === 1) {
    return Math.max(...digits);
  }

  const maxDigit = Math.max(
    ...digits.slice(0, digits.length - colsRemaining + 1)
  );
  const maxDigitIndex = digits.indexOf(maxDigit);

  return (
    maxDigit * Math.pow(10, colsRemaining - 1) +
    findMaxCombo(digits.slice(maxDigitIndex + 1), colsRemaining - 1)
  );
}

if (typeof data !== "undefined") {
  const banks: string[] = data.split("\r\n");
  // console.log(banks);
  let acc = 0;

  banks.forEach((bank: string) => {
    const digits: number[] = bank.split("").map(Number);
    // console.log(digits);
    let max = -1;

    for (let i = 0; i < digits.length - numOfBatteries + 1; i++) {
      const firstDigit = digits[i] * Math.pow(10, 11);
      const num = firstDigit + findMaxCombo(digits.slice(i + 1), 11);

      if (num > max) {
        max = num;
      }
    }

    acc += max;
  });

  //? Sample should be 3121910778619
  //! 3222333333365
  //! 3213021889619
  // 3121910778619
  console.log(acc);
}

// RECURSION (probably)
