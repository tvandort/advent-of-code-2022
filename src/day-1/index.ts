import { readToArray } from "..";

export const groupCalories = (input: string[]) => {
  const elves: number[] = [];

  let calorieCount = 0;
  for (const line of input) {
    const trimmed = line.trim();

    if (trimmed.length > 0) {
      calorieCount += parseInt(trimmed);
    } else {
      elves.push(calorieCount);
      calorieCount = 0;
    }
  }

  elves.push(calorieCount);

  return elves;
};

export const sortCaloriesHeld = (input: number[]) =>
  input.map((number) => number).sort((a, b) => b - a);

export const topNCaloriesHeld = (top: number, input: number[]) => {
  const result: number[] = [];
  const sorted = sortCaloriesHeld(input);
  for (let current = 0; current < top; current++) {
    result[current] = sorted[current];
  }

  return result;
};

export const solvePart1 = async (filePath: string) => {
  const data = await readToArray(filePath, (line) => line);

  return topNCaloriesHeld(1, groupCalories(data))[0];
};

export const sum = (input: number[]) => {
  let aggregate = 0;
  for (const number of input) {
    aggregate += number;
  }

  return aggregate;
};

export const solvePart2 = async (top: number, filePath: string) => {
  const data = await readToArray(filePath, (line) => line);

  return sum(topNCaloriesHeld(top, groupCalories(data)));
};
