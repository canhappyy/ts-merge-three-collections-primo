// merge three int[] and return sorted array by ascending
// without using any sort function
// Given:
// collection_1 (max to min)
// collection_2 (min to max)
// collection_3 (min to max)

export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let col1_index = collection_1.length - 1; // smallest of collection 1
    let col2_index = 0; // smallest of collection 2
    let col3_index = 0; // smallest of collection 3

    const result: number[] = [];

    while (col1_index >= 0 || col2_index < collection_2.length || col3_index < collection_3.length) {
        // start from the smallest of each collection
        let value1: number = 0;
        if (col1_index >= 0) {
            value1 = collection_1[col1_index]!;
        }
        else {
            // if all elements are sorted, skip this collection
            value1 = Number.POSITIVE_INFINITY;
        }

        let value2: number = 0;
        if (col2_index < collection_2.length) {
            value2 = collection_2[col2_index]!;
        }
        else {
            // if all elements are sorted, skip this collection
            value2 = Number.POSITIVE_INFINITY;
        }

        let value3: number = 0;
        if (col3_index < collection_3.length) {
            value3 = collection_3[col3_index]!;
        }
        else {
            // if all elements are sorted, skip this collection
            value3 = Number.POSITIVE_INFINITY;
        }

        // compare selected value from each collection
        if (value1 <= value2 && value1 <= value3) {
            result.push(value1);
            col1_index--;
        }
        else if (value2 <= value1 && value2 <= value3) {
            result.push(value2);
            col2_index++;
        }
        else {
            result.push(value3);
            col3_index++;
        }
    }

    return result;
}