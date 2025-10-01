import {merge} from "../src/merge";
import {expect, describe, it} from "vitest";

describe('merge()', () => {
    it('merge three collections into ascending order', () => {
        const col1 = [5, 4, 3] // desc
        const col2 = [1, 2] // asc
        const col3 = [8, 9] // asc
        expect(merge(col1, col2, col3)).toEqual([1, 2, 3, 4, 5, 8, 9]);
    });

    it('merge three collections into ascending order (duplicates)', () => {
        const col1 = [5, 4, 3]
        const col2 = [1, 2, 3, 4]
        const col3 = [8, 9]
        expect(merge(col1, col2, col3)).toEqual([1, 2, 3, 3, 4, 4, 5, 8, 9]);
    });

    it('merge three collections into ascending order (with empty)', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([3, 2, 1], [], [])).toEqual([1, 2, 3]);
    });
});