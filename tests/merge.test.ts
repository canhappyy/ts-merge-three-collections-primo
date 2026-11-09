import { merge } from "../src/merge.ts";
import { describe, expect, it } from "vitest";

describe("merge", () => {
  it("merges three sorted arrays", () => {
    const collection_1 = [1, 4, 7];
    const collection_2 = [8, 5, 2];
    const collection_3 = [3, 6, 9];
    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("handles empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it("handles only one non-empty array", () => {
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
  });

  it("handles duplicate values", () => {
    const collection_1 = [1];
    const collection_2 = [2, 2];
    const collection_3 = [3, 3, 3];
    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      1, 2, 2, 3, 3, 3,
    ]);
  });
});
