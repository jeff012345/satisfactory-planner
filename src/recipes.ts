export enum Material {
    IRON_ORE,
    COPPER_ORE,
    COAL,
    BAUXITE,
    RAW_QUARTZ,
    LIMESTONE,
    OIL,
    WATER,
    CATERIUM_ORE,
    SULFUR,
    SAM,
    NITROGEN_GAS,
    URANIUM,

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

    ENCASED_INDUSTRIAL_BEAM,
    SMART_PLATING,
    REINFORCED_IRON_PLATE,
    MODULAR_FRAME,
    HEAVY_MODULAR_FRAME,
    VERSATILE_FRAMEWORK,

    ROTOR,
    STATOR,
    MOTOR,
    AUTOMATED_WIRING,

    PLASTIC,
    RUBBER,
    POLYMER_RESIN,
    PETROLEUM_COKE,
    HEAVY_OIL_RESIDUE,
    FUEL,
    FABRIC,

    SILICA,
    QUARTZ_CRYSTAL,
    CRYSTAL_OSCILLATOR,

    CATERIUM_INGOT,
    QUICKWIRE,

    CIRCUIT_BOARD,
    COMPUTER,
    ADAPTIVE_CONTROL_UNIT,
    SUPERCOMPUTER,

    AI_LIMITER,
    HIGH_SPEED_CONNECTOR,

    BLACK_POWDER,
    COMPACTED_COAL,
    SMOKELESS_POWDER,

    REANIMATED_SAM,
    SAM_FLUCTUATOR,

    ALUMINA_SOLUTION,
    ALUMINIUM_SCRAP,
    ALUMINIUM_INGOT,
    ALCLAD_ALUMINIUM_SHEET,
    ALUMINIUM_CASING,
    HEAT_SINK,

    SULFURIC_ACID,
    BATTERY,

    NITRIC_ACID,

    RADIO_CONTROL_UNIT,
    MODULAR_ENGINE,
    TURBO_MOTOR,
    COOLING_SYSTEM,
    FUSED_MODULAR_FRAME,

    MAGNETIC_FIELD_GENERATOR,
    ASSEMBLY_DIRECTOR_SYSTEM,
    THERMAL_PROPULSION_ROCKET,

    ENCASED_URANIUM_CELL,
    ELECTROMAGNETIC_CONTROL_ROD,
    URANIUM_FUEL_ROD,
    URANIUM_WASTE,
    NON_FISSILE_URANIUM,
    PLUTONIUM_PELLET,
    ENCASED_PLUTONIUM_CELL,
    PLUTONIUM_FUEL_ROD,
    PLUTONIUM_WASTE,

    COPPER_POWDER,
    PRESSURE_CONVERSION_CUBE,
    NUCLEAR_PASTA

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
    WATER_EXTRACTOR,
    BLENDER,
    RESOURCE_WELL_EXTRACTOR,
    PARTICLE_ACCELERATOR,
    NUCLEAR_POWER_PLANT
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
        name: 'Bauxite',
        outputs: [
            {
                material: Material.BAUXITE,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.MINER
    },
    {
        name: 'Raw Quartz',
        outputs: [
            {
                material: Material.RAW_QUARTZ,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.MINER
    },
    {
        name: 'Limestone',
        outputs: [
            {
                material: Material.LIMESTONE,
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
        name: "Caterium Ore",
        outputs: [
            {
                material: Material.CATERIUM_ORE,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.MINER
    },
    {
        name: "Sulfur",
        outputs: [
            {
                material: Material.SULFUR,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.MINER
    },
    {
        name: "SAM",
        outputs: [
            {
                material: Material.SAM,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.MINER
    },
    {
        name: "Nitrogen",
        outputs: [
            {
                material: Material.NITROGEN_GAS,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.RESOURCE_WELL_EXTRACTOR
    },
    {
        name: "Uranium",
        outputs: [
            {
                material: Material.URANIUM,
                rate: 120
            }
        ],
        inputs: [],
        building: Building.MINER
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
    },
    {
        name: "Copper Ingot",
        outputs: [
            {
                material: Material.COPPER_INGOT,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.COPPER_ORE,
                rate: 30
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Wire",
        outputs: [
            {
                material: Material.WIRE,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.COPPER_INGOT,
                rate: 15
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Iron Wire",
        outputs: [
            {
                material: Material.WIRE,
                rate: 22.5
            }
        ],
        inputs: [
            {
                material: Material.IRON_INGOT,
                rate: 12.5
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Cable",
        outputs: [
            {
                material: Material.CABLE,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.WIRE,
                rate: 60
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Fine Concrete",
        outputs: [
            {
                material: Material.CONCRETE,
                rate: 50
            }
        ],
        inputs: [
            {
                material: Material.LIMESTONE,
                rate: 60
            },
            {
                material: Material.SILICA,
                rate: 15
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Copper Sheet",
        outputs: [
            {
                material: Material.COPPER_SHEET,
                rate: 10
            }
        ],
        inputs: [
            {
                material: Material.COPPER_INGOT,
                rate: 20
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Steam Copper Sheet",
        outputs: [
            {
                material: Material.COPPER_SHEET,
                rate:  22.5
            }
        ],
        inputs: [
            {
                material: Material.COPPER_INGOT,
                rate: 22.5
            },
            {
                material: Material.WATER,
                rate: 22.5
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Rotor",
        outputs: [
            {
                material: Material.ROTOR,
                rate: 4
            }
        ],
        inputs: [
            {
                material: Material.IRON_ROD,
                rate: 20
            },
            {
                material: Material.SCREW,
                rate: 100
            },
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Modular Frame",
        outputs: [
            {
                material: Material.MODULAR_FRAME,
                rate: 2
            }
        ],
        inputs: [
            {
                material: Material.REINFORCED_IRON_PLATE,
                rate: 3
            },
            {
                material: Material.IRON_ROD,
                rate: 12
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Smart Plating",
        outputs: [
            {
                material: Material.SMART_PLATING,
                rate: 2
            }
        ],
        inputs: [
            {
                material: Material.REINFORCED_IRON_PLATE,
                rate: 2
            },
            {
                material: Material.ROTOR,
                rate: 2
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Steel Beam",
        outputs: [
            {
                material: Material.STEEL_BEAM,
                rate: 15
            }
        ],
        inputs: [
            {
                material: Material.STEEL_INGOT,
                rate: 60
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Steel Pipe",
        outputs: [
            {
                material: Material.STEEL_PIPE,
                rate: 20
            }
        ],
        inputs: [
            {
                material: Material.STEEL_INGOT,
                rate: 30
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Versatile Framework",
        outputs: [
            {
                material: Material.VERSATILE_FRAMEWORK,
                rate: 5
            }
        ],
        inputs: [
            {
                material: Material.MODULAR_FRAME,
                rate: 2.5
            },
            {
                material: Material.STEEL_BEAM,
                rate: 30
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Encased Industrial Beam",
        outputs: [
            {
                material: Material.ENCASED_INDUSTRIAL_BEAM,
                rate: 6
            }
        ],
        inputs: [
            {
                material: Material.STEEL_BEAM,
                rate: 18
            },
            {
                material: Material.CONCRETE,
                rate: 36
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Stator",
        outputs: [
            {
                material: Material.STATOR,
                rate: 5
            }
        ],
        inputs: [
            {
                material: Material.STEEL_PIPE,
                rate: 15
            },
            {
                material: Material.WIRE,
                rate: 40
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Motor",
        outputs: [
            {
                material: Material.MOTOR,
                rate: 5
            }
        ],
        inputs: [
            {
                material: Material.ROTOR,
                rate: 10
            },
            {
                material: Material.STATOR,
                rate: 10
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Automated Wiring",
        outputs: [
            {
                material: Material.AUTOMATED_WIRING,
                rate: 2.5
            }
        ],
        inputs: [
            {
                material: Material.STATOR,
                rate: 2.5
            },
            {
                material: Material.CABLE,
                rate: 50
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Plastic",
        outputs: [
            {
                material: Material.PLASTIC,
                rate: 20
            },
            {
                material: Material.HEAVY_OIL_RESIDUE,
                rate: 10
            }
        ],
        inputs: [
            {
                material: Material.OIL,
                rate: 30
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Residual Plastic",
        outputs: [
            {
                material: Material.PLASTIC,
                rate: 20
            }
        ],
        inputs: [
            {
                material: Material.POLYMER_RESIN,
                rate: 60
            },
            {
                material: Material.WATER,
                rate: 20
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Rubber",
        outputs: [
            {
                material: Material.RUBBER,
                rate: 20
            },
            {
                material: Material.HEAVY_OIL_RESIDUE,
                rate: 20
            }
        ],
        inputs: [
            {
                material: Material.OIL,
                rate: 30
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Residual Rubber",
        outputs: [
            {
                material: Material.RUBBER,
                rate: 20
            }
        ],
        inputs: [
            {
                material: Material.POLYMER_RESIN,
                rate: 40
            },
            {
                material: Material.WATER,
                rate: 40
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Fuel",
        outputs: [
            {
                material: Material.FUEL,
                rate: 40
            },
            {
                material: Material.POLYMER_RESIN,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.OIL,
                rate: 60
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Petroleum Coke",
        outputs: [
            {
                material: Material.PETROLEUM_COKE,
                rate: 120
            }
        ],
        inputs: [
            {
                material: Material.HEAVY_OIL_RESIDUE,
                rate: 40
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Heavy Oil Residue",
        outputs: [
            {
                material: Material.HEAVY_OIL_RESIDUE,
                rate: 40
            },
            {
                material: Material.POLYMER_RESIN,
                rate: 20
            }
        ],
        inputs: [
            {
                material: Material.OIL,
                rate: 30
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Circuit Board",
        outputs: [
            {
                material: Material.CIRCUIT_BOARD,
                rate: 7.5
            }
        ],
        inputs: [
            {
                material: Material.COPPER_SHEET,
                rate: 15
            },
            {
                material: Material.PLASTIC,
                rate: 30
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Caterium Circuit Board",
        outputs: [
            {
                material: Material.CIRCUIT_BOARD,
                rate: 8.75
            }
        ],
        inputs: [
            {
                material: Material.QUICKWIRE,
                rate: 37.5
            },
            {
                material: Material.PLASTIC,
                rate: 12.5
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Caterium Ingot",
        outputs: [
            {
                material: Material.CATERIUM_INGOT,
                rate: 15
            }
        ],
        inputs: [
            {
                material: Material.CATERIUM_ORE,
                rate: 45
            }
        ],
        building: Building.SMELTER
    },
    {
        name: "Quickwire",
        outputs: [
            {
                material: Material.QUICKWIRE,
                rate: 60
            }
        ],
        inputs: [
            {
                material: Material.CATERIUM_INGOT,
                rate: 12
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "AI Limiter",
        outputs: [
            {
                material: Material.AI_LIMITER,
                rate: 5
            }
        ],
        inputs: [
            {
                material: Material.COPPER_SHEET,
                rate: 25
            },
            {
                material: Material.QUICKWIRE,
                rate: 100
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Fabric",
        outputs: [
            {
                material: Material.FABRIC,
                rate: 15
            }
        ],
        inputs: [
            {
                material: Material.POLYMER_RESIN,
                rate: 30
            },
            {
                material: Material.WATER,
                rate: 30
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "High-Speed Connector",
        outputs: [
            {
                material: Material.HIGH_SPEED_CONNECTOR,
                rate: 3.75
            }
        ],
        inputs: [
            {
                material: Material.QUICKWIRE,
                rate: 210
            },
            {
                material: Material.CABLE,
                rate: 37.5
            },
            {
                material: Material.CIRCUIT_BOARD,
                rate: 3.75
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Quartz Crystal",
        outputs: [
            {
                material: Material.QUARTZ_CRYSTAL,
                rate: 22.5
            }
        ],
        inputs: [
            {
                material: Material.RAW_QUARTZ,
                rate: 37.5
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Silica",
        outputs: [
            {
                material: Material.SILICA,
                rate: 37.5
            }
        ],
        inputs: [
            {
                material: Material.RAW_QUARTZ,
                rate: 22.5
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Crystal Oscillator",
        outputs: [
            {
                material: Material.CRYSTAL_OSCILLATOR,
                rate: 1
            }
        ],
        inputs: [
            {
                material: Material.QUARTZ_CRYSTAL,
                rate: 18
            },
            {
                material: Material.CABLE,
                rate: 14
            },
            {
                material: Material.REINFORCED_IRON_PLATE,
                rate: 2.5
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Insulated Crystal Oscillator",
        outputs: [
            {
                material: Material.CRYSTAL_OSCILLATOR,
                rate: 1
            }
        ],
        inputs: [
            {
                material: Material.QUARTZ_CRYSTAL,
                rate: 18.75
            },
            {
                material: Material.RUBBER,
                rate: 13.125
            },
            {
                material: Material.AI_LIMITER,
                rate: 1
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Black Powder",
        outputs: [
            {
                material: Material.BLACK_POWDER,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.SULFUR,
                rate: 15
            },
            {
                material: Material.COAL,
                rate: 15
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Compacted Coal",
        outputs: [
            {
                material: Material.COMPACTED_COAL,
                rate: 25
            }
        ],
        inputs: [
            {
                material: Material.COAL,
                rate: 25
            },
            {
                material: Material.SULFUR,
                rate: 25
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Smokeless Powder",
        outputs: [
            {
                material: Material.SMOKELESS_POWDER,
                rate: 20
            }
        ],
        inputs: [
            {
                material: Material.BLACK_POWDER,
                rate: 20
            },
            {
                material: Material.HEAVY_OIL_RESIDUE,
                rate: 10
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Reanimated SAM",
        outputs: [
            {
                material: Material.REANIMATED_SAM,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.SAM,
                rate: 120
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "SAM Fluctuator",
        outputs: [
            {
                material: Material.SAM_FLUCTUATOR,
                rate: 10
            }
        ],
        inputs: [
            {
                material: Material.REANIMATED_SAM,
                rate: 60
            },
            {
                material: Material.WIRE,
                rate: 50
            },
            {
                material: Material.STEEL_PIPE,
                rate: 30
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Computer",
        outputs: [
            {
                material: Material.COMPUTER,
                rate: 2.5
            }
        ],
        inputs: [
            {
                material: Material.CIRCUIT_BOARD,
                rate: 10
            },
            {
                material: Material.CABLE,
                rate: 20
            },
            {
                material: Material.PLASTIC,
                rate: 40
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Heavy Modular Frame",
        outputs: [
            {
                material: Material.HEAVY_MODULAR_FRAME,
                rate: 2
            }
        ],
        inputs: [
            {
                material: Material.MODULAR_FRAME,
                rate: 10
            },
            {
                material: Material.STEEL_PIPE,
                rate: 40
            },
            {
                material: Material.ENCASED_INDUSTRIAL_BEAM,
                rate: 10
            },
            {
                material: Material.SCREW,
                rate: 240
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Modular Engine",
        outputs: [
            {
                material: Material.MODULAR_ENGINE,
                rate: 1
            }
        ],
        inputs: [
            {
                material: Material.MOTOR,
                rate: 2
            },
            {
                material: Material.RUBBER,
                rate: 15
            },
            {
                material: Material.SMART_PLATING,
                rate: 2
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Adaptive Control Unit",
        outputs: [
            {
                material: Material.ADAPTIVE_CONTROL_UNIT,
                rate: 1
            }
        ],
        inputs: [
            {
                material: Material.AUTOMATED_WIRING,
                rate: 5
            },
            {
                material: Material.CIRCUIT_BOARD,
                rate: 5
            },
            {
                material: Material.MODULAR_FRAME,
                rate: 1
            },
            {
                material: Material.COMPUTER,
                rate: 2
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Alumina Solution",
        outputs: [
            {
                material: Material.ALUMINA_SOLUTION,
                rate: 120,
            },
            {
                material: Material.SILICA,
                rate: 50
            }
        ],
        inputs: [
            {
                material: Material.BAUXITE,
                rate: 120
            },
            {
                material: Material.WATER,
                rate: 180
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Aluminum Scrap",
        outputs: [
            {
                material: Material.ALUMINIUM_SCRAP,
                rate: 360,
            },
            {
                material: Material.WATER,
                rate: 120
            }
        ],
        inputs: [
            {
                material: Material.ALUMINA_SOLUTION,
                rate: 240
            },
            {
                material: Material.COAL,
                rate: 120
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Aluminum Ingot",
        outputs: [
            {
                material: Material.ALUMINIUM_INGOT,
                rate: 60
            }
        ],
        inputs: [
            {
                material: Material.ALUMINIUM_SCRAP,
                rate: 90
            },
            {
                material: Material.SILICA,
                rate: 75
            }
        ],
        building: Building.FOUNDRY
    },
    {
        name: "Alclad Aluminum Sheet",
        outputs: [
            {
                material: Material.ALCLAD_ALUMINIUM_SHEET,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.ALUMINIUM_INGOT,
                rate: 30
            },
            {
                material: Material.COPPER_INGOT,
                rate: 10
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Aluminum Casing",
        outputs: [
            {
                material: Material.ALUMINIUM_CASING,
                rate: 60
            }
        ],
        inputs: [
            {
                material: Material.ALUMINIUM_INGOT,
                rate: 90
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Radio Control Unit",
        outputs: [
            {
                material: Material.RADIO_CONTROL_UNIT,
                rate: 2.5
            }
        ],
        inputs: [
            {
                material: Material.ALUMINIUM_CASING,
                rate: 40
            },
            {
                material: Material.CRYSTAL_OSCILLATOR,
                rate: 1.25
            },
            {
                material: Material.COMPUTER,
                rate: 2.5
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Sulfuric Acid",
        outputs: [
            {
                material: Material.SULFURIC_ACID,
                rate: 50
            }
        ],
        inputs: [
            {
                material: Material.SULFUR,
                rate:  50
            },
            {
                material: Material.WATER,
                rate: 50
            }
        ],
        building: Building.BLENDER
    },
    {
        name: "Battery",
        outputs: [
            {
                material: Material.BATTERY,
                rate: 20
            },
            {
                material: Material.WATER,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.SULFURIC_ACID,
                rate: 50
            },
            {
                material: Material.ALUMINA_SOLUTION,
                rate: 40
            },
            {
                material: Material.ALUMINIUM_CASING,
                rate: 20
            }
        ],
        building: Building.BLENDER
    },
    {
        name: "Supercomputer",
        outputs: [
            {
                material: Material.SUPERCOMPUTER,
                rate: 1.875
            }
        ],
        inputs: [
            {
                material: Material.COMPUTER,
                rate: 7.5
            },
            {
                material: Material.AI_LIMITER,
                rate: 3.75
            },
            {
                material: Material.HIGH_SPEED_CONNECTOR,
                rate: 5.625
            },
            {
                material: Material.PLASTIC,
                rate: 52.5
            },
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Assembly Director System",
        outputs: [
            {
                material: Material.ASSEMBLY_DIRECTOR_SYSTEM,
                rate: 0.75
            }
        ],
        inputs: [
            {
                material: Material.ADAPTIVE_CONTROL_UNIT,
                rate: 1.5
            },
            {
                material: Material.SUPERCOMPUTER,
                rate: 0.75
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Heat Sink",
        outputs: [
            {
                material: Material.HEAT_SINK,
                rate: 7.5
            }
        ],
        inputs: [
            {
                material: Material.COPPER_SHEET,
                rate: 22.5
            },
            {
                material: Material.ALCLAD_ALUMINIUM_SHEET,
                rate: 37.5
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Nitric Acid",
        outputs: [
            {
                material: Material.NITRIC_ACID,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.NITROGEN_GAS,
                rate: 120
            },
            {
                material: Material.WATER,
                rate: 10
            },
            {
                material: Material.IRON_PLATE,
                rate: 10
            }
        ],
        building: Building.BLENDER
    },
    {
        name: "Turbo Motor",
        outputs: [
            {
                material: Material.TURBO_MOTOR,
                rate: 1.875
            }
        ],
        inputs: [
            {
                material: Material.COOLING_SYSTEM,
                rate: 7.5
            },
            {
                material: Material.RADIO_CONTROL_UNIT,
                rate: 3.75
            },
            {
                material: Material.MOTOR,
                rate: 7.5
            },
            {
                material: Material.RUBBER,
                rate: 45
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Fused Modular Frame",
        outputs: [
            {
                material: Material.FUSED_MODULAR_FRAME,
                rate: 1.5
            }
        ],
        inputs: [
            {
                material: Material.HEAVY_MODULAR_FRAME,
                rate: 1.5
            },
            {
                material: Material.ALUMINIUM_CASING,
                rate: 75
            },
            {
                material: Material.NITROGEN_GAS,
                rate: 37.5
            }
        ],
        building: Building.BLENDER
    },
    {
        name: "Magnetic Field Generator",
        outputs: [
            {
                material: Material.MAGNETIC_FIELD_GENERATOR,
                rate: 1
            }
        ],
        inputs: [
            {
                material: Material.VERSATILE_FRAMEWORK,
                rate: 2.5
            },
            {
                material: Material.ELECTROMAGNETIC_CONTROL_ROD,
                rate: 1
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Cooling System",
        outputs: [
            {
                material: Material.COOLING_SYSTEM,
                rate: 6
            }
        ],
        inputs: [
            {
                material: Material.HEAT_SINK,
                rate: 12
            },
            {
                material: Material.RUBBER,
                rate: 12
            },
            {
                material: Material.WATER,
                rate: 30
            },
            {
                material: Material.NITROGEN_GAS,
                rate: 150
            }
        ],
        building: Building.BLENDER
    },
    {
        name: "Thermal Propulsion Rocket",
        outputs: [
            {
                material: Material.THERMAL_PROPULSION_ROCKET,
                rate: 1
            }
        ],
        inputs: [
            {
                material: Material.MODULAR_ENGINE,
                rate: 2.5
            },
            {
                material: Material.TURBO_MOTOR,
                rate: 1
            },
            {
                material: Material.COOLING_SYSTEM,
                rate: 3
            },
            {
                material: Material.FUSED_MODULAR_FRAME,
                rate: 1
            }
        ],
        building: Building.MANUFACTURER
    },

    {
        name: "Electromagnetic Control Rod",
        outputs: [
            {
                material: Material.ELECTROMAGNETIC_CONTROL_ROD,
                rate: 4
            }
        ],
        inputs: [
            {
                material: Material.STATOR,
                rate: 6
            },
            {
                material: Material.AI_LIMITER,
                rate: 4
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Encased Uranium Cell",
        outputs: [
            {
                material: Material.ENCASED_URANIUM_CELL,
                rate: 25
            },
            {
                material: Material.SULFURIC_ACID,
                rate: 10
            }
        ],
        inputs: [
            {
                material: Material.URANIUM,
                rate: 50
            },
            {
                material: Material.CONCRETE,
                rate: 15
            },
            {
                material: Material.SULFURIC_ACID,
                rate: 40
            }
        ],
        building: Building.BLENDER
    },
    {
        name: "Uranium Fuel Rod",
        outputs: [
            {
                material: Material.URANIUM_FUEL_ROD,
                rate: 0.4
            }
        ],
        inputs: [
            {
                material: Material.ENCASED_URANIUM_CELL,
                rate: 20
            },
            {
                material: Material.ENCASED_INDUSTRIAL_BEAM,
                rate: 1.2
            },
            {
                material: Material.ELECTROMAGNETIC_CONTROL_ROD,
                rate: 2
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Non-Fissile Uranium",
        outputs: [
            {
                material: Material.NON_FISSILE_URANIUM,
                rate: 50
            },
            {
                material: Material.WATER,
                rate: 15
            }
        ],
        inputs: [
            {
                material: Material.URANIUM_WASTE,
                rate: 37.5
            },
            {
                material: Material.SILICA,
                rate: 25
            },
            {
                material: Material.NITRIC_ACID,
                rate: 15
            },
            {
                material: Material.SULFURIC_ACID,
                rate: 25
            }
        ],
        building: Building.BLENDER
    },
    {
        name: "Plutonium Pellet",
        outputs: [
            {
                material: Material.PLUTONIUM_PELLET,
                rate: 30
            }
        ],
        inputs: [
            {
                material: Material.NON_FISSILE_URANIUM,
                rate: 100
            },
            {
                material: Material.URANIUM_WASTE,
                rate: 25
            }
        ],
        building: Building.PARTICLE_ACCELERATOR
    },
    {
        name: "Encased Plutonium Cell",
        outputs: [
            {
                material: Material.ENCASED_PLUTONIUM_CELL,
                rate: 5
            }
        ],
        inputs: [
            {
                material: Material.PLUTONIUM_PELLET,
                rate: 10
            },
            {
                material: Material.CONCRETE,
                rate: 20
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Plutonium Fuel Rod",
        outputs: [
            {
                material: Material.PLUTONIUM_FUEL_ROD,
                rate: 0.25
            }
        ],
        inputs: [
            {
                material: Material.ENCASED_PLUTONIUM_CELL,
                rate: 7.5
            },
            {
                material: Material.STEEL_BEAM,
                rate: 4.5
            },
            {
                material: Material.ELECTROMAGNETIC_CONTROL_ROD,
                rate: 1.5
            },
            {
                material: Material.HEAT_SINK,
                rate: 2.5
            }
        ],
        building: Building.MANUFACTURER
    },
    {
        name: "Copper Powder",
        outputs: [
            {
                material: Material.COPPER_POWDER,
                rate: 50
            }
        ],
        inputs: [
            {
                material: Material.COPPER_INGOT,
                rate: 300
            }
        ],
        building: Building.CONSTRUCTOR
    },
    {
        name: "Pressure Conversion Cube",
        outputs: [
            {
                material: Material.PRESSURE_CONVERSION_CUBE,
                rate: 1
            }
        ],
        inputs: [
            {
                material: Material.FUSED_MODULAR_FRAME,
                rate: 1
            },
            {
                material: Material.RADIO_CONTROL_UNIT,
                rate: 2
            }
        ],
        building: Building.ASSEMBLER
    },
    {
        name: "Nuclear Pasta",
        outputs: [
            {
                material: Material.NUCLEAR_PASTA,
                rate: 0.5
            }
        ],
        inputs: [
            {
                material: Material.COPPER_POWDER,
                rate: 100
            },
            {
                material: Material.PRESSURE_CONVERSION_CUBE,
                rate: 0.5
            }
        ],
        building: Building.PARTICLE_ACCELERATOR
    },
    {
        name: "Uranium Waste",
        outputs: [
            {
                material: Material.URANIUM_WASTE,
                rate: 10
            }
        ],
        inputs: [
            {
                material: Material.URANIUM_FUEL_ROD,
                rate: 0.2
            },
            {
                material: Material.WATER,
                rate: 240
            }
        ],
        building: Building.NUCLEAR_POWER_PLANT
    },
    {
        name: "Pure Caterium Ingot",
        outputs: [
            {
                material: Material.CATERIUM_INGOT,
                rate: 12
            }
        ],
        inputs: [
            {
                material: Material.CATERIUM_ORE,
                rate: 24
            },
            {
                material: Material.WATER,
                rate: 24
            }
        ],
        building: Building.REFINERY
    },
    {
        name: "Cast Screw",
        outputs: [
            {
                material: Material.SCREW,
                rate: 50
            }
        ],
        inputs: [
            {
                material: Material.IRON_INGOT,
                rate: 12.5
            }
        ],
        building: Building.CONSTRUCTOR
    }


];


