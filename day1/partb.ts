import rdFile from "../rdFile.ts";

const data = await rdFile("day1/data.txt");
if (typeof data !== "undefined") {
  const cmds: string[] = data.split("\n");
  let dialPos = 50;
  let zeros = 0;

  cmds.forEach((cmd) => {
    const [operator, operand] = [cmd.substring(0, 1), cmd.substring(1)];
    // loop through each increment/decrement individually - less efficient but easier to code imho
    for (let i = 0; i < +operand; i++) {
      if (operator === "L") {
        dialPos = (dialPos - 1 + 100) % 100;
      } else {
        dialPos = (dialPos + 1) % 100;
      }

      // if dial hits a 0 keep count of it
      if (dialPos === 0) {
        zeros++;
      }
    }
  });

  // Answer < 6707 and is not 6085
  console.log(zeros);
}

// R48 --> 98
//* R2 --> 100 --> 0
// R29 --> 29
//* L38 --> -9 --> 91
// L3 --> 88
//* R50 --> 138 --> 38
