import {Material, Building, Recipe, MaterialRate, RECIPES} from "./recipes";

class MaterialNode {
    readonly materialName: string;
    constructor(readonly produces: Material,
                readonly outputRecipes: Recipe[] = [],
                readonly usedIn: Recipe[] = []) {
        this.materialName = Material[produces];
    }
}

const map = new Map<Material, MaterialNode>();

export function createMap() {
    for (const recipe of RECIPES) {
        for (const output of recipe.outputs) {
            let materialNode = map.get(output.material);
            if (!materialNode) {
                materialNode = new MaterialNode(output.material);
                map.set(output.material, materialNode);
            }

            materialNode.outputRecipes.push(recipe);
        }
    }

    for (const recipe of RECIPES) {
        for (const input of recipe.inputs) {
            let materialNode = map.get(input.material);
            if (!materialNode) {
                throw new Error("Input material not found " + Material[input.material]);
            }

            materialNode.usedIn.push(recipe);
        }
    }

    console.log(map);

}

export function findRecipes(output: Material) {
    console.log(`Creating paths for ${Material[output]}`);

    const outputNode = map.get(output);
    if (!outputNode) {
        return [];
    }

    return outputNode.outputRecipes;
}

export function initOutputQuantity() {
    const input = document.getElementById("outputQuantity") as HTMLInputElement;
    input.addEventListener("change", () => {
        const select = document.getElementById("materials") as HTMLSelectElement;
        select.dispatchEvent(new Event("change"));
    });
}

export function createOutputSelect() {
    const select = document.getElementById("materials") as HTMLSelectElement;
    select.innerHTML = Object.values(Material)
        .filter(key => typeof key === 'string')
        .map(key => `<option name="${key}" value="${key}">${key}</option>`)
        .join("");
    select.selectedIndex = -1;

    select.addEventListener("change", () => {
        const element = document.getElementById("recipes");
        if (!element) {
            return;
        }

        const outputQuantity = Number((document.getElementById("outputQuantity") as HTMLInputElement).value);
        console.log("outputQuantity", outputQuantity);

        // @ts-ignore
        const material = Material[select.value];
        const recipes = findRecipes(material);
        element.innerHTML = outputPaths(recipes, material, new Map<Material, number>(), outputQuantity);
    });
}

function outputPaths(recipes: Recipe[],
                     neededMaterial: Material,
                     totals: Map<Material, number>,
                     neededOutputRate: number) {
    return recipes
        .map((recipe, index) => {
            const outputForNeeded = recipe.outputs.find(item => item.material === neededMaterial);
            if (!outputForNeeded) {
                throw new Error("can't find it");
            }

            const recipeRate = neededOutputRate / outputForNeeded.rate;
            return `
                <div class="recipe">
                    ALT ${index}
                    ${outputPath(recipe, totals, recipeRate)}
                </div>
                <hr />
            `;
        })
        .join("");
}

function outputPath(recipe: Recipe, totals: Map<Material, number>, recipeRate: number): string {
    return `
    <div>
        <h5>${recipe.name} in ${Building[recipe.building]}</h5>
        <div class="outputs">
            <div>Outputs</div>            
            <div>${printOutputs(recipe.outputs, recipeRate)}</div>
        </div>
        <br />
        <div class="inputs">
            <div>Inputs</div>
            <div>${makeInputs(recipe.inputs, recipeRate)}</div>
        </div>
        <div class="next">
            <h5>Next</h5>
            <div>${nextPaths(recipe.inputs, totals, recipeRate)}</div>
        </div>
    </div>
    `;
}

function nextPaths(inputs: MaterialRate[], totals: Map<Material, number>, scaleFactor: number): string {
    if (inputs.length === 0) {
        return printTotals(totals);
    }

    inputs.forEach(materialRate => {
        const current = totals.has(materialRate.material) ? Number(totals.get(materialRate.material)) * scaleFactor : 0;
        totals.set(materialRate.material, current + (materialRate.rate * scaleFactor));
    })

    return inputs
        .map(materialRate => [materialRate, findRecipes(materialRate.material)] as [MaterialRate, Recipe[]])
        .map(nextItem => {
            const totalsClone = new Map<Material, number>(totals.entries());
            const recipeScale = nextItem[0].rate * scaleFactor;

            return outputPaths(nextItem[1], nextItem[0].material, totalsClone, recipeScale);
        })
        .join("");
}

function makeInputs(inputs: MaterialRate[], scaleFactor: number): string {
    return inputs
        .map(input => `<div>${Material[input.material]} at ${input.rate * scaleFactor}/min</div>`)
        .join("");
}

function printTotals(totals: Map<Material, number>): string {
    return Array.from(totals.entries())
        .map(entry => `<div>${Material[entry[0]]} = ${entry[1]}</div>`)
        .join("");
}

function printOutputs(outputs: MaterialRate[], scaleFactor: number) {
    return outputs
        .map(output => `${Material[output.material]} at ${output.rate * scaleFactor}/min`)
}
