export class Stuffy {
     _id: number;
    get id(){
        return this._id;
    }
    set id(id:number){
        this._id = id
    }
    type: string;
    color: string;
    size: string;
    limbs: number;

constructor( i:number =0, t :string = '', c:string = '', s:string= '', l:number =0) {
this._id = i;
this.color = c;
this.type = t;
this.limbs = l;
this.size = s;
}
about():string{
    return 'Stuff: id = '+this._id+ 'Type = ' +this.type+' Color = ' +this.color+' Size = ' +this.size+ ' Limbs = '+this.limbs;
}
}