var array = [];

function Person(name, job, techLevel, techBonus) {
    this.name = name;
    this.job = job;
    array.push(this); 
    this.greet = function() {
        console.log("Hello, " + this.name + ".");
    };
    this.roll = function() {
        var roll = Math.floor(Math.random() * 6 + 1);
        var rollBonus = roll + techLevel + techBonus;
        console.log(name + " rolls a " + roll);
        console.log("His tech level is " + techLevel + " and his tech bonus is " + techBonus + ". This adds a total of " + (techLevel + techBonus) + " to his roll.");
        console.log("The total of his roll is " +rollBonus);
        console.log("So " + name + " rolls a " + rollBonus + ".");
    };
}

var lyle = new Person("Lyle", "student", 3, 0);
var evan = new Person("Evan", "Renaissance man", 3, 1);
lyle.roll();
console.log();
evan.roll();
