const FLOAT_VALUES = {
    0.1: "3dcccccd",
    0.2: "3e4ccccd",
    0.25: "3e800000",
    0.3: "3e99999a",
    0.4: "3ecccccd",
    0.5:  "3f000000",
    0.6: "3f19999a",
    0.7: "3f400000",
    0.8: "3f4ccccd",
    0.9: "3f666666",
    1: "3f800000",
    1.05: "3f866666",
    1.1: "3f8ccccd",
    1.15: "3f933333",
    1.2: "3f99999a",
    1.25: "3fa00000",
    1.3: "3fa66666",
    1.4: "3fb33333",
    1.5:"3fc00000",
    1.75: "3fe00000",
    2: "40000000",
};

//default power value as a float 9.800000191
const POWER_MULTIPLIERS = [
    {"displayValue": "10% Power", "value": "3f7ae148"},
    {"displayValue": "20% Power", "value": "3ffae148"},
    {"displayValue": "25% Power", "value": "401ccccd"},
    {"displayValue": "30% Power", "value": "403c28f6"},
    {"displayValue": "40% Power", "value": "407ae148"},
    {"displayValue": "50% Power", "value": "409ccccd"},
    {"displayValue": "60% Power", "value": "40bc28f6"},
    {"displayValue": "70% Power", "value": "40db851f"},
    {"displayValue": "75% Power", "value": "40eb3334"},
    {"displayValue": "80% Power", "value": "40fae148"},
    {"displayValue": "90% Power", "value": "410d1eb9"},
    {"displayValue": "Normal Power", "value": "411ccccd"},
    {"displayValue": "110% Power", "value": "412c7ae2"},
    {"displayValue": "120% Power", "value": "413c28f6"},
    {"displayValue": "125% Power", "value": "41440000"},
    {"displayValue": "130% Power", "value": "414bd70b"},
    {"displayValue": "140% Power", "value": "415b851f"},
    {"displayValue": "150% Power", "value": "416b3334"},
    {"displayValue": "160% Power", "value": "417ae148"},
    {"displayValue": "170% Power", "value": "418547ae"},
    {"displayValue": "175% Power", "value": "41893333"},
    {"displayValue": "180% Power", "value": "418d1eb9"},
    {"displayValue": "190% Power", "value": "4194f5c3"},
    {"displayValue": "2 Times Power", "value": "419ccccd"},
    {"displayValue": "2.25 Times Power", "value": "41b06667"},
    {"displayValue": "2.5 Times Power", "value": "41c40000"},
    {"displayValue": "2.75 Times Power", "value": "41d7999a"},
    {"displayValue": "3 Times Power", "value": "41eb3334"},
    {"displayValue": "4 Times Power", "value": "421ccccd"},
    {"displayValue": "5 Times Power", "value": "42440000"},
    {"displayValue": "6 Times Power", "value": "426b3334"},
    {"displayValue": "7 Times Power", "value": "42893333"},
    {"displayValue": "8 Times Power", "value": "429ccccd"},
    {"displayValue": "9 Times Power", "value": "42b06667"},
    {"displayValue": "10 Times Power", "value": "42c40000"},
    {"displayValue": "20 Times Power", "value": "43440000"},
    {"displayValue": "25 Times Power", "value": "43750000"},
    {"displayValue": "50 Times Power", "value": "43f50000"},
    {"displayValue": "69 Times Power", "value": "44290ccd"},
    {"displayValue": "75 Times Power", "value": "4437c000"},
    {"displayValue": "100 Times Power", "value": "44750000"},
    {"displayValue": "250 Times Power", "value": "45192000"},
    {"displayValue": "420 Times Power", "value": "4580a000"},
    {"displayValue": "1337 Times Power", "value": "464cba67"},
];

const CASH_VALUES = [
    {"displayValue": "9,999,999", "value": "0098967F"}
];

