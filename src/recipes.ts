export enum Material {
    IRON_ORE,
    COPPER_ORE,
    COAL,
    BAUXITE,
    QUARTZ,
    LIMESTONE,
    OIL,
    WATER,

    IRON_INGOT,
    IRON_ROD,
    IRON_PLATE,
    SCREW,

    CONCRETE,

    COPPER_INGOT,
    WIRE,
    COPPER_SHEET,
    CABLE,

    STEEL_INGOT,
    STEEL_BEAM,
    STEEL_PIPE,
    ENCASED_STEEL_BEAM,

    REINFORCED_IRON_PLATE,
    MODULAR_FRAME,
    HEAVY_MODULAR_FRAME,

    PLASTIC,
    RUBBER,
    POLYMER_RESIN,
    PETROLEUM_COKE,
    HEAVY_OIL_RESIDUE,

    SILICON_POWDER,
    QUARTZ_CRYSTAL,
    CRYSTAL_OSCILLATOR,
}

export enum Building {
    RESOURCE_NODE,
    CONSTRUCTOR,
    ASSEMBLER,
    REFINERY,
    MANUFACTURER,
    SMELTER,
    FOUNDRY,
    MINER,
    OIL_EXTRACTOR,
    PACKAGER,
    WATER_EXTRACTOR
}

export interface Recipe {
    name: string;
    outputs: MaterialRate[];
    inputs: MaterialRate[]
    building: Building
}

export interface MaterialRate {
    material: Material;
    rate: number;
}

export const RECIPES: Recipe[] = [
    {
        name: 'Iron Ore',
        outputs: [
            {
                material: Material.IRON_ORE,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.MINER
    },
    {
        name: 'Copper Ore',
        outputs: [
            {
                material: Material.COPPER_ORE,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.MINER
    },
    {
        name: 'Coal',
        outputs: [
            {
                material: Material.COAL,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.MINER
    },
    {
        name: 'Oil',
        outputs: [
            {
                material: Material.OIL,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.OIL_EXTRACTOR
    },
    {
        name: 'Water',
        outputs: [
            {
                material: Material.WATER,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.WATER_EXTRACTOR
    },
    {
        name: 'Iron Ingot',
        outputs: [
            {
                material: Material.IRON_INGOT,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.IRON_ORE,
                rate: 30
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: 'Steel Ingot',
        outputs: [
            {
                material: Material.STEEL_INGOT,
                rate: 45
            }
        ],
        inputs: [
            {
                material: Material.IRON_ORE,
                rate: 45
            },
            {
                material: Material.COAL,
                rate: 45
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: 'Iron Rod',
        outputs: [
            {
                material: Material.IRON_ROD,
                rate: 15
            }
        ],
        inputs: [
            {
                material: Material.IRON_INGOT,
                rate: 15
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: 'Steel Rod',
        outputs: [
            {
                material: Material.IRON_ROD,
                rate: 48
            }
        ],
        inputs: [
            {
                material: Material.STEEL_INGOT,
                rate: 12
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: 'Iron Plate',
        outputs: [
            {
                material: Material.IRON_PLATE,
                rate: 20
            }
        ],
        inputs: [
            {
                material: Material.IRON_INGOT,
                rate: 30
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: 'Screw',
        outputs: [
            {
                material: Material.SCREW,
                rate: 40
            }
        ],
        inputs: [
            {
                material: Material.IRON_ROD,
                rate: 10
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: 'Reinforced Iron Plate',
        outputs: [
            {
                material: Material.REINFORCED_IRON_PLATE,
                rate: 5
            }
        ],
        inputs: [
            {
                material: Material.IRON_PLATE,
                rate: 30
            },
            {
                material: Material.SCREW,
                rate: 60
            }
        ],
        building: Building.ASSEMBLER
    }
];


