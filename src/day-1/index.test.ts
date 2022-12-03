import { groupCalories, mostCaloriesHeld, solve } from ".";
import { createInputGetter } from "..";

const input = createInputGetter(__dirname);
const example = input("example.1.txt");

describe("day 1", () => {
  test("can create two elves and count their calories", () => {
    const input = ["1000 ", "", "2000 "];

    expect(groupCalories(input)).toEqual([1000, 2000]);
  });

  test("can group an elves' carried calories", () => {
    const input = ["1000 ", "2000 "];

    expect(groupCalories(input)).toEqual([3000]);
  });

  test("can find the most calories held", () => {
    const input = [1000, 2000];

    expect(mostCaloriesHeld(input)).toEqual(2000);
  });

  test("solution", async () => {
    expect(await solve(example)).toEqual(71300);
  });
});
