import { i } from "./items.js";
import items from "./default.js";  // default import
function allitems(object){
for (const i of object) {
    console.log(i)
}

}

allitems(i);
allitems(items);
