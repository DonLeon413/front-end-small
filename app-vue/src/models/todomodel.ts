export class TodoModel
{
    constructor( private _id: number = Date.now(), private _title: string = "",
                 private _completed: boolean = false ) {

                 }
    get ID(): number {
        return this._id
    }

    set ID( value: number ) {
        this._id = value;
    }

    get Title(): string {
        
        return this._title;

    }

    set Title( value: string ) {

        this._title = value;

    }

    get Copmleted(): boolean {

        return this._completed;
    }

    set Completed( value: boolean ) {

        this._completed = value;

    }
}