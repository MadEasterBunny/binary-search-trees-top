import { Tree, prettyPrint } from "./binary-search-trees";

const testArr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const test = new Tree(testArr);

prettyPrint(test.root);