const DRAG_VALUES = [//be4ccccd
    {"displayValue": "-1000% 10 Times Negative", "value": "bf800000"},
    {"displayValue": "-400% Quad Negative", "value": "becccccd"},
    {"displayValue": "-200% Double Negative", "value": "be4ccccd"},
    {"displayValue": "-100% Negative", "value": "bdcccccd"},
    {"displayValue": "0%", "value": "00000000"},
    {"displayValue": "100% Normal", "value": "3dcccccd"},
    {"displayValue": "200% Double", "value": "3e4ccccd"},
    {"displayValue": "400% Quad", "value": "3ecccccd"},
    {"displayValue": "1000% 10 Times", "value": "3f800000"},
];

const gearDefault = 0.001000000047;

const GEAR_VALUES = [//be4ccccd
    {"displayValue": `Default`, "value": "3a83126f"},
    {"displayValue": `90%`, "value": "3a6bedfb"},
    {"displayValue": `80%`, "value": "3a51b718"},
    {"displayValue": `70%`, "value": "3a378035"},
    {"displayValue": `60%`, "value": "3a1d4952"},
    {"displayValue": "50%", "value": "3a03126f"},
    {"displayValue": "25%", "value": "3983126f"},
    {"displayValue": "10%", "value": "38d1b717"},
];
//9800
const TYRE_WEAR_SCALE_VALUES = [
    {"displayValue": "10000% Scale", "value": "42c40000"},
    {"displayValue": "1000% Scale", "value": "44750000"},
    {"displayValue": "Default", "value": "46192000"},//value might be wrong(hex i mean)
    {"displayValue": "90% Scale", "value": "4609d000"},
    {"displayValue": "80% Scale", "value": "45f50000"},
    {"displayValue": "70% Scale", "value": "45d66000"},
    {"displayValue": "60% Scale", "value": "45b7c000"},
    {"displayValue": "50% Scale", "value": "45992000"},
    {"displayValue": "40% Scale", "value": "45750000"},
    {"displayValue": "30% Scale", "value": "4537c000"},
    {"displayValue": "20% Scale", "value": "44f50000"},
    {"displayValue": "10% Scale", "value": "47bf6800"},
    {"displayValue": "1% Scale", "value": "496f4200"},
];

const GRAVITY_VALES = [
    {"displayValue": "Earth", "value": "411ce979"},
    {"displayValue": "Sun", "value": "43890000"},
    {"displayValue": "Moon", "value": "3fcf5c29"},
    {"displayValue": "Jupiter", "value": "41c651ec"},
    {"displayValue": "Double Sun", "value": "44090000"},
    {"displayValue": "4x Sun", "value": "44890000"},
    {"displayValue": "8x Sun", "value": "45090000"},
    //44090000
];

const GAME_REGIONS = [
    {"displayValue": "PAL", "value": "pal"},
    {"displayValue": "NTSC", "value": "ntsc"},
];

const AI_RUBBERBAND_VALUES = [];
const AI_MAX_THROTTLE_VALUES = [];

for(const [displayValue, value] of Object.entries(FLOAT_VALUES)){

    const display = `${displayValue} - (${(displayValue * 100).toFixed(2)}%)`;

    AI_RUBBERBAND_VALUES.push({
        "displayValue": display , "value": value
    });

    AI_MAX_THROTTLE_VALUES.push({
        "displayValue": display, "value": value
    });
    
}

function sortByDisplayValue(a, b){
    a = a.displayValue;
    b = b.displayValue;

    if(a < b) return -1;
    if(a > b) return 1;
    return 0;
}

AI_RUBBERBAND_VALUES.sort(sortByDisplayValue);
AI_MAX_THROTTLE_VALUES.sort(sortByDisplayValue);

let _region = "pal";
const _groups = {
    "aiThrottleAsGroup" : false,
    "aiRubberbandAsGroup" : false,
};

