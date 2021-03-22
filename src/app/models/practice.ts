export class Practice {
    private _id:string;
    private _data:string;
    private _titul:string;
    private _contingut:string;
    private _tag:string[];
    private _img:string;

    constructor(){
        this._id="";
        this._data="";
        this._titul="";
        this._contingut="";
        this._tag=[];
        this._img="";
    }

    get id():string{
        return this._id;
    }
    get data():string{
        return this._data;
    }
    get titul():string{
        return this._titul;
    }

    get contingut():string{
        return this._contingut;
    }

    get img():string{
        return this._img;
        
    }
    get tag():string[]{
        return this._tag;
    }
    
    set id(id:string){
        this._id=id;
    }
    
    set data(data:string){
        this._data=data;
    }
    
    set img(img:string){
        this._img=img;
    }
    
    set tag(tag:string[]){
        this._tag=tag;
    }
    
    set titul(titul:string){
        this._titul=titul;
    }
    
    set contingut(contingut:string){
        this._contingut=contingut;
    }
}
