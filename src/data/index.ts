import type { TreeAddress, Address } from "../types";

import tree from "./properties-tree.json";
import flat from "./properties-flat.json";

const TreeData: TreeAddress = tree;

const FlatData: Address[] = flat;

export { FlatData, TreeData };