const ADDRESSES = {
    //PAL 209539F8 NTSC //20958EF8
    "cash": {
        "displayValue": "Money", 
        "address": {"pal": "209539F8", "ntsc": "20958EF8"}, 
        "selected": null
    },
    // PAL 20351Cb8  9.800000191 // NTSC 2035032C // 
    "power": {
        "displayValue": "Global Power Multiplier", 
        "address": {"pal": "20351Cb8", "ntsc": "2035032C"}, 
        "selected": null
    },
    //9800 default value // PAL 20351B5c NTSC 203501D0 // offset 6540
    "tyreWear": {
        "displayValue": "Global Tyre Wear Multiplier", 
        "address": {"pal": "20351B5c", "ntsc": "203501D0"}, 
        "selected": null
    },
    //default value 0.1000000015
    "drag": {
        "displayValue": "Global Drag", 
        "address": {"pal": "20351B70", "ntsc": null}, 
        "selected": null
    },
    //default value 0.001000000047 // PAL 20351d0c // NTSC 20350380
    "gearScale": {
        "displayValue": "Global Gear Scale", 
        "address": {"pal": "20351d0c", "ntsc": "20350380"}, 
        "selected": null
    },
    //default value 9.800000191, PAL 20351ED4 NTSC 20350544 //offset of 6544
    "gravity": {
        "displayValue": "Gravity",
        "address": {"pal": "20351ED4", "ntsc": "20350544"}, 
        "selected": null
    },

    "aiRubberbandAll": {
        "displayValue": "ALL AI Rubberband", 
        //"address": {"pal": "21FBFEF8", "ntsc": "21FC15D4"}, 
        "selected": null
    },
    //PAL 21FC0460 //NTSC 21FC0460
    "aiRubberband1": {
        "displayValue": "AI Rubberband #1", 
        "address": {"pal": "21FC0460", "ntsc": "21FC0460"}, 
        "selected": null
    },
    //PAL 21FC1B3C //NTSC 21FC1B3C
    "aiRubberband2": {
        "displayValue": "AI Rubberband #2", 
        "address": {"pal": "21FC1B3C", "ntsc": "21FC1B3C"}, 
        "selected": null
    },
    //PAL 21FC3218 //NTSC 21FC48F4
    "aiRubberband3": {
        "displayValue": "AI Rubberband #3", 
        "address": {"pal": "21FC3218", "ntsc": "21FC3218"}, 
        "selected": null
    },
    //PAL 21FC48F4 //NTSC 21FC5FD0
    "aiRubberband4": {
        "displayValue": "AI Rubberband #4", 
        "address": {"pal": "21FC48F4", "ntsc": "21FC48F4"}, 
        "selected": null
    },
    //PAL 21FC5FD0 //NTSC 21FC3218
    "aiRubberband5": {
        "displayValue": "AI Rubberband #5", 
        "address": {"pal": "21FC5FD0", "ntsc": "21FC5FD0"}, 
        "selected": null
    },
    
    
    //PAL 21FBFEF8  //NTSC 21FC15D4
    "aiMaxThrottleAll": {
        "displayValue": "ALL AI MAX Throttle", 
        //"address": {"pal": "21FBFEF8", "ntsc": "21FC15D4"}, 
        "selected": null
    },
    "aiMaxThrottle1": {
        "displayValue": "AI MAX Throttle #1", 
        "address": {"pal": "21FBFEF8", "ntsc": "21FC15D4"}, 
        "selected": null
    },
    //PAL 21FC15D4  //NTSC 21FC2CB0
    "aiMaxThrottle2": {
        "displayValue": "AI MAX Throttle #2", 
        "address": {"pal": "21FC15D4", "ntsc": "21FC2CB0"}, 
        "selected": null
        
    },
    //PAL 21FC2CB0  //NTSC 21FC438C
    "aiMaxThrottle3": {
        "displayValue": "AI MAX Throttle #3", 
        "address": {"pal": "21FC2CB0", "ntsc": "21FC438C"}, 
        "selected": null
    },
    //PAL 21FC438C  //NTSC 21FBFEF8
    "aiMaxThrottle4": {
        "displayValue": "AI MAX Throttle #4", 
        "address": {"pal": "21FC438C", "ntsc": "21FBFEF8"}, 
        "selected": null
    }, 
    //PAL 21FC5A68  //NTSC 21FC5A68
    "aiMaxThrottle5": {
        "displayValue": "AI MAX Throttle #5", 
        "address": {"pal": "21FC5A68", "ntsc": "21FC5A68"}, 
        "selected": null
    },
};


