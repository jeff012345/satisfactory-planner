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
const mapFriendly = new Map<String, MaterialNode>();

export function createMap() {
    for (const recipe of RECIPES) {
        for (const output of recipe.outputs) {
            let materialNode = map.get(output.material);
            if (!materialNode) {
                materialNode = new MaterialNode(output.material);
                map.set(output.material, materialNode);
                mapFriendly.set(Material[output.material], materialNode);
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
    console.log(mapFriendly);
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
        .sort()
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

        document.querySelectorAll("#recipes .next-path-expand")
            .forEach(element => {
                console.log("next-path-expand", element);
               element.addEventListener("click", expandNextPath);
            });

        document.querySelectorAll("#recipes .next-path-collapse")
            .forEach(element => {
                console.log("next-path-collapse", element);
                element.addEventListener("click", collapseNextPath);
            });
    });
}

function expandNextPath(event: Event) {
    console.log("expandNextPath", event);
    const expand = event.target as HTMLElement;
    const parent = expand.parentNode as HTMLElement;

    console.log("parent", parent);
    parent.classList.remove("collapse");
    parent.classList.add("expand");
}


function collapseNextPath(event: Event) {
    console.log("collapseNextPath", event);
    const expand = event.target as HTMLElement;
    const parent = expand.parentNode as HTMLElement;

    parent.classList.remove("expand");
    parent.classList.add("collapse");
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
                    <h4>ALT ${index}: ${recipe.name} in ${Building[recipe.building]}</h4>
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
        <div class="outputs">
            <div>Outputs</div>            
            <!-- TODO subtract outputs from totals -->
            <div>${printOutputs(recipe.outputs, recipeRate)}</div>
        </div>
        <br />
        <div class="inputs">
            <div>Inputs</div>
            <div>${makeInputs(recipe.inputs, recipeRate)}</div>
        </div>
        <div class="next collapse">
            <h5>Next</h5>
            <span class="next-path-toggle next-path-expand">(expand)</span>
            <span class="next-path-toggle next-path-collapse">(collapse)</span>
            <div class="next-path">${nextPaths(recipe.inputs, totals, recipeRate)}</div>
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

    const existingMaterials = new Set<Material>(totals.keys());

    return inputs
        .map(materialRate => [materialRate, findRecipes(materialRate.material)] as [MaterialRate, Recipe[]])
        .map(nextItem => {
            const totalsClone = new Map<Material, number>(totals.entries());
            const recipeScale = nextItem[0].rate * scaleFactor;
            const recipes = nextItem[1]
                .filter(recipe => {
                    const matching = recipe.inputs.find(output => existingMaterials.has(output.material));
                    console.log("matching", matching);
                    return matching === undefined;
                });

            return outputPaths(recipes, nextItem[0].material, totalsClone, recipeScale);
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
        .map(output => `<div>${Material[output.material]} at ${output.rate * scaleFactor}/min</div>`)
        .join("")
}
