import * as fs from "fs";
import * as readline from "node:readline";
import path from "path";

export async function readToArray<T = string>(
  filePath: string,
  transform: (line: string) => T
): Promise<T[]> {
  const fileStream = fs.createReadStream(filePath, { encoding: "utf-8" });
  const lineReader = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const result: T[] = [];
  for await (const line of lineReader) {
    result.push(transform(line));
  }
  return result;
}

export function createInputGetter(directory: string): (file: string) => string {
  return (file: string) => {
    return path.join(directory, file);
  };
}

export function input(directory: string, file: string) {
  return path.join(directory, file);
}
