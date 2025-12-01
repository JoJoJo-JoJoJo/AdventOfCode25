import rdFile from "../rdFile.ts";

const data = await rdFile("day1/data.txt");
if (typeof data !== "undefined") {
  const cmds: string[] = data.split("\n");
  let dialPos = 50;
  let zeros = 0;

  cmds.forEach((cmd) => {
    const [operator, operand] = [cmd.substring(0, 1), cmd.substring(1)];

    if (operator === "R") {
      dialPos += Number(operand);
    } else if (operator === "L") {
      dialPos -= Number(operand);
    }

    if (Number.isInteger(dialPos / 100)) {
      zeros++;
    }
  });

  console.log(zeros);
}
