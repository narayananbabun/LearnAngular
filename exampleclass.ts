export class VideoGames
{
    constructor (private _name?:string, private _noOfPlayers?:number)
    {

    }

    get name()
    {
        return this._name;
    }
    set name(value:string)
    {
        this._name = value;
    }

    get noOfPlayers()
    {
        return this._noOfPlayers;
    }

    set noOfPlayers(value:number)
    {
        this._noOfPlayers = value;
    }

    start() {
         console.log(this.name + " is starting with " + <string><unknown>this.noOfPlayers + " players");
        }
}




