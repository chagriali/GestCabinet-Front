export class SymptomeModel{
  idSymptome:Number
  libele:String;
  description:String;

  constructor(id: Number, libele: String , description:String) {
    this.idSymptome = id;
    this.libele = libele;
    this.description=description;
  }
  static createSymptome(object:any){
    if(object == null) return null;
    return new SymptomeModel(object.idSymptome,object.libele,object.description);
  }
  static createSymptomeArray(object:any){
    if(object == null) return null;
    let symptome:SymptomeModel[] = [];
    for(let s of object){
      symptome.push(new SymptomeModel(s.idSymptome,s.libele,s.description))
    }
    return symptome;
  }
}
