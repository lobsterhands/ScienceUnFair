function char (name, skill, bonus, techLevel) {
    this.name = name;
    this.skill = skill;
    this.bonus = bonus;
    this.techLevel = techLevel;
}

var valerie = new char("Valerie", "Tech Level: +", 1, 2);
console.log("This is Valerie");
console.log(valerie);

var startingTech = 0 + (valerie.techLevel + valerie.bonus);
//console.log(startingTech);

var charName = [];
charName.push(valerie);
//console.log(charName);

roll = Math.floor(Math.random() *6 + 1);
//console.log(roll);
build = roll + valerie.techLevel + valerie.bonus;
console.log();
console.log("Valerie rolls a " + roll + " and adds her tech level of " + (build - roll) + " to get " + build);

techNeed = valerie.techLevel + 6;
console.log();
console.log("Valerie's tech level is " + valerie.techLevel + " so she needs " + techNeed + " points to go up to tech level " + (valerie.techLevel + 1));

function techLevelRoll(x) {
    for (var i = 0; i < x; i++ ) {
    console.log(Math.floor(Math.random() * 6 + 1));
    }
}
techLevelRoll(1);