function writeCheat(description, address, value){

    let string = `// ${description}\n`;
    string += `patch=1,EE,${address},extended,${value}\n`;

    return `${string}\n`;
}

function writeGroupCheat(description, addresses, value){

    let string = `// ${description}\n`;

    for(let i = 0; i < addresses.length; i++){
        string += `patch=1,EE,${addresses[i]},extended,${value}\n`;
    }

    return `${string}\n`;

}

function createOption(elem, displayValue, value){

    const option = document.createElement("option");
    option.value = value;
    option.innerHTML = displayValue;
    elem.appendChild(option);
}

const DEFAULT_OUTPUT = `gametitle=Gran Turismo 3 [SCES_502.94;1]PAL [B590CE04]\n\n`;
const NTSC_DEFAULT_OUTPUT = `gametitle=Gran Turismo 3 [PBPX_955.03;1]NTSC [8AA991B0]\n\n`;


function updateDownload(data, region){

    const download = document.querySelector("#download");

    if(region === "ntsc"){
        fileName = "8AA991B0";
    }else if(region === "pal"){
        fileName = "B590CE04";
    }else{
        fileName = "Unknown";
    }


    const rawData = new Blob([data]);

    download.download = `${fileName}.pnach`;

    download.href = URL.createObjectURL(rawData);
}

/**
 * 
 * @param {*} region 
 * @param {*} key 
 * @param {*} comment 
 * @param {*} forceTargetKey only used for groups, basically make the function use the value stored in that address key instead of the normal key
 * @returns 
 */
function createCheatLine(region, key, comment, forceTargetKey){

    if(ADDRESSES[key] === undefined){
        throw new Error(`ADDRESSES[${key}] is undefined.`);
    }

    let value = 0;
    let displayValue = "";

    const address = ADDRESSES[key];
    if(address.selected == null && forceTargetKey === undefined) return "";

    if(address.selected != undefined){
        value = address.selected.value ?? 0;
        displayValue = address.selected.displayValue;
    }

    if(forceTargetKey !== undefined){

        if(ADDRESSES[forceTargetKey].selected === null) return;
        value = ADDRESSES[forceTargetKey].selected.value;
        displayValue = ADDRESSES[forceTargetKey].selected.displayValue;
    }


    if(address.address[region] === undefined){
        throw new Error(`ADDRESSES[${key}].${region} is undefined`);
    }

    return writeCheat(
        `${comment}: ${displayValue}`, 
        address.address[region],
        value
    );
}

function setOutput(){

    const elem = document.querySelector("#output");

    let string = "";

    if(_region === "pal"){
        string = DEFAULT_OUTPUT;
    }else if(_region === "ntsc"){
        string = NTSC_DEFAULT_OUTPUT;
    }

    string += createCheatLine(_region, "power", "Global Power Multiplier") ?? "";
    string += createCheatLine(_region, "drag", "Drag Multiplier") ?? "";
    string += createCheatLine(_region, "gearScale", "Gear Scale Multiplier") ?? "";
    string += createCheatLine(_region, "cash", "Career Cash") ?? "";
    string += createCheatLine(_region, "tyreWear", "Tyre Wear Scale") ?? "";
    string += createCheatLine(_region, "gravity", "Gravity") ?? "";


    for(let i = 1; i <= 5; i++){

        if(!_groups["aiRubberbandAsGroup"]){
            string += createCheatLine(_region, `aiRubberband${i}`, `AI Rubberband #${i}`) ?? "";
        }else{
            string += createCheatLine(_region, `aiRubberband${i}`, `AI Rubberband #${i}`, "aiRubberbandAll") ?? "";
        }
    }

    //seperate into for lops to keep similar cheats together for easier manual editing

    for(let i = 1; i <= 5; i++){

        if(!_groups["aiThrottleAsGroup"]){
            string += createCheatLine(_region, `aiMaxThrottle${i}`, `AI Max Throttle #${i}`) ?? "";
        }else{
            string += createCheatLine(_region, `aiMaxThrottle${i}`, `AI Max Throttle #${i}`, "aiMaxThrottleAll")?? "";
        }

        
    }
 

    elem.innerHTML = string.replaceAll("\n","<br/>");

    updateDownload(string, _region);
}

