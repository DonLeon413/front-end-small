export class TodoModel {
    
    private _id: number;
    private _title: string;
    private _completed: boolean;
    

    constructor( title: string = null, id: number = Date.now(), completed: boolean = false ) {

        this._title = title;
        this._id = id;
        this._completed = completed;

    }

    get Title(): string {
        
        return this._title;

    }

    set Title( value: string ) {
        
        this._title = value;

    }

    get Id(): number {

        return this._id;

    }

    set Id( value: number ) {

        this._id = value;

    }

    get Completed(): boolean {

        return this._completed;

    }

    set Completed( value: boolean ) {

        this._completed = value;

    }
}