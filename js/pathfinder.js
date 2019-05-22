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
        ["Class Skill    * Trained only",""]
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

    let stat = [
        "str",
        "dex",
        "con",
        "int",
        "wis",
        "cha"
    ]

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

                    if (stat.indexOf(skills[i][1].toLowerCase()) != -1) {
                        let x = stat.indexOf(skills[i][1].toLowerCase());
                        td.setAttribute("class",stat[x]+"Mod");
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

// This changes the stats shown in the ability modifier section of the skills and stats tables when a stat is changed
function statChange(stat) {
    var statScore = document.getElementsByName(stat+"Score")[0].value;
    let statMod = Math.floor(statScore / 2) - 5;
    for (let i = 0; i < document.getElementsByClassName(stat+"Mod").length; i++) {
        document.getElementsByClassName(stat+"Mod")[i].innerHTML = statMod;
    }
}