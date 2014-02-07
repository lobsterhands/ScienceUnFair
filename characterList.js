var charList = [];
function character (firstName, lastName, nickName, techBonus,
    diplomacyBonus, computerBonus, gearBonus, plasticBonus,                  
    scrapMetalBonus, wireBonus, buildBonus, dayTurns, nightTurns) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.techBonus = techBonus;
    this.diplomacyBonus = diplomacyBonus;
    this.computerBonus = computerBonus;
    this.gearBonus = gearBonus;
    this.plasticBonus = plasticBonus;
    this.scrapMetalBonus = scrapMetalBonus;
    this.wireBonus = wireBonus;
    this.buildBonus = buildBonus;
    this.dayTurns = dayTurns;
    this.nightTurns = nightTurns;
    charList.push(this);
}
var valerie = new character ("Valerie", "Montes", "The Wrench Wiz", 1, 0, 0, 0, 0, 0, 0, 0, 3, 5);
var attila = new character ("Attila", "Hun", "The Diplomat", 0, -1, 0, 0, 0, 0, 0, 0, 3, 5);
console.log(charList);
