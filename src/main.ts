import './style.css'
import {createMap, createOutputSelect, initOutputQuantity} from './recipe-map'

// @ts-ignore
document.querySelector('#app').innerHTML = `
<div>
    <p>
        Output Quantity/min:
        <input type="number" id="outputQuantity" value="10" min="1">
    </p>
    <p>
        Output: <select id="materials"></select>
    </p>
  
    <p>
        Recipes
        <div id="recipes"></div>
    </p>
</div>
`

createOutputSelect();
initOutputQuantity();
createMap();

const select = document.getElementById("materials") as HTMLSelectElement;

const lastSelection = localStorage.getItem("last-material") || "IRON_ROD";
const option = select.options.namedItem(lastSelection);
if (option) {
    option.selected = true;
    select.dispatchEvent(new Event("change"));
}

