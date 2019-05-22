const skillTable = document.getElementsByClassName('skillTable');

function create_skills() {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let br = document.createElement("br");

    let skills = [
        ["Acrobatics", "Dex"],
        ["Appraise", "Int"],
        ["Bluff", "Cha"],
        ["Climb", "Str"],
        ["Craft", "Int"],
        ["Craft", "Int"],
        ["Craft", "Int"],
        ["Diplomacy", "Cha"],
        ["Disable Device*", "Dex"],
        ["Disguise", "Cha"],
        ["Escape Artist", "Dex"],
        ["Fly", "Dex"],
        ["Handle Animal*", "Cha"],
        ["Heal", "Wis"],
        ["Intimidate", "Cha"],
        ["Knowledge (Arcana)*", "Int"],
        ["Knowledge (Dungeoneering)*", "Int"],
        ["Knowledge (Engineering)*", "Int"],
        ["Knowledge (Geography)*", "Int"],
        ["Knowledge (History)*", "Int"],
        ["Knowledge (Local)*", "Int"],
        ["Knowledge (Nature)*", "Int"],
        ["Knowledge (Nobility)*", "Int"],
        ["Knowledge (Planes)*", "Int"],
        ["Knowledge (Religion)*", "Int"],
        ["Linguestics*", "Int"],
        ["Perception", "Wis"],
        ["Perform ", "Cha"],
        ["Perform ", "Cha"],
        ["Profession* ", "Wis"],
        ["Profession* ", "Wis"],
        ["Ride", "Dex"],
        ["Sense Motive", "Wis"],
        ["Sleight Of Hand*", "Dex"],
        ["Spellcraft*", "Int"],
        ["Stealth", "Dex"],
        ["Survival", "Wis"],
        ["Swim", "Str"],
        ["Use Magic Device", "Cha"],
        ["Class Skill    * Trained only"]
    ];
    let start = [
        "",
        "Skill Names",
        "Total",
        "br",
        "Bonus",
        "",
        "Ability",
        "br",
        "Mod.",
        "Ranks",
        "Misc.",
        "br",
        "Mod."
    ];
    let normal = [
        "input",
        "skills",
        "total",
        "stats",
        "abilityMod",
        "ranks",
        "miscMod"
    ];

    // Makes all the rows and column for the skills
    // Making each row in the skills
    for (let i = 0; i < skills.length; i++) {

        // Makes the top Row that defines each column.
        if (i == 0) {
            console.log("First row made");
            for (let j = 0; j < start.length; j++) {
                td = document.createElement("td");
                let textNode = document.createTextNode(start[j]);

                // Checks to see if there needs to be a break in the line to make the page more condensed
                if (start[j + 1] == "br") {
                    br = document.createElement("br");
                    td.appendChild(textNode);
                    td.appendChild(br);
                    textNode = document.createTextNode(start[j+2]);
                    add_Text(tr, td, textNode);
                    j += 2;
                } else {
                    add_Text(tr, td, textNode);
                }
            }
            console.log("First row Successfully Sent");
        } else {
            // Making each column in a row
            tr = document.createElement("tr");

            for (let j = 0; j < normal.length; j++) {
                td = document.createElement("td");
                let textNode = document.createTextNode(normal[j]);
                if (normal[j] == "input") {
                    let input = document.createElement("input");
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("name", "skill"+i);
                    add_Text(tr, td, input);
                } else if (normal[j] == "skills") {
                    let textNode = document.createTextNode(skills[i][0]);
                    if ((skills[i][0] == "Perform ") || (skills[i][0] == "Profession* ")) {
                        let input = document.createElement("input");
                        input.setAttribute("type", "text");
                        td.appendChild(textNode);
                        td.appendChild(input);
                        tr.appendChild(td);
                        skillTable[0].appendChild(tr);
                    } else {
                        add_Text(tr, td, textNode);
                    }
                } else if (normal[j] == "abilityMod") {
                    let textNode = document.createTextNode("");
                    if (skills[i][1] == "Str") {
                        td.setAttribute("class", "strMod");
                        console.log(td);
                    }
                    add_Text(tr, td, textNode);
                } else if (normal[j] == "stats") {
                    let textNode = document.createTextNode("=" + skills[i][1]);
                    add_Text(tr, td, textNode);
                } else if ((normal[j] == "ranks") || (normal[j] == "miscMod")) {
                    let input = document.createElement("input");
                    input.setAttribute("type", "number");
                    input.setAttribute("class", "number");
                    add_Text(tr, td, input);
                } else {
                    add_Text(tr, td, textNode);
                }
            }
        }
    }
}

function add_Text(tr, td, textChild) {
    td.appendChild(textChild);
    tr.appendChild(td);
    skillTable[0].appendChild(tr);
}

function strChange() {
    let strScore = document.getElementsByName("strScore")[0].value;
    let strMod = Math.floor(strScore / 2) - 5;
    for (let i = 0; i < document.getElementsByClassName("strMod").length; i++) {
        document.getElementsByClassName("strMod")[i].innerHTML = strMod;
    }
}

function dexChange() {
    var dexScore = document.getElementsByName("dexScore")[0].value;
    let dexMod = Math.floor(dexScore / 2) - 5;
    for (let i = 0; i < document.getElementsByClassName("strMod").length; i++) {
        document.getElementsByClassName(abilityMod + "Mod")[i].innerHTML = strMod;
    }
}

function conChange() {
    var conScore = document.getElementsByName("conScore")[0].value;
    let conMod = Math.floor(conScore / 2) - 5;
    for (let i = 0; i < document.getElementsByClassName("strMod").length; i++) {
        document.getElementsByClassName("strMod")[i].innerHTML = strMod;
    }
}

function intChange() {
    var intScore = document.getElementsByName("intScore")[0].value;
    let intMod = Math.floor(intScore / 2) - 5;
    for (let i = 0; i < document.getElementsByClassName("strMod").length; i++) {
        document.getElementsByClassName("strMod")[i].innerHTML = strMod;
    }
}

function wisChange() {
    var wisScore = document.getElementsByName("wisScore")[0].value;
    let wisMod = Math.floor(wisScore / 2) - 5;
    for (let i = 0; i < document.getElementsByClassName("strMod").length; i++) {
        document.getElementsByClassName("strMod")[i].innerHTML = strMod;
    }
}

function chaChange() {
    var chaScore = document.getElementsByName("chaScore")[0].value;
    let chaMod = Math.floor(chaScore / 2) - 5;
    for (let i = 0; i < document.getElementsByClassName("strMod").length; i++) {
        document.getElementsByClassName("strMod")[i].innerHTML = strMod;
    }
}