function setDropDown(id, options, selectedCheatsKey){

    const elem = document.querySelector(id);

    for(let i = 0; i < options.length; i++){

        const {displayValue, value} = options[i];

        createOption(elem, displayValue, value);
    }

    elem.addEventListener("change", (e) =>{

        const selectedIndex = e.target.selectedIndex - 1;

        if(selectedIndex < 0){
            ADDRESSES[selectedCheatsKey].selected = null;      
        }else{

            ADDRESSES[selectedCheatsKey].selected = {
                "displayValue": options[selectedIndex].displayValue, 
                "value": e.target.value
            };

        }
        setOutput();
    }); 
}

function createToggleGroupButton(parent, text, valueKey, groupElem, allElem, setOutput){

    parent = document.querySelector(parent);

    const wrapper = document.createElement("div");
    wrapper.className = "toggle-group";

    const header = document.createElement("div");
    header.className = "toggle-info";
    header.innerHTML = text;

    const button = document.createElement("div");
    button.className = "toggle-button";
    button.innerHTML = "False";

    button.addEventListener("click", () =>{

        _groups[valueKey] = !_groups[valueKey];
        const value = _groups[valueKey];
        

        if(value){
            button.className = `toggle-button toggle-enabled`;
            button.innerHTML = "True";
            groupElem.className = "hidden";
            allElem.className = "";
        }else{
            button.className = `toggle-button toggle-disabled`;
            button.innerHTML = "False";
            groupElem.className = "";
            allElem.className = "hidden";
        }

        setOutput();
    });


    wrapper.appendChild(header);
    wrapper.appendChild(button);
    parent.appendChild(wrapper);
}


(() =>{

    const rElem = document.querySelector("#region");

    rElem.addEventListener("change", (e) =>{
        _region = e.target.value;
        setOutput();
    });
   
    const throttleGroup = document.querySelector("#throttle-default");
    const throttleAll = document.querySelector("#throttle-all");

    const rubberbandGroup = document.querySelector("#rubberband-default");
    const rubberbandAll = document.querySelector("#rubberband-all");


    //setDropDown("#region", GAME_REGIONS, "region");
    setDropDown("#power-multiplier", POWER_MULTIPLIERS, "power");
    setDropDown("#gravity", GRAVITY_VALES, "gravity");
    setDropDown("#cash", CASH_VALUES, "cash");
    setDropDown("#global-drag", DRAG_VALUES, "drag");
    setDropDown("#gear-ratio", GEAR_VALUES, "gearScale");
    setDropDown("#tyre-wear-scale", TYRE_WEAR_SCALE_VALUES, "tyreWear");

    setDropDown("#rb-all", AI_RUBBERBAND_VALUES, "aiRubberbandAll");
    setDropDown("#rb-1", AI_RUBBERBAND_VALUES, "aiRubberband1");
    setDropDown("#rb-2", AI_RUBBERBAND_VALUES, "aiRubberband2");
    setDropDown("#rb-3", AI_RUBBERBAND_VALUES, "aiRubberband3");
    setDropDown("#rb-4", AI_RUBBERBAND_VALUES, "aiRubberband4");
    setDropDown("#rb-5", AI_RUBBERBAND_VALUES, "aiRubberband5");

    setDropDown("#mf-all", AI_MAX_THROTTLE_VALUES, "aiMaxThrottleAll");
    setDropDown("#mf-1", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle1");
    setDropDown("#mf-2", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle2");
    setDropDown("#mf-3", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle3");
    setDropDown("#mf-4", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle4");
    setDropDown("#mf-5", AI_MAX_THROTTLE_VALUES, "aiMaxThrottle5");

    createToggleGroupButton("#ai-throttle-group", "One value for all the AI Cars Max Throttle", "aiThrottleAsGroup", throttleGroup, throttleAll, setOutput);
    createToggleGroupButton("#ai-rubberband-group", "One value for all the AI Cars Rubberband", "aiRubberbandAsGroup", rubberbandGroup, rubberbandAll, setOutput);

    setOutput();

    
})();