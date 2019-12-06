"use strict";
exports.__esModule = true;
var VideoGames = /** @class */ (function () {
    function VideoGames(_name, _noOfPlayers) {
        this._name = _name;
        this._noOfPlayers = _noOfPlayers;
    }
    Object.defineProperty(VideoGames.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoGames.prototype, "noOfPlayers", {
        get: function () {
            return this._noOfPlayers;
        },
        set: function (value) {
            this._noOfPlayers = value;
        },
        enumerable: true,
        configurable: true
    });
    VideoGames.prototype.start = function () {
        console.log(this.name + " is starting with " + this.noOfPlayers + " players");
    };
    return VideoGames;
}());
exports.VideoGames = VideoGames;
