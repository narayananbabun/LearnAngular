export class clsLikeComponent 
{
    constructor(private _likeCount: number, private _isSelected: boolean) {
    }
    
    onClick() {
        // if(isSelected) {
        //     this._likeCount++;    
        // }
        // else{
        //     this._likeCount--;
        // }
        // this.isSelected = !this.isSelected;
        this._likeCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    }

    get likeCont(){
        return this._likeCount;
    }

    get isSelected(){
        return this.isSelected;
    }

    get myProperty()
    {
        return "My Text";
    }
}
