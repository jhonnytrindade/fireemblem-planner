import { Chapter } from "./Chapter";
import { Item } from "./Item";
import { Unit } from "./Unit";

export interface Data {
    units : Unit[];
    chapters : Chapter[];
    items : Item[];
}