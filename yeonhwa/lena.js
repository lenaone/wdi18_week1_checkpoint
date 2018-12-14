// Js Variable

1. var captain = "Jack";

2. var phrase = "Oh " + captain +", my "+ captain;

// JS Conditionals

var souls = 3;
var lifeRafts = 2;

if (souls>lifeRafts) {
    console.log("SOS!");
}

//Data Structures - JS Arrays

1. var weekend = ['Saturday'];

2. weekend.push('Sunday');

3. weekend.unshift('Friday');

4. var day = weekend[0];

5. weekend.shift();

//Data Structures - JS Objects

1. 
//
    var brain = {
        energylevel: 10
    }

2. 
    var energy = {
        energylevel: 10
    }
3.

    var brain = {
        energy,
        dream: 'electric sheep'
    }
4.

    var brain = {
        energy,
        dream: 'electric sheep',
        dayDream: { lunch: ['burger', 'beer'] }
    }
5. 
    brain.dayDream.lunch.push('pudding');

// Js Functions
1.

    var areaOfRectangle = function () {
        return length * width;
    }

areaOfRectangle()

2. 
    
    var result = function(length,width) {
        return length * width;
    }

result(3,4)
