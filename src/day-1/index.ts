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

export const mostCaloriesHeld = (input: number[]) => {
  let caloriesHeld = 0;

  for (const calories of input) {
    if (calories > caloriesHeld) {
      caloriesHeld = calories;
    }
  }

  return caloriesHeld;
};

export const solve = async (filePath: string) => {
  const data = await readToArray(filePath, (line) => line);

  return mostCaloriesHeld(groupCalories(data));
};
