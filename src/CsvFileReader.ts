import fs from "fs";
import { dateStringToDate } from "./util";
export class CsvFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {}
  async read(): Promise<void> {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0]), //date
          row[1], //team1
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
        ];
      });
  }
}
