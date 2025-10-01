import {merge} from "./merge";


const collection_1: number[] = [9, 6, 3, 0] // max to min
const collection_2: number[] = [-4, 1, 4, 8] // min to max
const collection_3: number[] = [-8, 2, 7, 10] // min to max

console.log('Merged ascending:', merge(collection_1, collection_2, collection_3));