export class SwitchModel {

    constructor( private _id: number, private _newCompleted: boolean ) {

    }

    get ID(): number {

        return this._id;

    }

    get NewCompleted(): boolean {

        return this._newCompleted;

    }
}