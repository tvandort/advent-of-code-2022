import {
  groupCalories,
  sortCaloriesHeld,
  solvePart1,
  topNCaloriesHeld,
  solvePart2,
  sum,
} from ".";
import { createInputGetter } from "..";

const input = createInputGetter(__dirname);
const example = input("example.1.txt");

describe("day 1", () => {
  describe("part 1", () => {
    test("can create two elves and count their calories", () => {
      const input = ["1000 ", "", "2000 "];

      expect(groupCalories(input)).toEqual([1000, 2000]);
    });

    test("can group an elves' carried calories", () => {
      const input = ["1000 ", "2000 "];

      expect(groupCalories(input)).toEqual([3000]);
    });

    test("sort calories held", () => {
      const input = [1000, 2000];

      expect(sortCaloriesHeld(input)).toEqual([2000, 1000]);
    });

    test("solution", async () => {
      expect(await solvePart1(example)).toEqual(71300);
    });
  });

  describe("part 2", () => {
    test("top n can be found", () => {
      const input = [1000, 2000, 3000, 4000, 5000];

      expect(topNCaloriesHeld(2, input)).toEqual([5000, 4000]);
    });

    test("that an array can be summed", () => {
      const input = [1, 2, 3, 4];
      expect(sum(input)).toEqual(10);
    });

    test("solution", async () => {
      expect(await solvePart2(3, example)).toEqual(209691);
    });
  });
});
