"use strict";
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
var x = 10;
var y = 30;
var sum;
var title = "Mavewrick";
var isBeginner = true;
var total = 0;
var name = "Moses";
var sentence = "My name is " + name + "\nI am a beginner in typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuples: Fixed 
var person1 = ["Chris", 22];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
