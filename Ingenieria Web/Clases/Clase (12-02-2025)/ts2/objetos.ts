// Objeto llamado mediano que se exportara 
export interface Mediano {
    id:number;
    tatuajes:number;
    nombre:string;
    estatura:number;
    // no es obligatorio llenarlo por el ?
    // no se debe de llamar desde el main
    novia?:string
}

export interface Hero {
    id:number;
    name:string;
    habilities:string[];
    power:number;
    magicPower:number;
}

export const heroes: Hero[] = [
    { id: 1, name: "Diluc", habilities: ["Searing Onslaught", "Dawn"], power: 90, magicPower: 80 },
    { id: 2, name: "Venti", habilities: ["Skyward Sonnet", "Wind's Grand Ode"], power: 70, magicPower: 95 },
    { id: 3, name: "Xiao", habilities: ["Bane of All Evil", "Lemniscatic Wind Cycling"], power: 88, magicPower: 78 },
    { id: 4, name: "Zhongli", habilities: ["Dominus Lapidis", "Planet Befall"], power: 95, magicPower: 85 },
    { id: 5, name: "Ganyu", habilities: ["Trail of the Qilin", "Celestial Shower"], power: 85, magicPower: 92 },
    { id: 6, name: "Raiden Shogun", habilities: ["Transcendence: Baleful Omen", "Secret Art: Musou Shinsetsu"], power: 92, magicPower: 98 },
    { id: 7, name: "Hu Tao", habilities: ["Guide to Afterlife", "Spirit Soother"], power: 89, magicPower: 86 },
    { id: 8, name: "Tartaglia", habilities: ["Foul Legacy: Raging Tide", "Havoc: Obliteration"], power: 87, magicPower: 80 },
    { id: 9, name: "Albedo", habilities: ["Abiogenesis: Solar Isotoma", "Rite of Progeniture: Tectonic Tide"], power: 78, magicPower: 85 },
    { id: 10, name: "Eula", habilities: ["Icetide Vortex", "Glacial Illumination"], power: 90, magicPower: 75 },
    { id: 11, name: "Kazuha", habilities: ["Chihayaburu", "Kazuha Slash"], power: 76, magicPower: 88 },
    { id: 12, name: "Yoimiya", habilities: ["Niwabi Fire-Dance", "Ryuukin Saxifrage"], power: 82, magicPower: 70 },
    { id: 13, name: "Shenhe", habilities: ["Spring Spirit Summoning", "Divine Maiden's Deliverance"], power: 80, magicPower: 90 },
    { id: 14, name: "Itto", habilities: ["Masatsu Zetsugi: Akaushi Burst!", "Raging Oni King"], power: 93, magicPower: 68 },
    { id: 15, name: "Ayaka", habilities: ["Kamisato Art: Hyouka", "Kamisato Art: Soumetsu"], power: 84, magicPower: 89 },
    { id: 16, name: "Yae Miko", habilities: ["Yakan Evocation: Sesshou Sakura", "Great Secret Art: Tenko Kenshin"], power: 79, magicPower: 94 },
    { id: 17, name: "Klee", habilities: ["Jumpy Dumpty", "Sparks 'n' Splash"], power: 86, magicPower: 87 },
    { id: 18, name: "Jean", habilities: ["Gale Blade", "Dandelion Breeze"], power: 74, magicPower: 80 },
    { id: 19, name: "Mona", habilities: ["Mirror Reflection of Doom", "Stellaris Phantasm"], power: 77, magicPower: 96 },
    { id: 20, name: "Barbara", habilities: ["Let the Show Begin", "Shining Miracle"], power: 70, magicPower: 85 }
];
