"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clsLikeComponent = /** @class */ (function () {
    function clsLikeComponent(_likeCount, _isSelected) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
    }
    clsLikeComponent.prototype.onClick = function () {
        // if(isSelected) {
        //     this._likeCount++;    
        // }
        // else{
        //     this._likeCount--;
        // }
        // this.isSelected = !this.isSelected;
        this._likeCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(clsLikeComponent.prototype, "likeCont", {
        get: function () {
            return this._likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clsLikeComponent.prototype, "isSelected", {
        get: function () {
            return this.isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(clsLikeComponent.prototype, "myProperty", {
        get: function () {
            return "My Text";
        },
        enumerable: true,
        configurable: true
    });
    return clsLikeComponent;
}());
exports.clsLikeComponent = clsLikeComponent;
