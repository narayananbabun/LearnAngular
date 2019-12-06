function log(message) {
    console.log(message);
}
log("Hello World");
function doSomeThing() {
    for (var i = 0; i <= 5; i++) {
        console.log(i);
    }
    console.log("Finally:" + i); // usage of let // 
}
doSomeThing();
var a = 10;
var b = false;
var c = "I am string";
var d;
var e = [10, 20, 30];
var f = [1, false, "Dhoni"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Orage"] = 2] = "Orage";
    Color[Color["Yellow"] = 4] = "Yellow";
})(Color || (Color = {}));
var bgColor = Color.Blue;
bgColor = Color.Yellow;
var dolog = function (message) { return console.log(message); };
dolog;
var doPoint = function (point) {
};
doPoint({
    x: 1,
    y: 2
});
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //...
    };
    Point.prototype.getDistance = function () {
        //...
    };
    return Point;
}());
