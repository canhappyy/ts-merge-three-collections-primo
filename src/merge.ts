export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const result: number[] = [];

    let i = 0;
    let j = collection_2.length - 1;
    let k = 0;

    while (
        i < collection_1.length ||
        j >= 0 ||
        k < collection_3.length
    ) {
        // if the index is out of bounds, use Infinity to ensure it's not chosen as the minimum
        const a = i < collection_1.length ? collection_1[i] : Infinity;
        const b = j >= 0 ? collection_2[j] : Infinity;
        const c = k < collection_3.length ? collection_3[k] : Infinity;

        const min = Math.min(a, b, c);
        result.push(min);

        if (min === a) i++;
        if (min === b) j--;
        if (min === c) k++;
    }

    return result;
}