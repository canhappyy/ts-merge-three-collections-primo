import { merge } from "./merge";

const collection_1 = [1, 5, 9];
const collection_2 = [10, 6, 2];
const collection_3 = [3, 7, 11];

const result = merge(collection_1, collection_2, collection_3);

console.log("Merged Array (Ascending):", result);
